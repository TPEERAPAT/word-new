import Card from '@components/Card/Card';
import PageHead from '@components/Ui/PageHead';
import React, { useState } from 'react';

import Navbar from '../navbar/Navbar';
import BulkImporFunction from './Data-Management/BulkImportFunction';
import SingleImport from './Data-Management/SingleImport';
import type { IFileUpload } from './Data-Management/WhitelistImport';
import WhitelistImport from './Data-Management/WhitelistImport';
// import Modal from './Modal';

interface IAddPatientLanding {
  onShowModal: Function;
  onFileUploadHandler: Function;
  onLoadingHandler: Function;
}

interface IComponentImport {
  title: string;
  component: JSX.Element;
  isActive: boolean;
}

const AddPatientLanding: React.FC<IAddPatientLanding> = ({
  onShowModal,
  onFileUploadHandler,
  onLoadingHandler,
}) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  // const [response, setResponse] = useState<any>('');
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const fileUploadHandler = (data: IFileUpload) => {
    onFileUploadHandler(data);
  };

  const componentImport: IComponentImport[] = [
    {
      title: 'Single import',
      component: <SingleImport />,
      isActive: true,
    },
    {
      title: 'Whitelist import',
      component: (
        <WhitelistImport
          onFileUploadHandler={fileUploadHandler}
          onShowModal={onShowModal}
          onLoadingHandler={onLoadingHandler}
        />
      ),
      isActive: false,
    },
    {
      title: 'Bulk import',
      component: <BulkImporFunction />,
      isActive: false,
    },
  ];
  const [componentActive, setComponentActive] =
    useState<IComponentImport[]>(componentImport);

  const goToSlide = (slideIndex: any) => {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    componentActive.forEach((item) => (item.isActive = false));
    const chosenTitle = componentActive[slideIndex]?.title || '';
    const updateActiveBar = {
      ...componentActive[slideIndex],
      isActive: true,
    };
    const updateIsActive = componentActive.map((oldActive) =>
      oldActive.title === chosenTitle ? updateActiveBar : oldActive
    ) as IComponentImport[];
    setComponentActive(updateIsActive);
    setCurrentComponentIndex(slideIndex);
  };

  return (
    <>
      <Navbar activeNav="Data Management">
        <div className="mb-3 flex flex-col sm:mb-6">
          <PageHead title="Data Management" />
          <div className="m-5">
            <Card shadow className="">
              <nav className="border px-4">
                <div className="flex h-16 items-center justify-center">
                  <div className="flex w-full flex-row justify-start gap-10">
                    {componentActive.map((link, index) => (
                      <a
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`border-b ${
                          link.isActive
                            ? 'font-bold text-blueOcare'
                            : 'font-medium text-greySettingOcare/50'
                        } cursor-pointer rounded-md text-lg`}
                      >
                        {link.title}
                        {link.isActive && (
                          <hr className="h-[2px] border-blueOcare " />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
                <hr className="relative bottom-[19px] opacity-40" />
              </nav>

              {/* component area will move this to the component */}
              <div className="m-5 mt-2">
                {componentImport[currentComponentIndex]!.component}
              </div>
            </Card>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default AddPatientLanding;
