import type { MouseEventHandler } from 'react';
import React from 'react';

import APIServices from './ConnectivitiesSideSetting/APIServices';
import Facebook from './ConnectivitiesSideSetting/Facebook';
import IAMForm from './ConnectivitiesSideSetting/IAMForm/IAMForm';
import LineOA from './ConnectivitiesSideSetting/LineOA';
import SMSAPI from './ConnectivitiesSideSetting/SMSAPI';
import SMPTEmail from './ConnectivitiesSideSetting/SMTPEmail';

interface IModal {
  onHideModal: MouseEventHandler<HTMLDivElement>;
  serviceValue: string;
}

interface IServiceAdding {
  title: string;
  serviceElement: JSX.Element;
}

const SideModal: React.FC<IModal> = ({ onHideModal, serviceValue }) => {
  const serviceAdding: IServiceAdding[] = [
    {
      title: 'API Services',
      serviceElement: <APIServices onHideModal={onHideModal} />,
    },
    {
      title: 'SMTP Email',
      serviceElement: <SMPTEmail onHideModal={onHideModal} />,
    },
    {
      title: 'SMS API',
      serviceElement: <SMSAPI onHideModal={onHideModal} />,
    },
    {
      title: 'LINE Official Account',
      serviceElement: <LineOA onHideModal={onHideModal} />,
    },
    {
      title: 'Facebook',
      serviceElement: <Facebook onHideModal={onHideModal} />,
    },
    {
      title: 'IAM',
      serviceElement: <IAMForm onHideModal={onHideModal} />,
    },
  ];

  const sideModaService = serviceAdding.filter(
    (element) => element.title === serviceValue
  )[0]!.serviceElement;

  return (
    <div
      className="
        fixed inset-0 z-20 flex 
        flex-col items-end justify-center bg-black/25 backdrop-blur-sm
      "
      // onClick={onHideModal as MouseEventHandler<HTMLDivElement>}
    >
      <div
        className="
          absolute z-20 flex h-[100%] w-1/2
          flex-col overflow-auto bg-white
        "
      >
        {sideModaService}
      </div>
    </div>
  );
};

export default SideModal;
