import React from 'react';
import { useFormContext } from 'react-hook-form';

interface IBasicID {
  onchangeBasicId: Function;
}

const BasicId: React.FC<IBasicID> = ({ onchangeBasicId }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <label className="">Basic ID</label>
        <input
          type="text"
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className="
            h-8 w-[50%] rounded-[8px] border-solid border-greySettingOcare/10
            px-2 py-6
            placeholder-greySettingOcare/20 outline-none
          "
          {...register('LineBasicId.BasicId', {
            onChange: (e) => onchangeBasicId(e.target.value),
          })}
        />
      </div>
    </div>
  );
};

export default BasicId;
