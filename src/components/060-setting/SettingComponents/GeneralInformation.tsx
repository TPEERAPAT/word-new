import Button from '@components/Button/Button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { makeRequest } from '../makeRequest';

type OrganizationLogoT = {
  Image: File | null;
  ThaiName: string;
  EngName: string;
};

type OrganizationAccessibilityT = {
  PatientDiscovery: boolean;
  HealthDashboard: boolean;
  HealthCampaign: boolean;
  HealthEngagement: boolean;
  DataManagement: boolean;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
type projectObjectivesT = {
  PublicHealth: boolean;
  Research: boolean;
  PatientEngagement: boolean;
};

interface IGeneralInformation {
  OrganizationLogo: OrganizationLogoT;
  OrganizationAccessibility: OrganizationAccessibilityT;
  ProjectObjectives: projectObjectivesT;
  ProjectAccessOption: string;
}

const defaultValues = {
  OrganizationLogo: {
    Image: null,
    EngName: '',
    ThaiName: '',
  },
  OrganizationAccessibility: {
    PatientDiscovery: false,
    HealthDashboard: false,
    HealthCampaign: false,
    HealthEngagement: false,
    DataManagement: false,
  },
  ProjectObjectives: {
    PublicHealth: false,
    Research: false,
    PatientEngagement: false,
  },
  ProjectAccessOption: '',
};

const GeneralInformation = () => {
  const [logoImage, setLogoImage] = useState<File | null | undefined>(null);
  // eslint-disable-next-line @typescript-eslint/naming-convention, unused-imports/no-unused-vars
  const [_responseData, setResponseData] = useState<any>(null);
  const { register, handleSubmit, getValues, reset } =
    useForm<IGeneralInformation>({ defaultValues });

  const onSubmit = async (dataUpload: IGeneralInformation) => {
    const organLogo = getValues('OrganizationLogo');
    const formData = new FormData();
    formData.append('logo', logoImage as File);
    const OrganizationLogo = { ...organLogo, Image: formData };

    // eslint-disable-next-line no-console
    console.log({ ...dataUpload, OrganizationLogo });

    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: '/upgeneral',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3OTkwNzAxNiwianRpIjoiOTVjZGNjOTMtZDJiOS00Y2NlLWI4MTAtMDQ0OWY0ZmFhZDgzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGVfaWQiOiI2M2U0OTE1MjNhZDBiYjE1MjZhNmY3ZjQifSwibmJmIjoxNjc5OTA3MDE2LCJleHAiOjE2ODAyNTI2MTZ9.I8pgWS84mD_1yB4YcVax6kq2r9V5cA_NAN5qVPj5m4I',
      },
      data: JSON.stringify({ ...dataUpload, OrganizationLogo }),
    };

    try {
      const { data } = await makeRequest.request(config);
      // eslint-disable-next-line no-console
      console.log(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const resetFormHandler = () => {
    reset(defaultValues);
    setLogoImage(null);
  };

  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: '/generallogo',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3OTkwNzAxNiwianRpIjoiOTVjZGNjOTMtZDJiOS00Y2NlLWI4MTAtMDQ0OWY0ZmFhZDgzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGVfaWQiOiI2M2U0OTE1MjNhZDBiYjE1MjZhNmY3ZjQifSwibmJmIjoxNjc5OTA3MDE2LCJleHAiOjE2ODAyNTI2MTZ9.I8pgWS84mD_1yB4YcVax6kq2r9V5cA_NAN5qVPj5m4I',
      },
    };

    makeRequest
      .request(config)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  return (
    <div className="flex max-w-[100%px] flex-col gap-5">
      <div className="flex justify-start">
        <div className="m-2.5 flex flex-row items-center justify-center pr-[10%]">
          <div>
            <p className="pb-5">Organization logo</p>
            <div className="flex flex-row items-center justify-center gap-6">
              <div
                className="
                  relative inline-block h-[200px] 
                  w-[200px] cursor-pointer overflow-hidden rounded-full
                  border border-solid border-blueOcare 
                "
              >
                <div className="z-20">
                  {logoImage && (
                    <Image
                      src={URL.createObjectURL(logoImage)}
                      width={200}
                      height={200}
                      alt="logo"
                    />
                  )}
                </div>
                <input
                  className="absolute right-0 top-0 h-[200px] w-[200px] text-[100px] opacity-0"
                  type="file"
                  placeholder="upload"
                  {...register('OrganizationLogo.Image', {
                    required: true,
                    onChange: (e) => setLogoImage(e.target.files?.[0]),
                  })}
                />
                {!logoImage && (
                  <label
                    className="
                      absolute left-[38%] top-[45%] z-0
                      cursor-pointer font-semibold text-blueOcare
                    "
                  >
                    Upload
                  </label>
                )}
              </div>
              <div className="text-greySettingOcare/40">
                <li>400 x 400 px</li>
                <li>Maximum 200 kb</li>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mb-4 flex flex-col gap-1 p-[15px]">
            <label>Organization name (English)</label>
            <input
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className="
                w-[400px] rounded-[5px] border border-solid 
                p-[10px] text-[14px] placeholder-greySettingOcare/20
                focus:outline-none
              "
              type="text"
              placeholder="Insert Organization name"
              {...register('OrganizationLogo.EngName', {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col gap-1 p-[15px]">
            <label>ชื่อองค์กร (ภาษาไทย)</label>
            <input
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className="
                w-[400px] rounded-[5px] border border-solid 
                p-[10px] text-[14px] placeholder-greySettingOcare/20
                focus:outline-none
              "
              type="text"
              placeholder="ระบุชื่อองค์กร"
              {...register('OrganizationLogo.ThaiName', {
                required: true,
              })}
            />
          </div>
        </div>
      </div>
      <div
        className="
        flex flex-col gap-4
        rounded-[8px] bg-greyRoundedOcare p-5
        "
      >
        <p className="font-medium">Organization Accessibility</p>
        <div className="flex flex-row items-center justify-between">
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-greyCheckBox"
              {...register('OrganizationAccessibility.PatientDiscovery')}
            />
            <label className="ml-2"> Patient Discovery</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-greyCheckBox"
              {...register('OrganizationAccessibility.HealthDashboard')}
            />
            <label className="ml-2"> Health Dashboard</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-greyCheckBox"
              {...register('OrganizationAccessibility.HealthCampaign')}
            />
            <label className="ml-2"> Health Campaign</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-greyCheckBox"
              {...register('OrganizationAccessibility.HealthEngagement')}
            />
            <label className="ml-2"> Health Engagement</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-greyCheckBox"
              {...register('OrganizationAccessibility.DataManagement')}
            />
            <label className="ml-2"> Data Management</label>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-5">
        <div className="flex w-[500px] flex-col gap-5">
          <p className="font-medium">Project objectives</p>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-greyCheckBox"
              {...register('ProjectObjectives.PublicHealth')}
            />
            <label className="ml-2"> Public health</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-greyCheckBox"
              {...register('ProjectObjectives.Research')}
            />
            <label className="ml-2"> Research</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-greyCheckBox"
              {...register('ProjectObjectives.PatientEngagement')}
            />
            <label className="ml-2"> Patient engagement</label>
          </div>
        </div>
        <div className="flex w-[500px] flex-col gap-5">
          <p className="font-medium">Project access option</p>
          <div className="inline-flex items-center">
            <input
              type="radio"
              value={'Research'}
              className="h-5 w-5 accent-greyCheckBox"
              {...register('ProjectAccessOption')}
            />
            <label className="ml-2"> Research</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="radio"
              value={'Patient Engagement'}
              className="h-5 w-5 accent-greyCheckBox"
              {...register('ProjectAccessOption')}
            />
            <label className="ml-2"> Patient engagement</label>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-end gap-4 pb-4">
          <button
            className="
              cursor-pointer rounded-[10px]
              border-2 border-solid border-greySettingOcare/10 bg-white 
              px-[100px] py-3
            "
            onClick={resetFormHandler}
          >
            Reset Default
          </button>
          <Button text="Submit" size="md" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
