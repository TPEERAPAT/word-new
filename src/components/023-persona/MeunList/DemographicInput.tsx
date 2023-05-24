import PayorDropdownButton from '@components/Button/PayorDropdownButton';
import ProvinceDropdownButton from '@components/Button/ProvinceDropdownButton';
import XChip from '@components/Chip/XChip';
import CheckBox from '@components/Input/CheckBox';
import NewTextInput from '@components/Input/NewTextInput';
import DisplayBox from '@components/Ui/DisplayBox';
import type { FC } from 'react';
import React from 'react';

interface DemographicInputProps {
  selectedTags: any[];
  setSelectedTags: Function;
  selectedAddress: string[];
  setSelectedAddress: Function;
  selectedPayor: string[];
  setSelectedPayor: Function;
  selectedAgeRange: any;
  setSelectedAgeRange: Function;
  selectedExpenseRange: any;
  setSelectedExpenseRange: Function;
}

const DemographicInput: FC<DemographicInputProps> = ({
  selectedTags,
  setSelectedTags,
  selectedAddress,
  setSelectedAddress,
  selectedPayor,
  setSelectedPayor,
  selectedAgeRange,
  setSelectedAgeRange,
  selectedExpenseRange,
  setSelectedExpenseRange,
}) => {
  function handleSelectGender(Gender: 'Male' | 'Female') {
    const index = selectedTags.indexOf(Gender);
    const newSelectedTags = [...selectedTags];

    if (index === -1) {
      newSelectedTags.push(Gender);
    } else {
      newSelectedTags.splice(index, 1);
    }

    setSelectedTags(newSelectedTags);
  }

  const SelectedTagsRender = (
    <div className="mb-4 mt-[10px]">
      {selectedTags.includes('Male') && (
        <div className="mr-3 mt-1.5 inline-block">
          <XChip text="Male" onClick={() => handleSelectGender('Male')} />
        </div>
      )}
      {selectedTags.includes('Female') && (
        <div className="mr-3 mt-1.5 inline-block">
          <XChip text="Female" onClick={() => handleSelectGender('Female')} />
        </div>
      )}
      {selectedAddress.map((item, i: number) => (
        <div key={i} className="mr-3 mt-1.5 inline-block">
          <XChip
            text={item}
            onClick={() => {} /* console.log('hello world')} */}
          />
        </div>
      ))}
      {selectedPayor.map((item, i: number) => (
        <div key={i} className="mr-3 mt-1.5 inline-block">
          <XChip
            text={item}
            onClick={() => {} /* console.log('hello world')  */}
          />
        </div>
      ))}
      <div className="mr-3 mt-1.5 inline-block">
        <XChip
          text={`Age : ${selectedAgeRange.min} - ${selectedAgeRange.max}`}
          onClick={() => {} /* console.log('hello world') */}
        />
      </div>
      <div className="mr-3 mt-1.5 inline-block">
        <XChip
          text={`Expense : ${selectedExpenseRange.min} - ${selectedExpenseRange.max}`}
          onClick={() => {} /* console.log('hello world') */}
        />
      </div>
    </div>
  );

  return (
    <div>
      {SelectedTagsRender}
      <div className="flex gap-4 rounded-lg bg-greySemiLightOcare px-4 py-3">
        <div className="flex w-full flex-col gap-8">
          <DisplayBox header="Gender" className="text-greyOcare">
            <div className="flex gap-6">
              <CheckBox
                label="Male"
                checked={selectedTags.includes('Male')}
                onChange={() => handleSelectGender('Male')}
              />
              <CheckBox
                label="Female"
                checked={selectedTags.includes('Female')}
                onChange={() => handleSelectGender('Female')}
              />
            </div>
          </DisplayBox>
          <DisplayBox header="Age Range" className="text-greyOcare">
            <div className="flex items-center gap-4">
              <NewTextInput
                placeholder="min"
                value={selectedAgeRange.min}
                onChange={(e: any) =>
                  setSelectedAgeRange({
                    ...selectedAgeRange,
                    min: e.target.value,
                  })
                }
              />
              <p>-</p>
              <NewTextInput
                placeholder="max"
                value={selectedAgeRange.max}
                onChange={(e: any) =>
                  setSelectedAgeRange({
                    ...selectedAgeRange,
                    max: e.target.value,
                  })
                }
              />
            </div>
          </DisplayBox>
          <DisplayBox header="Expense Range" className="text-greyOcare">
            <div className="flex items-center gap-4">
              <NewTextInput
                placeholder="min"
                value={selectedAgeRange.min}
                onChange={(e: any) =>
                  setSelectedExpenseRange({
                    ...selectedExpenseRange,
                    min: e.target.value,
                  })
                }
              />
              <p>-</p>
              <NewTextInput
                placeholder="max"
                value={selectedExpenseRange.max}
                onChange={(e: any) =>
                  setSelectedExpenseRange({
                    ...selectedExpenseRange,
                    max: e.target.value,
                  })
                }
              />
            </div>
          </DisplayBox>
        </div>
        <div className="flex w-full flex-col gap-8">
          <DisplayBox header="Address" className="text-greyOcare">
            <ProvinceDropdownButton
              label="Select Address"
              value={selectedAddress}
              onChangeHandler={setSelectedAddress}
            />
          </DisplayBox>
          <DisplayBox header="Payor" className="text-greyOcare">
            <PayorDropdownButton
              label="Search Payor"
              value={selectedPayor}
              onChangeHandler={setSelectedPayor}
            />
          </DisplayBox>
        </div>
      </div>
    </div>
  );
};

export default DemographicInput;
