// import AddEditPopup from '@components/060-setting/AddEditPopup';
import type { IIAMAcessManagementForm } from '@components/060-setting/ConnectivitiesSideSetting/IAMForm/IAMForm';
import Setting from '@components/060-setting/Setting';
import SideModal from '@components/060-setting/SideModal';
import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

export interface IIAMContext {
  patientsData: IIAMAcessManagementForm[];
  onAddpatientData: (data: IIAMAcessManagementForm) => void;
}

export const IAMContext = createContext<IIAMContext>({
  patientsData: [],
  onAddpatientData: () => {},
});

export const IAMProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [patientsData, setPatientData] = useState<IIAMAcessManagementForm[]>(
    []
  );

  const appPatientData = (data: IIAMAcessManagementForm) => {
    setPatientData((prevPatient) => {
      return [...prevPatient, data];
    });
  };

  // eslint-disable-next-line no-console
  console.log(patientsData);

  return (
    <IAMContext.Provider
      value={{
        patientsData,
        onAddpatientData: appPatientData,
      }}
    >
      {children}
    </IAMContext.Provider>
  );
};

const SettingPage = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [serviceValue, setServiceValue] = useState<string>('');

  const showModalHandler = () => {
    setIsVisibleModal(true);
  };

  const hideModalHandler = () => {
    setIsVisibleModal(false);
  };

  const getServiceValueHandler = (service: string) => {
    setServiceValue(service);
  };

  return (
    <IAMProvider>
      <Setting
        onShowModal={showModalHandler}
        onServiceValue={getServiceValueHandler}
        isVisibleModal={isVisibleModal}
      />
      {isVisibleModal && (
        <SideModal onHideModal={hideModalHandler} serviceValue={serviceValue} />
      )}
    </IAMProvider>
  );
};

export default SettingPage;
