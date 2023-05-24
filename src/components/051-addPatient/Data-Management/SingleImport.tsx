import Button from '@components/Button/Button';
import TextInput from '@components/Input/TextInput';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { singleSubmit } from '../singleSubmit';
import DataCard from './DataCard';

const SingleImport = () => {
  const [singleImportForm, setSingleImportForm] = useState({
    HN: '',
    VN: '',
  });

  const stringToArray = (str: string) => {
    if (str === '') return [];
    const arr = str.split(',').map((item) => item.trim());
    return arr;
  };

  async function handleSingleImport() {
    const result = await singleSubmit(
      singleImportForm.HN,
      stringToArray(singleImportForm.VN)
    );
    if (result.message === 'success') {
      // eslint-disable-next-line no-alert
      alert(`import ${result.result[0].VisitUID.length} visitUID`);
      setSingleImportForm({
        HN: '',
        VN: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('import fail');
    }
  }
  return (
    <div>
      <DataCard>
        <div className="max-w-[100%px] gap-24 p-6 md:flex">
          {/* form */}
          <div className="flex max-w-[100%] flex-col md:min-w-[100%]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <div className="">
                  <p className="pb-2 text-sm font-medium">{`ID`}</p>
                  <TextInput
                    value={singleImportForm.HN}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setSingleImportForm({
                        ...singleImportForm,
                        HN: event.target.value,
                      })
                    }
                    placeholder={'ex. 23000112'}
                    height={50}
                  />
                </div>
                <div className="">
                  <p className="pb-2 text-sm font-medium">{`HN`}</p>
                  <TextInput
                    value={singleImportForm.VN}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setSingleImportForm({
                        ...singleImportForm,
                        VN: event.target.value,
                      })
                    }
                    placeholder={'ex. 21, 22'}
                    height={50}
                  />
                </div>
              </div>

              <div className="">
                <p className="pb-2 text-sm font-medium">{`Visit (optional)`}</p>
                <input
                  type="text"
                  className="
                    h-[150px] w-[550px] rounded-lg 
                    border border-solid border-greyLightOcare outline-none
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </DataCard>
      <div className="flex items-center justify-end gap-4 pb-4">
        <button
          className="cursor-pointer rounded-[10px]
         border-2 border-solid border-greySettingOcare/10 bg-white 
         px-[100px] py-3"
        >
          Reset Default
        </button>
        <Button text="Submit" size="md" onClick={handleSingleImport} />
      </div>
    </div>
  );
};

export default SingleImport;
