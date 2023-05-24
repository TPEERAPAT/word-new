import type { MouseEventHandler } from 'react';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaArrowLeft, FaArrowRight, FaSyncAlt } from 'react-icons/fa';

import { makeRequest } from '../makeRequest';
import BasicId from './LineOAForm/BasicId';
import LINEOAManager from './LineOAForm/LINEOAManager';

interface IModal {
  onHideModal:
    | MouseEventHandler<HTMLDivElement>
    | MouseEventHandler<HTMLButtonElement>;
}

type LineBasicId = {
  BasicId: string;
};

type OAManager = {
  ChannelId: string;
  ChannelSecret: string;
  WebhookURL: string;
};

interface ILineOAMAnager {
  LineBasicId: LineBasicId;
  OAManager: OAManager;
}

interface OAInput {
  ChannelId: string;
  ChannelSecret: string;
  WebhookURL: string;
}

const defaultValues = {
  LineBasicId: {
    BasicId: '',
  },
  OAManager: {
    ChannelId: '',
    ChannelSecret: '',
    WebhookURL: '',
  },
};

const LineOA: React.FC<IModal> = ({ onHideModal }) => {
  const [toggleForm, setToggleForm] = useState<boolean>(false);
  const [lineEnable, setLineEnable] = useState<boolean>(false);
  const [basicIdCompleted, setBasicIdCompleted] = useState<boolean>(false);
  const [OAManagerCompleted, setOAManagerCompleted] = useState<boolean>(false);
  const [currentComponentIndex, setCurrentComponentIndex] = useState<number>(0);

  const methods = useForm<ILineOAMAnager>({ defaultValues });

  const changeBasicIdHandler = (basicId: string) => {
    if (basicId.length > 0) setBasicIdCompleted(true);
    else setBasicIdCompleted(false);
  };

  const changeOAHandler = (OA: OAInput) => {
    const { ChannelId, ChannelSecret, WebhookURL } = OA;
    if (
      ChannelId.length > 0 &&
      ChannelSecret.length > 0 &&
      WebhookURL.length > 0
    )
      setOAManagerCompleted(true);
    else setOAManagerCompleted(false);
  };

  const nextComponentHandler = () => {
    const nextComponent = currentComponentIndex + 1;
    setCurrentComponentIndex(nextComponent);
  };

  const prevComponentHandler = () => {
    setCurrentComponentIndex((currCom) => {
      return currCom - 1;
    });
  };

  const onSubmit = async (data: ILineOAMAnager) => {
    // eslint-disable-next-line no-console
    console.log(data);

    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: '/upline',
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

  const resetFormHandler = () => {
    setBasicIdCompleted(false);
    setOAManagerCompleted(false);
    methods.reset();
  };

  return (
    <>
      <div
        className="
          flex flex-row items-center justify-between 
          border-0 border-b border-solid border-greySettingOcare/20
          p-6
        "
      >
        <div className="flex flex-row items-center justify-start gap-2 text-[24px]">
          <p className="font-medium">LINE Official Account</p>
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
        <div className="flex flex-row gap-4 pb-5">
          <div
            className="flex cursor-pointer flex-row items-center gap-2"
            onClick={() => setToggleForm(!toggleForm)}
          >
            <div
              className={`${
                toggleForm ? 'bg-blueOcare' : 'bg-greyOcare/50'
              } relative h-5 w-10 rounded-full`}
            >
              <input type="checkbox" className="sr-only" />
              <span
                className={`absolute top-[2px]  h-4/5 w-2/5 rounded-full bg-white ${
                  toggleForm ? 'left-[22px]' : 'left-[2px]'
                }`}
              ></span>
            </div>
          </div>
          <p className="font-medium">On</p>
        </div>
        <div className="mb-6 flex flex-col gap-4 rounded-[10px] bg-greyRoundedOcare p-6">
          <p className="font-medium">LINE User Profile</p>
          <div className="flex flex-row gap-4">
            <div
              className={`w-1/2 border border-solid ${
                lineEnable ? 'border-greenLineOcare' : ''
              } flex cursor-pointer flex-row 
              items-center justify-center rounded-[6px]`}
            >
              <div className="flex flex-row gap-2 py-2">
                <div
                  className="flex cursor-pointer flex-row items-center gap-2"
                  onClick={() => setLineEnable(!lineEnable)}
                >
                  <div
                    className={`${
                      lineEnable
                        ? 'bg-greenLineOcare'
                        : 'bg-greySettingOcare/50'
                    } relative h-5 w-10 rounded-full`}
                  >
                    <input type="checkbox" className="sr-only" />
                    <span
                      className={`absolute top-[2px]  h-4/5 w-2/5 rounded-full bg-white ${
                        lineEnable ? 'left-[22px]' : 'left-[2px]'
                      }`}
                    ></span>
                  </div>
                </div>
                <p
                  className={`font-medium ${
                    lineEnable ? 'text-greenLineOcare' : ''
                  }`}
                >
                  Enable LINE Login
                </p>
              </div>
            </div>
            <div
              className="
                flex w-1/2 cursor-pointer flex-row items-center 
                justify-center gap-2 rounded-[6px] border border-solid
              "
            >
              <FaSyncAlt />
              <p className="font-medium">Synced user information</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-[10px] bg-greyRoundedOcare p-6">
          <p className="font-medium">LINE Messaging API</p>
          <div className="">
            <div className="flex flex-row gap-4 pb-8">
              <div
                className={`
                  flex flex-row items-center justify-center 
                  ${currentComponentIndex === 0 && 'bg-blueOcare/50'}
                  gap-2 border border-solid ${
                    basicIdCompleted &&
                    'border-none bg-greenLineOcare/50 text-black/70'
                  } w-1/2 
                  rounded-[24px] py-3
                `}
              >
                <div
                  className="
                    flex h-6 w-6 items-center
                    justify-center rounded-full border border-solid
                  "
                >
                  <p>1</p>
                </div>
                <p className="text-[14px] font-medium">LINE Basic ID</p>
              </div>
              <div
                className={`
                flex flex-row items-center justify-center 
                ${currentComponentIndex === 1 && 'bg-blueOcare/50'}
                gap-2 border border-solid ${
                  OAManagerCompleted &&
                  'border-none bg-greenLineOcare/50 text-black/70'
                } w-1/2 
                rounded-[24px] py-3
              `}
              >
                <div
                  className="
                    flex h-6 w-6 items-center
                    justify-center rounded-full border border-solid
                  "
                >
                  <p>2</p>
                </div>
                <p className="text-[14px] font-medium">LINE OA Manager</p>
              </div>
            </div>
            <FormProvider {...methods}>
              {currentComponentIndex === 0 && (
                <>
                  <BasicId onchangeBasicId={changeBasicIdHandler} />
                  <div className="flex items-center justify-end pt-12">
                    <button
                      className={`
                        flex flex-row items-center justify-center gap-1
                        rounded-[10px] border-blueOcare px-[70px] py-3 text-white
                        ${
                          basicIdCompleted
                            ? 'cursor-pointer border border-solid bg-blueOcare'
                            : 'cursor-not-allowed border-none bg-blueOcare/50'
                        }  
                      `}
                      disabled={!basicIdCompleted}
                      onClick={nextComponentHandler}
                    >
                      <p className="font-semibold">Next</p>
                      <FaArrowRight />
                    </button>
                  </div>
                </>
              )}
              {/* <form onSubmit={methods.handleSubmit(onSubmit)}> */}
              {currentComponentIndex === 1 && (
                <>
                  <LINEOAManager onchangeOA={changeOAHandler} />
                  <div className="flex items-center justify-end gap-4 pt-12">
                    <button
                      className="
                        flex cursor-pointer flex-row items-center
                        justify-center gap-1 rounded-[10px] border-2 border-solid border-blueOcare
                        bg-white px-[70px] py-3
                      "
                      onClick={prevComponentHandler}
                    >
                      <FaArrowLeft />
                      <p className="font-semibold text-blueOcare">Back</p>
                    </button>
                    {/* <button
                      className="
                        rounded-[10px] px-[70px] py-3 justify-center items-center
                        bg-blueOcare border border-solid flex flex-row gap-1
                        border-blueOcare cursor-pointer text-white
                      "
                      onClick={nextComponentHandler}
                    >
                      <p className="font-semibold">Next</p>
                      <Image src={right} width={15} height={20} alt="right" />
                    </button> */}
                  </div>
                </>
              )}
              {/* {currentComponentIndex === 2 && (
                <>
                  <LINEOADevelopers />
                  <div className="flex justify-end pt-12">
                    <button
                      className="
                        rounded-[10px] px-[70px] justify-center items-center
                        bg-white py-3 border-2 border-solid flex flex-row
                        border-blueOcare cursor-pointer gap-1
                      "
                      onClick={prevComponentHandler}
                    >
                      <Image src={left} width={15} height={20} alt="left" />
                      <p className="font-semibold text-blueOcare">Back</p>
                    </button>
                  </div>
                </>
              )} */}
              {/* </form> */}
            </FormProvider>
          </div>
        </div>
      </div>
      {/** last section */}
      <div className="flex items-center justify-end gap-4 px-6 py-[20px]">
        <button
          className="
            w-[50%] cursor-pointer rounded-[10px]
            border border-solid border-redOcare 
            bg-white p-3 text-redOcare
          "
          onClick={resetFormHandler}
        >
          Delete
        </button>
        <button
          className={`
            w-[50%] rounded-[10px] p-3
            ${
              toggleForm && basicIdCompleted && OAManagerCompleted
                ? 'cursor-pointer border border-solid border-blueOcare bg-blueOcare'
                : 'cursor-not-allowed border-none bg-blueOcare/60'
            }
             text-white
          `}
          disabled={!toggleForm && basicIdCompleted && OAManagerCompleted}
          onClick={methods.handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default LineOA;
