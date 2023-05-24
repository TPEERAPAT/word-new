import copy from '@assets/copy.png';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

const LINEMessagingAPI = () => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="">Channel ID</label>
        <input
          type="text"
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className="
            h-8 w-[50%] rounded-[8px] border-solid border-[rgba(0,0,0,0.1)]
            px-2 py-6
            placeholder-[rgba(0,0,0,0.2)] outline-none
          "
          {...register('OAManager.channelId')}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="">Channel Secret</label>
        <input
          type="text"
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className="
            h-8 w-[50%] rounded-[8px] border-solid border-[rgba(0,0,0,0.1)]
            px-2 py-6
            placeholder-[rgba(0,0,0,0.2)] outline-none
          "
          {...register('OAManager.channelSecret')}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="">Webhook URL</label>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className="
              h-8 w-[80%] rounded-[8px] border-solid border-[rgba(0,0,0,0.1)]
              px-2 py-6
              placeholder-[rgba(0,0,0,0.2)] outline-none
            "
            {...register('OAManager.webhookURL')}
          />
          <button
            className="
              flex w-[20%] cursor-pointer flex-row 
              items-center justify-center rounded-[8px] border
              border-solid border-blueOcare bg-white
            "
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                className="text-blueOcare"
                src={copy}
                width={20}
                height={20}
                alt="copy"
              />
              <p className="font-medium text-blueOcare">Copy</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LINEMessagingAPI;
