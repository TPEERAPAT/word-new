import Button from '@components/Button/Button';
// import type { MouseEventHandler } from 'react';

interface IConnectivities {
  onShowModal: Function;
  onServiceValue: Function;
}

const Connectivities: React.FC<IConnectivities> = ({
  onShowModal,
  onServiceValue,
}) => {
  const connects: string[] = [
    'API Services',
    'SMTP Email',
    'SMS API',
    'LINE Official Account',
    'Facebook',
  ];

  const sideModalHandle = (service: string) => {
    onShowModal();
    onServiceValue(service);
  };

  const connectConsole: JSX.Element[] = connects.map((connect, index) => (
    // eslint-disable-next-line react/jsx-key
    <div key={index} className="flex flex-col gap-2">
      <p className="font-medium">{connect}</p>
      <div
        className="
          flex flex-col items-center justify-center
          gap-4 rounded-[8px] border-[1px] border-solid border-greySettingOcare/10 p-4
        "
      >
        <div
          className="
              flex h-10 w-10 items-center justify-center 
              rounded-[50%] border-4 border-solid border-greySettingOcare/10
            "
        >
          <p className="text-[25px] font-bold text-greySettingOcare/10">!</p>
        </div>
        <p>{connect} not found</p>
        <button
          className="
            flex w-[180px] cursor-pointer items-center justify-center
            gap-2 rounded-[8px] border border-solid border-blueOcare 
            bg-white py-3 text-[14px] text-blueOcare
          "
          onClick={() => sideModalHandle(connect)}
        >
          <span className="font-semibold">+ </span>
          <p>{connect}</p>
        </button>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col gap-7">
      {connectConsole}
      <div className="flex items-center justify-end gap-4 pb-4">
        <button
          className="
            cursor-pointer rounded-[10px]
            border-2 border-solid border-greySettingOcare/10 bg-white 
            px-[100px] py-3
          "
        >
          Reset Default
        </button>
        <Button text="Submit" size="md" />
      </div>
    </div>
  );
};

export default Connectivities;
