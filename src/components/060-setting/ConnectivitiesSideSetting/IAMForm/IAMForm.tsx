import GovernmentDropdown from '@components/060-setting/GovernmentDropdown/GovernmentDropdown';
import { makeRequest } from '@components/060-setting/makeRequest';
import Button from '@components/Button/Button';
// import type { IIAMContext } from '@pages/setting';
// import { IAMContext } from '@pages/setting';
import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IModal {
  onHideModal:
    | MouseEventHandler<HTMLDivElement>
    | MouseEventHandler<HTMLButtonElement>;
}

type UserData = {
  Firstname: string;
  Lastname: string;
  Email: string;
};

type UserObject = {
  PublicHealth: boolean;
  Research: boolean;
  PatientEmgagement: boolean;
};

type UserAcessibility = {
  PatientDiscovery: boolean;
  HealthDashboard: boolean;
  HealthCampaign: boolean;
  HealthEngagement: boolean;
  DataManagement: boolean;
};

export interface IIAMAcessManagementForm {
  Service: string;
  UserData: UserData;
  UserObject: UserObject;
  UserAcessibility: UserAcessibility;
}

const defaultValues = {
  Service: '',
  UserData: {
    Firstname: '',
    Lastname: '',
    Email: '',
  },
  UserObject: {
    PublicHealth: false,
    Research: false,
    PatientEmgagement: false,
  },
  UserAcessibility: {
    PatientDiscovery: false,
    HealthDashboard: false,
    HealthCampaign: false,
    HealthEngagement: false,
    DataManagement: false,
  },
};

const IAMForm: React.FC<IModal> = ({ onHideModal }) => {
  const { register, handleSubmit, reset } = useForm<IIAMAcessManagementForm>({
    defaultValues,
  });

  // const { onAddpatientData } = useContext<IIAMContext>(IAMContext);

  const onSubmit = async (data: IIAMAcessManagementForm) => {
    // onAddpatientData(data);

    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: '/upaccess',
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

  const [fixedScreen, setFixScreen] = useState<boolean>(false);

  const fixedScreenHandler = (status: boolean) => {
    setFixScreen(status);
  };

  return (
    <>
      <div
        className={`
          flex flex-row items-center justify-between border-0 border-b 
          border-solid border-greySettingOcare/20 p-6
          
        `}
      >
        <div className="flex flex-row items-center justify-start gap-2 text-[24px]">
          <p className="font-medium">IAM (Access Management)</p>
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
      <div
        className={`w-[100%] gap-4 p-6 ${
          !fixedScreen ? 'overflow-auto' : 'overflow-hidden'
        }`}
      >
        <p className="pb-4 font-medium">User ID : 00001</p>
        <div className="flex flex-col gap-4 rounded-[10px] bg-[#F2F2F7] p-6">
          <div className="flex flex-col gap-4">
            <div
              className="
                flex flex-col border-0 border-b border-solid
                border-greySettingOcare/10 pb-4
              "
            >
              <p className="pb-4 font-medium">Service</p>
              <div className="flex flex-row gap-4">
                <div className="inline-flex w-1/3 items-center">
                  <input
                    type="radio"
                    value={'Hospital Administrator'}
                    className="h-5 w-5 accent-blueOcare"
                    {...register('Service')}
                  />
                  <label className="ml-2">Hospital administrator</label>
                </div>
                <div className="inline-flex w-1/3 items-center">
                  <input
                    type="radio"
                    value={'Data Administrator'}
                    className="h-5 w-5 accent-blueOcare"
                    {...register('Service')}
                  />
                  <label className="ml-2">Data administrator</label>
                </div>
                <div className="inline-flex w-1/3 items-center">
                  <input
                    type="radio"
                    value={'Service Member'}
                    className="h-5 w-5 accent-blueOcare"
                    {...register('Service')}
                  />
                  <label className="ml-2">Service member</label>
                </div>
              </div>
            </div>
            <div
              className="
                flex flex-col gap-4 border-0 border-b border-solid
                border-greySettingOcare/10 py-6
              "
            >
              <div className="flex flex-row gap-4">
                <div className="flex w-1/2 flex-col gap-2">
                  <label className="">Firstname</label>
                  <input
                    type="text"
                    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                    className="
                      h-8 rounded-[8px] border-solid border-greySettingOcare/10 px-2
                      py-6 placeholder-greySettingOcare/10
                      outline-none
                    "
                    {...register('UserData.Firstname')}
                  />
                </div>
                <div className="flex w-1/2 flex-col gap-2">
                  <label className="">Lastname</label>
                  <input
                    type="email"
                    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                    className="
                      h-8 rounded-[8px] border-solid border-greySettingOcare/10 px-2
                      py-6 placeholder-greySettingOcare/10
                      outline-none
                    "
                    {...register('UserData.Lastname')}
                  />
                </div>
              </div>
              <div className="flex w-[49%] flex-col gap-2">
                <label className="">Email</label>
                <input
                  type="text"
                  // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                  className="
                    h-8 rounded-[8px] border-solid border-greySettingOcare/10 px-2
                    py-6 placeholder-greySettingOcare/10
                    outline-none
                  "
                  {...register('UserData.Email')}
                />
              </div>
            </div>

            <div
              className="
                flex flex-row justify-between border-0 border-b 
                border-solid border-greySettingOcare/10 py-6
              "
            >
              <div className="flex w-1/2 flex-col gap-4">
                <p className="font-medium">User Objectives</p>
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-blueOcare"
                    {...register('UserObject.PublicHealth')}
                  />
                  <label className="ml-2">Public health</label>
                </div>
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-blueOcare"
                    {...register('UserObject.Research')}
                  />
                  <label className="ml-2">Research</label>
                </div>
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-blueOcare"
                    {...register('UserObject.PatientEmgagement')}
                  />
                  <label className="ml-2">Patient engagement</label>
                </div>
              </div>
              <div className="flex w-1/2 flex-col gap-4">
                <p className="font-medium">User Accessibility</p>
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-blueOcare"
                    {...register('UserAcessibility.PatientDiscovery')}
                  />
                  <label className="ml-2">Patient discovery</label>
                </div>
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-blueOcare"
                    {...register('UserAcessibility.HealthDashboard')}
                  />
                  <label className="ml-2">Health Dashboard</label>
                </div>
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-blueOcare"
                    {...register('UserAcessibility.HealthCampaign')}
                  />
                  <label className="ml-2">Health Campaign</label>
                </div>
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-blueOcare"
                    {...register('UserAcessibility.HealthEngagement')}
                  />
                  <label className="ml-2">Health Engagement</label>
                </div>
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-blueOcare"
                    {...register('UserAcessibility.DataManagement')}
                  />
                  <label className="ml-2">Data Management</label>
                </div>
              </div>
            </div>
            <div className="">
              <p className="pb-5 font-medium">Access area restriction</p>
              <GovernmentDropdown onFixedScreen={fixedScreenHandler} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 px-6 py-10">
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
        <Button text="Submit" size="sm" onClick={handleSubmit(onSubmit)} />
      </div>
    </>
  );
};

export default IAMForm;
