import Button from '@components/Button/Button';
import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { makeRequest } from '../makeRequest';

interface ISwitch {
  switchStatus: boolean;
  onToggleStatus: MouseEventHandler<HTMLDivElement>;
}

const Switch: React.FC<ISwitch> = ({ switchStatus, onToggleStatus }) => {
  return (
    <div
      className="flex cursor-pointer flex-row items-center gap-2"
      onClick={onToggleStatus}
    >
      <div
        className={`${
          switchStatus ? 'bg-blueOcare' : 'bg-gray-400'
        } relative h-5 w-10 rounded-full`}
      >
        <input type="checkbox" className="sr-only" />
        <span
          className={`absolute top-[2px] h-4/5 w-2/5 rounded-full bg-white ${
            switchStatus ? 'left-[22px]' : 'left-[2px]'
          }`}
        ></span>
      </div>
    </div>
  );
};

type HealthSummary = {
  AllAccessible: boolean;
  IdentityVerified: boolean;
};

type HealthReport = {
  AllAccessible: boolean;
  IdentityVerified: boolean;
};

type Appointment = {
  Email: boolean;
  Sms: boolean;
  Line: boolean;
};

type TwoDayPriorToArrival = {
  Email: boolean;
  Sms: boolean;
  Line: boolean;
};

type OnePriorToArrival = {
  Email: boolean;
  Sms: boolean;
  Line: boolean;
};

type OneDayPostVisit = {
  Email: boolean;
  Sms: boolean;
  Line: boolean;
};

type Notification = {
  Appointment: Appointment;
  '2DayPriorToArrival': TwoDayPriorToArrival;
  '1DayPriorToArrival': OnePriorToArrival;
  '1DayPostVisit': OneDayPostVisit;
};

interface ICustomerConnect {
  HealthSummary: HealthSummary;
  HealthReport: HealthReport;
  Notifications: Notification;
}

const defaultValues: ICustomerConnect = {
  HealthSummary: {
    AllAccessible: false,
    IdentityVerified: false,
  },
  HealthReport: {
    AllAccessible: false,
    IdentityVerified: false,
  },
  Notifications: {
    Appointment: {
      Email: false,
      Sms: false,
      Line: false,
    },
    '2DayPriorToArrival': {
      Email: false,
      Sms: false,
      Line: false,
    },
    '1DayPriorToArrival': {
      Email: false,
      Sms: false,
      Line: false,
    },
    '1DayPostVisit': {
      Email: false,
      Sms: false,
      Line: false,
    },
  },
};

