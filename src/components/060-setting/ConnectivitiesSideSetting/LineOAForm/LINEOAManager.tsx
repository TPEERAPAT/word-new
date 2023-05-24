import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AiOutlineCopy } from 'react-icons/ai';

interface OAInput {
  ChannelId: string;
  ChannelSecret: string;
  WebhookURL: string;
}

interface ILINEOAManager {
  onchangeOA: Function;
}

const LINEOAManager: React.FC<ILINEOAManager> = ({ onchangeOA }) => {
  const { register } = useFormContext();
  const [validate, setValidate] = useState<OAInput>({
    ChannelId: '',
    ChannelSecret: '',
    WebhookURL: '',
  });

  useEffect(() => {
    onchangeOA(validate);
  }, [onchangeOA, validate]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="">Channel ID</label>
        <input
          type="text"
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className="
            h-8 w-[50%] rounded-[8px] border-solid border-greySettingOcare/10
            px-2 py-6
            placeholder-greySettingOcare/20 outline-none
          "
          {...register('OAManager.ChannelId', {
            onChange: (e) =>
              setValidate((prev: OAInput) => {
                return { ...prev, ChannelId: e.target.value };
              }),
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="">Channel Secret</label>
        <input
          type="text"
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className="
            h-8 w-[50%] rounded-[8px] border-solid border-greySettingOcare/10
            px-2 py-6
            placeholder-greySettingOcare/20 outline-none
          "
          {...register('OAManager.ChannelSecret', {
            onChange: (e) =>
              setValidate((prev: OAInput) => {
                return { ...prev, ChannelSecret: e.target.value };
              }),
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="">Webhook URL</label>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className="
              h-8 w-[80%] rounded-[8px] border-solid border-greySettingOcare/10
              px-2 py-6
              placeholder-greySettingOcare/20 outline-none
            "
            {...register('OAManager.WebhookURL', {
              onChange: (e) =>
                setValidate((prev: OAInput) => {
                  return { ...prev, WebhookURL: e.target.value };
                }),
            })}
          />
          <button
            className="
              flex w-[20%] cursor-pointer flex-row 
              items-center justify-center rounded-[8px] border
              border-solid border-blueOcare bg-white
            "
          >
            <div
              className="flex flex-row items-center justify-center gap-2 text-blueOcare"
              onClick={() => navigator.clipboard.writeText(validate.WebhookURL)}
            >
              <AiOutlineCopy className="text-[20px]" />
              <p className="font-medium ">Copy</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LINEOAManager;
