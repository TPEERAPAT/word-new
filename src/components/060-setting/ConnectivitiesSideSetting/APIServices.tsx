import Button from '@components/Button/Button';
import type { MouseEventHandler } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { makeRequest } from '../makeRequest';

interface IModal {
  onHideModal:
    | MouseEventHandler<HTMLDivElement>
    | MouseEventHandler<HTMLButtonElement>;
}

type ProjectObjectives = {
  PatientInfoStatus: boolean;
  PatientInfoLink: string;
  PatientVisitStatus: boolean;
  PatientVisitLink: string;
  PatientEMR: boolean;
};

type PatientList = {
  PatientListAllStatus: boolean;
  PatientListAllLink: string;
  PatientListDate: boolean;
};

type Package = {
  PackageListStatus: boolean;
  PackageListLink: string;
  PackageDetailStatus: boolean;
};

interface IAPIServices {
  ProjectObjectives: ProjectObjectives;
  PatientList: PatientList;
  Package: Package;
}

const defaultValues = {
  ProjectObjectives: {
    PatientInfoStatus: false,
    PatientInfoLink: '',
    PatientVisitStatus: false,
    PatientVisitLink: '',
    PatientEMR: false,
  },
  PatientList: {
    PatientListAllStatus: false,
    PatientListAllLink: '',
    PatientListDate: false,
  },
  Package: {
    PackageListStatus: false,
    PackageListLink: '',
    PackageDetailStatus: false,
  },
};

const APIServices: React.FC<IModal> = ({ onHideModal }) => {
  const { register, handleSubmit, reset } = useForm<IAPIServices>({
    defaultValues,
  });

  const onSubmit = async (data: IAPIServices) => {
    // eslint-disable-next-line no-console
    console.log(data);

    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: '/upapi',
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
      <div
        className="
          flex flex-row items-center justify-between border-0 
          border-b border-solid border-greySettingOcare/20 p-6
        "
      >
        <div className="flex flex-row items-center justify-start gap-2 text-[24px]">
          <p className="font-medium">API Services</p>
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
      <div className="h-[100%] w-[100%] overflow-auto p-6">
        <div className="flex flex-col gap-4 rounded-[10px] bg-greyRoundedOcare p-6">
          <div className="flex flex-col gap-4">
            <p className="font-medium">Project objectives</p>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-blueOcare"
                  {...register('ProjectObjectives.PatientInfoStatus')}
                />
                <label className="ml-3">Patient info</label>
              </div>
              <input
                type="text"
                // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                className="
                  ml-8 h-8 rounded-[8px] border-solid border-greySettingOcare/10
                  px-2 py-6
                  placeholder-greySettingOcare/20 outline-none
                "
                {...register('ProjectObjectives.PatientInfoLink')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-blueOcare"
                  {...register('ProjectObjectives.PatientVisitStatus')}
                />
                <label className="ml-3">Patient visit</label>
              </div>
              <input
                type="text"
                // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                className="
                  ml-8 h-8 rounded-[8px] border-solid border-greySettingOcare/10
                  px-2 py-6
                  placeholder-greySettingOcare/20 outline-none
                "
                {...register('ProjectObjectives.PatientVisitLink')}
              />
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="h-5 w-5 accent-blueOcare"
                {...register('ProjectObjectives.PatientEMR')}
              />
              <label className="ml-3">Patient EMR</label>
            </div>
            <hr className="opacity-40" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium">Patient List</p>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-blueOcare"
                  {...register('PatientList.PatientListAllStatus')}
                />
                <label className="ml-3">Patient List All </label>
              </div>
              <input
                type="text"
                // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                className="
                  ml-8 h-8 rounded-[8px] border-solid border-greySettingOcare/10
                  px-2 py-6
                  placeholder-greySettingOcare/20 outline-none
                "
                {...register('PatientList.PatientListAllLink')}
              />
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="h-5 w-5 accent-blueOcare"
                {...register('PatientList.PatientListDate')}
              />
              <label className="ml-3">Patient List Date</label>
            </div>
            <hr className="opacity-40" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium">Package</p>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-blueOcare"
                  {...register('Package.PackageListStatus')}
                />
                <label className="ml-3">Package List</label>
              </div>
              <input
                type="text"
                // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                className="
                  ml-8 h-8 rounded-[8px] border-solid border-greySettingOcare/10
                  px-2 py-6
                  placeholder-greySettingOcare/20 outline-none
                "
                {...register('Package.PackageListLink')}
              />
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="h-5 w-5 accent-blueOcare"
                {...register('Package.PackageDetailStatus')}
              />
              <label className="ml-3">Package Detail</label>
            </div>
            <hr className="opacity-40" />
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

export default APIServices;
