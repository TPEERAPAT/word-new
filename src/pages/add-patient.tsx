import AddPatientLanding from '@components/051-addPatient/AddPatientLanding';
import type { IFileUpload } from '@components/051-addPatient/Data-Management/WhitelistImport';
import { defaultValues } from '@components/051-addPatient/Data-Management/WhitelistImport';
import Modal from '@components/051-addPatient/Modal';
import { useState } from 'react';

const AddPatientPage = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [fileUpload, setFileUpload] = useState<IFileUpload>(defaultValues);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);

  const showModalHandler = () => {
    setIsVisibleModal(true);
  };

  const hideModalHandler = () => {
    setIsVisibleModal(false);
  };

  const fileUploadHandler = (data: IFileUpload) => {
    setFileUpload(data);
  };

  const loadingHandler = (status: boolean) => {
    setLoadingStatus(status);
  };

  return (
    <>
      <AddPatientLanding
        onFileUploadHandler={fileUploadHandler}
        onShowModal={showModalHandler}
        onLoadingHandler={loadingHandler}
      />
      {isVisibleModal && (
        <Modal
          fileUpload={fileUpload}
          loadingStatus={loadingStatus}
          onLoadingHandler={loadingHandler}
          onHideModal={hideModalHandler}
        />
      )}
    </>
  );
};

export default AddPatientPage;