const CustomerConnect = () => {
  const [appointment, setAppointment] = useState<boolean>(false);
  const [onePriorToArrival, setOnePriorToArrival] = useState<boolean>(false);
  const [oneDayPostVisit, setOneDayPostVisit] = useState<boolean>(false);
  const [twoDayPriorToArrival, setTwoDayPriorToArrival] =
    useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<ICustomerConnect>({
    defaultValues,
  });

  const toggleAppointment = () => {
    setAppointment(!appointment);
  };

  const toggleOnePriorToArrival = () => {
    setOnePriorToArrival(!onePriorToArrival);
  };

  const toggleOneDayPostVisit = () => {
    setOneDayPostVisit(!oneDayPostVisit);
  };

  const toggleTwoDayPriorToArrival = () => {
    setTwoDayPriorToArrival(!twoDayPriorToArrival);
  };

  const onSubmit = async (data: ICustomerConnect) => {
    // eslint-disable-next-line no-console
    console.log(data);

    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: '/upcustomer',
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between gap-5">
        <div
          className="
            flex w-1/2 flex-col items-start justify-start 
            gap-2 rounded-[10px] bg-[#F2F2F7] p-4
          "
        >
          <p className="font-medium">Health Summary</p>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-blueOcare"
              {...register('HealthSummary.AllAccessible')}
            />
            <label className="ml-2">All Accessible</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-blueOcare"
              {...register('HealthSummary.IdentityVerified')}
            />
            <label className="ml-2">Identity Verified</label>
          </div>
        </div>
        <div
          className="
            flex w-1/2 flex-col items-start justify-start 
            gap-2 rounded-[10px] bg-[#F2F2F7] p-4
          "
        >
          <p className="font-medium">Health Report</p>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-blueOcare"
              {...register('HealthReport.AllAccessible')}
            />
            <label className="ml-2">All Accessible</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 accent-blueOcare"
              {...register('HealthReport.IdentityVerified')}
            />
            <label className="ml-2">Identity Verified</label>
          </div>
        </div>
      </div>
      <div
        className="
          flex flex-col rounded-[10px] border 
          border-solid border-[rgba(0,0,0,0.1)] p-4
        "
      >
        <p className="font-medium">Notifications</p>
        <div className="flex flex-row justify-between p-4">
          <div className="w-1/5 ">
            <p className="text-[rgba(0,0,0,0.3)]">Notification Lists</p>
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <div>
              <p className="text-[rgba(0,0,0,0.3)]">Email</p>
            </div>
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <p className="text-[rgba(0,0,0,0.3)]">SMS</p>
          </div>
          <div className="flex w-1/5 items-center justify-center">
            <p className="text-[rgba(0,0,0,0.3)]">Line</p>
          </div>
          <div className="w-1/5"></div>
        </div>
        <div
          className="
            mb-4 flex flex-row items-center justify-between
            rounded-[10px] bg-[#F2F2F7] p-4
          "
        >
          <div className="flex w-1/5 flex-row gap-4">
            <Switch
              switchStatus={appointment}
              onToggleStatus={toggleAppointment}
            />
            <p className="font-medium">Appointment</p>
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!appointment}
              {...register('Notifications.Appointment.Email')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!appointment}
              {...register('Notifications.Appointment.Sms')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!appointment}
              {...register('Notifications.Appointment.Line')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <div>
              <button
                className={`
                  h-8 rounded-[10px] border border-solid px-4
                   font-medium ${
                     appointment
                       ? 'cursor-pointer border-blueOcare text-blueOcare'
                       : 'cursor-not-allowed border-blueOcare/60 text-blueOcare/60'
                   }
                   bg-white
                `}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div
          className="
            mb-4 flex flex-row items-center justify-between
            rounded-[10px] bg-[#F2F2F7] p-4
          "
        >
          <div className="flex w-1/5 flex-row gap-4">
            <Switch
              switchStatus={twoDayPriorToArrival}
              onToggleStatus={toggleTwoDayPriorToArrival}
            />
            <p className="font-medium">2-day Prior to arrival</p>
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!twoDayPriorToArrival}
              {...register('Notifications.2DayPriorToArrival.Email')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!twoDayPriorToArrival}
              {...register('Notifications.2DayPriorToArrival.Sms')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!twoDayPriorToArrival}
              {...register('Notifications.2DayPriorToArrival.Line')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <div>
              <button
                className={`
                  h-8 rounded-[10px] border border-solid px-4
                   font-medium ${
                     twoDayPriorToArrival
                       ? 'cursor-pointer border-blueOcare text-blueOcare'
                       : 'cursor-not-allowed border-blueOcare/60 text-blueOcare/60'
                   }
                   bg-white
                `}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div
          className="
            mb-4 flex flex-row items-center justify-between
            rounded-[10px] bg-[#F2F2F7] p-4
          "
        >
          <div className="flex w-1/5 flex-row gap-4">
            <Switch
              switchStatus={onePriorToArrival}
              onToggleStatus={toggleOnePriorToArrival}
            />
            <p className="font-medium">1-day Prior to arrival</p>
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!onePriorToArrival}
              {...register('Notifications.1DayPriorToArrival.Email')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!onePriorToArrival}
              {...register('Notifications.1DayPriorToArrival.Sms')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!onePriorToArrival}
              {...register('Notifications.1DayPriorToArrival.Line')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <div>
              <button
                className={`
                  h-8 rounded-[10px] border border-solid px-4
                   font-medium ${
                     onePriorToArrival
                       ? 'cursor-pointer border-blueOcare text-blueOcare'
                       : 'cursor-not-allowed border-blueOcare/60 text-blueOcare/60'
                   }
                   bg-white
                `}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div
          className="
            flex flex-row items-center justify-between
            rounded-[10px] bg-[#F2F2F7] p-4
          "
        >
          <div className="flex w-1/5 flex-row gap-4">
            <Switch
              switchStatus={oneDayPostVisit}
              onToggleStatus={toggleOneDayPostVisit}
            />
            <p className="font-medium">1-day Post visit</p>
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!oneDayPostVisit}
              {...register('Notifications.1DayPostVisit.Email')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!oneDayPostVisit}
              {...register('Notifications.1DayPostVisit.Sms')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blueOcare"
              disabled={!oneDayPostVisit}
              {...register('Notifications.1DayPostVisit.Line')}
            />
          </div>
          <div className="flex w-1/5 flex-row justify-center gap-4">
            <div>
              <button
                className={`
                  h-8 rounded-[10px] border border-solid px-4
                   font-medium ${
                     oneDayPostVisit
                       ? 'cursor-pointer border-blueOcare text-blueOcare'
                       : 'cursor-not-allowed border-blueOcare/60 text-blueOcare/60'
                   }
                   bg-white
                `}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-end gap-4 pb-4">
          <button
            className="
              cursor-pointer rounded-[10px]
              border-2 border-solid border-[rgba(0,0,0,0.1)] bg-white 
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

export default CustomerConnect;
