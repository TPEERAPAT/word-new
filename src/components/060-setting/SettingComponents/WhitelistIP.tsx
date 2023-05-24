import Button from '@components/Button/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsTrash } from 'react-icons/bs';
import { RiEdit2Line } from 'react-icons/ri';

import { makeRequest } from '../makeRequest';

interface IIP {
  IpsA: number[] | undefined;
}

const defaultValues = {
  IpsA: [],
};

const WhitelistIP = () => {
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
  const [limitAmount, setLimitAmount] = useState<number>(1);
  const [ipArray, setIpArray] = useState<number[]>([]);

  const { register, handleSubmit, watch } = useForm<IIP>({ defaultValues });

  const onSubmit = async (data: IIP) => {
    const finalIp = ipArray.filter((value) => data.IpsA!.includes(value));
    // eslint-disable-next-line no-console
    console.log({ IPs: finalIp });

    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: '/upwhitelist',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3OTkwNzAxNiwianRpIjoiOTVjZGNjOTMtZDJiOS00Y2NlLWI4MTAtMDQ0OWY0ZmFhZDgzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGVfaWQiOiI2M2U0OTE1MjNhZDBiYjE1MjZhNmY3ZjQifSwibmJmIjoxNjc5OTA3MDE2LCJleHAiOjE2ODAyNTI2MTZ9.I8pgWS84mD_1yB4YcVax6kq2r9V5cA_NAN5qVPj5m4I',
      },
      data: {
        IPs: ipArray.filter((value) => data.IpsA!.includes(value)),
      },
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

  // console.log([...Array(limitAmount)]);

  const deleteIPHandler = (ip: number) => {
    const filterIp = ipArray.filter((oldIp) => oldIp !== ip);
    setIpArray(filterIp);
    setLimitAmount((prevLimit) => {
      return prevLimit - 1;
    });
  };

  const editIPHandler = (ip: number) => {
    const editIp = ipArray.filter((oldIp) => oldIp !== ip);
    setIpArray(editIp);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div
          className="flex cursor-pointer flex-row items-center gap-2"
          onClick={() => {
            setToggleSwitch(!toggleSwitch);
            setLimitAmount(1);
          }}
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
        <div className="flex flex-row items-center gap-4">
          <p>Limited</p>
          {toggleSwitch && (
            <input
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className="
                h-8 rounded-[10px] border-solid border-greySettingOcare/10 
                p-4 placeholder-greySettingOcare/20
                outline-none
              "
              onChange={(e) => setLimitAmount(Number(e.target.value))}
              type="number"
              step="1"
              defaultValue={1}
            />
          )}
        </div>
      </div>
      <div className="flex flex-row items-end justify-between pb-4">
        <div className="flex flex-col gap-4">
          <div className="flex w-[350px] flex-row justify-between p-4">
            <div className="w-3/4">IP</div>
            <div className="w-1/4 pl-4">Action</div>
          </div>
          {[...Array(limitAmount)].map((ip, index) => (
            <div
              className="
                flex w-[350px] flex-row justify-between
                rounded-[10px] bg-greyRoundedOcare p-4
              "
              key={index}
            >
              <div className="w-3/4">
                {ipArray[index] ? (
                  <p className="font-medium">{ipArray[index]}</p>
                ) : (
                  <input
                    type="text"
                    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                    className="
                      h-8 rounded-[10px] border-solid border-greySettingOcare/10 
                      p-2 placeholder-greySettingOcare/20
                      outline-none
                    "
                    {...register(`IpsA.${index}`)}
                    placeholder="Insert IP"
                  />
                )}
              </div>
              <div className="flex w-1/4 items-center">
                {ipArray[index] ? (
                  <div className="flex flex-row gap-4">
                    <button
                      className="
                        flex cursor-pointer flex-row items-center
                        justify-center gap-1 border-none bg-transparent
                        text-yellowLightOcare
                      "
                      onClick={() => editIPHandler(ipArray[index] as number)}
                    >
                      <RiEdit2Line className="text-[20px]" />
                      <p>Edit</p>
                    </button>
                    <button
                      className="
                        flex cursor-pointer flex-row items-center
                        justify-center border-none bg-transparent
                        text-redOcare/90
                      "
                      onClick={() => deleteIPHandler(ipArray[index] as number)}
                    >
                      <BsTrash className="text-[20px]" />
                    </button>
                  </div>
                ) : (
                  <button
                    className="
                      ml-5 h-8 cursor-pointer rounded-[10px] border
                      border-solid border-blueOcare bg-white
                      px-4 font-medium text-blueOcare
                    "
                    onClick={() => {
                      setIpArray((prevIp: any) => {
                        return [...prevIp, watch(`IpsA.${index}`)];
                      });
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4 pt-[70px]">
          <button
            className="
              cursor-pointer rounded-[10px]
              border-2 border-solid border-greySettingOcare/10 bg-white 
              px-[100px] py-3
            "
          >
            Reset Default
          </button>
          <Button
            text="Submit"
            size="md"
            onClick={handleSubmit((data) => onSubmit(data as IIP))}
          />
        </div>
      </div>
    </div>
  );
};

export default WhitelistIP;
