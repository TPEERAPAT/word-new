import TagInput from '@components/023-persona/InputPersona/TagInput';
import XChip from '@components/Chip/XChip';
import CheckBox from '@components/Input/CheckBox';
import MultiRangeSlider from '@components/Input/MultiRangeInput';
import DisplayBox from '@components/Ui/DisplayBox';
import type { FC } from 'react';
import React, { useState } from 'react';

interface DemographicMenuProps {
  display: boolean;
  selectedTags: {
    Name: string;
    Value: any;
  }[];
  setSelectedTags: Function;
}

const MIN_AGE = 0;
const MAX_AGE = 100;

const MIN_EXPENSE = 0;
const MAX_EXPENSE = 100000;

const DemographicMenu: FC<DemographicMenuProps> = ({
  display = false,
  selectedTags,
  setSelectedTags,
}) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [minValAge, setMinValAge] = useState<number>(
    selectedTags[1]?.Value.Min
  );
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [maxValAge, setMaxValAge] = useState<number>(
    selectedTags[1]?.Value.Max
  );
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [minValExpense, setMinValExpense] = useState<number>(
    selectedTags[0]?.Value.Min
  );
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [maxValExpense, setMaxValExpense] = useState<number>(
    selectedTags[0]?.Value.Max
  );

  function checkedGender(gender: 'Male' | 'Female') {
    const genderTagValue = gender === 'Male' ? 'Male' : 'Female';

    return selectedTags.some(
      (tag) => tag.Name === 'Gender' && tag.Value === genderTagValue
    );
  }

  function handleGender(gender: 'Male' | 'Female') {
    if (!checkedGender(gender)) {
      setSelectedTags(() => [
        ...selectedTags,
        { Name: 'Gender', Value: gender },
      ]);
    } else if (checkedGender(gender)) {
      setSelectedTags(() => {
        let newSelectedTags = [...selectedTags];
        newSelectedTags = newSelectedTags.filter(
          (tag: { Name: string; Value: any }) => {
            return tag.Value !== gender;
          }
        );
        return newSelectedTags;
      });
    }
  }

  const handleAge = (ageRange: { min: number; max: number }) => {
    setMinValAge(ageRange.min);
    setMaxValAge(ageRange.max);
    setSelectedTags((prevTags: any) => {
      const newSelectedTags = [...prevTags];
      newSelectedTags[1].Value.Min = ageRange.min;
      newSelectedTags[1].Value.Max = ageRange.max;
      return newSelectedTags;
    });
  };

  const handleExpense = (expenseRange: { min: number; max: number }) => {
    setMinValExpense(expenseRange.min);
    setMaxValExpense(expenseRange.max);
    setSelectedTags((prevTags: any) => {
      const newSelectedTags = [...prevTags];
      newSelectedTags[0].Value.Min = expenseRange.min;
      newSelectedTags[0].Value.Max = expenseRange.max;
      return newSelectedTags;
    });
  };

  const AgeRangeText = () => {
    if (
      selectedTags[1]?.Value.Min === MIN_AGE &&
      selectedTags[1]?.Value.Max === MAX_AGE
    ) {
      return 'All';
    }
    if (selectedTags[1]?.Value.Min === MIN_AGE) {
      return `Min - ${selectedTags[1]?.Value.Max}`;
    }
    if (selectedTags[1]?.Value.Max === MAX_AGE) {
      return `${selectedTags[1].Value.Min} - Max`;
    }
    return `${selectedTags[1]?.Value.Min} - ${selectedTags[1]?.Value.Max}`;
  };

  const ExpenseRangeText = () => {
    if (
      selectedTags[0]?.Value.Min === MIN_EXPENSE &&
      selectedTags[0]?.Value.Max === MAX_EXPENSE
    ) {
      return 'All';
    }
    if (selectedTags[0]?.Value.Min === MIN_EXPENSE) {
      return `Min - ${selectedTags[0]?.Value.Max.toLocaleString()}`;
    }
    if (selectedTags[0]?.Value.Max === MAX_EXPENSE) {
      return `${selectedTags[0].Value.Min.toLocaleString()} - Max`;
    }
    return `${selectedTags[0]?.Value.Min.toLocaleString()} - ${selectedTags[0]?.Value.Max.toLocaleString()}`;
  };

  const SelectedTag = () => (
    <div className="mb-4 mt-[12px]">
      {checkedGender('Male') && (
        <div className="mr-3 mt-1.5 inline-block">
          <XChip text="Male" bold onClick={() => handleGender('Male')} />
        </div>
      )}
      {checkedGender('Female') && (
        <div className="mr-3 mt-1.5 inline-block">
          <XChip text="Female" bold onClick={() => handleGender('Female')} />
        </div>
      )}
      {AgeRangeText() !== 'All' && (
        <div className="mr-3 mt-1.5 inline-block">
          <XChip
            text={`Age: ${AgeRangeText()}`}
            bold
            onClick={() => {
              setSelectedTags((prevTags: any) => {
                const newSelectedTags = [...prevTags];
                newSelectedTags[1].Value.Min = MIN_AGE;
                newSelectedTags[1].Value.Max = MAX_AGE;
                return newSelectedTags;
              });
            }}
          />
        </div>
      )}
      {ExpenseRangeText() !== 'All' && (
        <div className="mr-3 mt-1.5 inline-block">
          <XChip
            text={`Expense: ${ExpenseRangeText()}`}
            bold
            onClick={() => {
              setSelectedTags((prevTags: any) => {
                const newSelectedTags = [...prevTags];
                newSelectedTags[0].Value.Min = MIN_EXPENSE;
                newSelectedTags[0].Value.Max = MAX_EXPENSE;
                return newSelectedTags;
              });
            }}
          />
        </div>
      )}
    </div>
  );

  return (
    <div className={`${display ? 'block' : 'hidden'}`}>
      <SelectedTag />
      <div className="mt-4 min-h-[328px] rounded-lg bg-greySemiLightOcare px-4 py-3">
        <div className="flex w-full gap-6">
          {/* right input */}
          <div className="flex w-full flex-col">
            <DisplayBox header="Gender" divClassName="mb-[40px]">
              <div className="flex gap-6">
                <CheckBox
                  label="Male"
                  checked={checkedGender('Male')}
                  onChange={() => handleGender('Male')}
                />
                <CheckBox
                  label="Female"
                  checked={checkedGender('Female')}
                  onChange={() => handleGender('Female')}
                />
              </div>
            </DisplayBox>
            <DisplayBox header="Age range" divClassName="mb-1">
              <div className="pt-3">
                <MultiRangeSlider
                  min={MIN_AGE}
                  max={MAX_AGE}
                  minVal={selectedTags[1]?.Value.Min}
                  maxVal={selectedTags[1]?.Value.Max}
                  onChange={handleAge}
                />
                <p className="mt-4 text-center text-sm font-normal">
                  {AgeRangeText()}
                </p>
              </div>
            </DisplayBox>
            <DisplayBox header="Expense range">
              <div className="pt-3">
                <MultiRangeSlider
                  min={MIN_EXPENSE}
                  max={MAX_EXPENSE}
                  minVal={selectedTags[0]?.Value.Min}
                  maxVal={selectedTags[0]?.Value.Max}
                  onChange={handleExpense}
                />
                <p className="mt-4 text-center text-sm font-normal">
                  {ExpenseRangeText()}
                </p>
              </div>
            </DisplayBox>
          </div>
          {/* left input */}
          <div className="flex w-full flex-col gap-6">
            <DisplayBox header="Address">
              <TagInput placeholder="Select Address" />
            </DisplayBox>
            <DisplayBox header="Payor">
              <TagInput placeholder="Select Payor" />
            </DisplayBox>
            <DisplayBox header="Organization">
              <TagInput placeholder="Select Organization" />
            </DisplayBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicMenu;
