import type { MouseEventHandler } from 'react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { makeRequest } from '../makeRequest';

interface IModal {
  onHideModal:
    | MouseEventHandler<HTMLDivElement>
    | MouseEventHandler<HTMLButtonElement>;
}

interface ISMPTEmail {
  Name: string;
  Email: string;
  Password: string;
  OutgoingServer: string;
  Port: string;
}

const defaultValues = {
  Name: '',
  Email: '',
  Password: '',
  OutgoingServer: '',
  Port: '',
};

const SMTPEmail: React.FC<IModal> = ({ onHideModal }) => {
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  const { register, handleSubmit, reset, formState } = useForm<ISMPTEmail>({
    defaultValues,
  });

  const onSubmit = async (data: ISMPTEmail) => {
    // eslint-disable-next-line no-console
    console.log(data);

    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'https://atlasapi.optimizecare.com/api/v2/setting/upsmtp',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3OTkwNzAxNiwianRpIjoiOTVjZGNjOTMtZDJiOS00Y2NlLWI4MTAtMDQ0OWY0ZmFhZDgzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGVfaWQiOiI2M2U0OTE1MjNhZDBiYjE1MjZhNmY3ZjQifSwibmJmIjoxNjc5OTA3MDE2LCJleHAiOjE2ODAyNTI2MTZ9.I8pgWS84mD_1yB4YcVax6kq2r9V5cA_NAN5qVPj5m4I',
      },
      data,
    };

    try {
      const response = await makeRequest.request(config);
      // eslint-disable-next-line no-console
      console.log(response.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const resetFormHandler = () => reset();

  return (
    <>
      <div className="flex flex-row items-center justify-between border-0 border-b border-solid border-greySettingOcare/20 p-6">
        <div className="flex flex-row items-center justify-start gap-2 text-[24px]">
          <p className="font-medium">SMTP Email</p>
          <p className="text-greySettingOcare/40">(Add/Edit)</p>
        </div>
        <button
          className="
            flex cursor-pointer items-center justify-center
            border-none bg-transparent text-[20px] text-greySettingOcare/40
          "
          onClick={onHideModal as MouseEventHandler<HTMLButtonElement>}
        >
          X
        </button>
      </div>
      {/* <hr /> */}
      <div className="w-[100%] p-6">
        <div className="flex flex-col gap-4 rounded-[10px] bg-greyRoundedOcare p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div
                className="flex cursor-pointer flex-row items-center gap-2"
                onClick={() => setToggleSwitch(!toggleSwitch)}
              >
                <div
                  className={`${
                    toggleSwitch ? 'bg-blueOcare' : 'bg-greyOcare/50'
                  } relative h-5 w-10 rounded-full`}
                >
                  <input type="checkbox" className="sr-only" />
                  <span
                    className={`absolute top-[2px]  h-4/5 w-2/5 rounded-full bg-white ${
                      toggleSwitch ? 'left-[22px]' : 'left-[2px]'
                    }`}
                  ></span>
                </div>
              </div>
              <p className="font-medium">On</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="">Name</label>
              <input
                type="email"
                // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                className="
                  h-8 w-3/5 rounded-[8px] border-solid border-greySettingOcare/10
                  px-2 py-6
                  placeholder-greySettingOcare/20 outline-none
                "
                disabled={!toggleSwitch}
                {...register('Name', {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="">Email</label>
              <input
                type="email"
                // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                className="
                  h-8 w-3/5 rounded-[8px] border-solid border-greySettingOcare/10
                  px-2 py-6
                  placeholder-greySettingOcare/20 outline-none
                "
                disabled={!toggleSwitch}
                {...register('Email', {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="">Password</label>
              <div
                className="
                  flex w-3/5 items-center rounded-[8px]
                  border-2 border-solid border-greySettingOcare/10
                "
              >
                <input
                  type={togglePassword ? 'text' : 'password'}
                  // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                  className="
                    h-8 w-[90%] rounded-l-[8px] border-none px-2
                    py-6 placeholder-greySettingOcare/10
                    outline-none
                  "
                  disabled={!toggleSwitch}
                  {...register('Password', {
                    required: true,
                  })}
                />
                <button
                  className={`
                    w-[10%] border-none ${
                      toggleSwitch ? 'bg-white' : 'bg-[rgba(226,226,226,0.1)]'
                    } 
                    flex h-8 cursor-pointer items-center
                    justify-center rounded-r-[6px] py-6
                    text-[25px] text-greySettingOcare/20
                  `}
                  disabled={!toggleSwitch}
                  onClick={() => setTogglePassword(!togglePassword)}
                >
                  {togglePassword ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </button>
              </div>
            </div>
            <div className="flex w-[100%] flex-row gap-4">
              <div className="flex w-3/5 flex-col gap-2">
                <label className="">Outgoing Server</label>
                <input
                  type="text"
                  // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                  className="
                    h-8 w-[100%] rounded-[8px] border-solid border-greySettingOcare/10
                    px-2 py-6
                    placeholder-greySettingOcare/20 outline-none
                  "
                  disabled={!toggleSwitch}
                  {...register('OutgoingServer', {
                    required: true,
                  })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="">Port</label>
                <input
                  type="text"
                  // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                  className="
                    h-8 w-3/5 rounded-[8px] border-solid border-greySettingOcare/10
                    px-2 py-6
                    placeholder-greySettingOcare/20 outline-none
                  "
                  disabled={!toggleSwitch}
                  {...register('Port', {
                    required: true,
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 px-6 py-[-100px]">
        <button
          className="
            w-[188px] cursor-pointer rounded-[10px]
            border border-solid border-redOcare 
            bg-white p-3 text-redOcare
          "
          onClick={resetFormHandler}
        >
          Delete
        </button>
        <button
          className={`
            w-[188px] rounded-[10px] border-none
            p-3 hover:bg-blueOcare/50
            ${
              formState.isValid
                ? 'cursor-pointer border-none border-blueOcare bg-blueOcare'
                : 'cursor-not-allowed bg-blueOcare/50'
            } 
            text-white
          `}
          disabled={!formState.isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
        {/* <Button text="Submit" size="sm" onClick={handleSubmit(onSubmit)} /> */}
      </div>
    </>
  );
};

export default SMTPEmail;
