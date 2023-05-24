import Card from '@components/Card/Card';
import PageHead from '@components/Ui/PageHead';
import type { MouseEventHandler } from 'react';
import React, { useState } from 'react';

import Navbar from '../navbar/Navbar';
import Connectivities from './SettingComponents/Connectivities';
import CustomerConnect from './SettingComponents/CustomerConnect';
import GeneralInformation from './SettingComponents/GeneralInformation';
import IAMAccessManagement from './SettingComponents/IAMAccessManagement';
import WhitelistIP from './SettingComponents/WhitelistIP';

interface IComponentImport {
  title: string;
  component: JSX.Element;
  isActive: boolean;
}

interface ISetting {
  onShowModal: MouseEventHandler<HTMLButtonElement>;
  onServiceValue: Function;
  isVisibleModal: boolean;
}

const Setting: React.FC<ISetting> = ({
  onShowModal,
  onServiceValue,
  isVisibleModal,
}) => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState<number>(0);

  const serviceValueHandler = (service: string) => {
    onServiceValue(service);
  };

  const componentImport: IComponentImport[] = [
    {
      title: 'General Information',
      component: <GeneralInformation />,
      isActive: true,
    },
    {
      title: 'Connectivities',
      component: (
        <Connectivities
          onShowModal={onShowModal}
          onServiceValue={serviceValueHandler}
        />
      ),
      isActive: false,
    },
    {
      title: 'IAM (Access Management)',
      component: (
        <IAMAccessManagement
          onShowModal={onShowModal}
          onServiceValue={serviceValueHandler}
        />
      ),
      isActive: false,
    },
    {
      title: 'Whitelist IP',
      component: <WhitelistIP />,
      isActive: false,
    },
    {
      title: 'Customer Connect',
      component: <CustomerConnect />,
      isActive: false,
    },
  ];

  const [componentActive, setComponentActive] =
    useState<IComponentImport[]>(componentImport);

  const selectedComponentHandler = (componentIndex: number) => {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    componentActive.forEach((comp) => (comp.isActive = false));
    const chosenTitle = componentActive[componentIndex]?.title;
    const updateActiveComp = {
      ...componentActive[componentIndex],
      isActive: true,
    };
    const updateIsActive = componentActive.map((oldActive) =>
      oldActive.title === chosenTitle ? updateActiveComp : oldActive
    ) as IComponentImport[];
    setComponentActive(updateIsActive);
    setCurrentComponentIndex(componentIndex);
  };

  return (
    <>
      <div className={`${isVisibleModal && 'fixed w-[99%]'}`}>
        <Navbar activeNav="Setting">
          <div className="mb-3 flex flex-col sm:mb-6 ">
            <PageHead title="Oraganization setting up" />

            <div className="m-5">
              <Card shadow className="">
                {/* navbar area border-black */}
                <nav className="border px-4">
                  <div className="flex h-16 items-center justify-center">
                    <div className="flex w-full flex-row justify-start gap-10">
                      {componentActive.map((link, index) => (
                        <a
                          key={index}
                          onClick={() => selectedComponentHandler(index)}
                          className={`border-b ${
                            link.isActive
                              ? 'font-bold text-indigo-900'
                              : 'font-medium text-gray-500'
                          } cursor-pointer rounded-md text-lg`}
                        >
                          {link.title}
                          {link.isActive && (
                            <hr className="h-[2px] border-indigo-900 " />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                  <hr className="relative bottom-[19px] opacity-40" />
                </nav>

                <div className="m-5 mt-2">
                  {componentImport[currentComponentIndex]!.component}
                </div>
              </Card>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Setting;
