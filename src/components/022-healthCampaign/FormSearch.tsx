import DateRangeInput from '@components/Input/DateRangeInput';
import SearchInput from '@components/Input/SearchInput';
import axios from 'axios';
import { format } from 'date-fns';
import useDebounce from 'hooks/useDebounce';
import type { ChangeEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { ActionMeta, MultiValue, SingleValue } from 'react-select';
import ReactSelect from 'react-select';

import type {
  Campaign,
  CampaignPayload,
  RectSelectOption,
} from '#types/Campaign';

import SelectTag from './SelectTag';
import SelectUser from './SelectUser';
import { StyleSelect } from './StyleSelect';

interface Props {
  setCampaigns: (response: Campaign[]) => void;
}

const progressOptions = [
  { value: 'not-start', label: 'not-start' },
  { value: 'in-progress', label: 'in-progress' },
  { value: 'done', label: 'done' },
];

const FormSearch = ({ setCampaigns }: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [keywword, setKeywword] = useState('');
  const [selectedProgress, setSelectedProgress] = useState<
    SingleValue<RectSelectOption> | MultiValue<RectSelectOption> | null
  >(null);
  const [selectedUsers, setSelectedUsers] = useState<
    SingleValue<RectSelectOption> | MultiValue<RectSelectOption> | null
  >(null);
  const [selectedTags, setSelectedTags] = useState<
    SingleValue<RectSelectOption> | MultiValue<RectSelectOption> | null
  >(null);

  const debouncedSearchTerm = useDebounce(keywword, 300);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeywword(event.target.value);
  };

  const onChangeDateRange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  const onChangeProgressOptions = (
    newValue: SingleValue<RectSelectOption> | MultiValue<RectSelectOption>,
    _: ActionMeta<RectSelectOption>
  ) => {
    setSelectedProgress(newValue);
  };

  const onChangeUsersOptions = (
    newValue: SingleValue<RectSelectOption> | MultiValue<RectSelectOption>,
    _: ActionMeta<RectSelectOption>
  ) => {
    setSelectedUsers(newValue);
  };

  const onChangeTagOptions = (
    newValue: SingleValue<RectSelectOption> | MultiValue<RectSelectOption>,
    _: ActionMeta<RectSelectOption>
  ) => {
    setSelectedTags(newValue);
  };

  const fetchCampaign = useCallback(
    async (controller: AbortController) => {
      const payload: CampaignPayload = {
        CampaignName: null,
        Progress: null,
        UserIDs: null,
        StartAvailabilityDate: null,
        EndAvailabilityDate: null,
      };

      if (debouncedSearchTerm) payload.CampaignName = debouncedSearchTerm;
      if (selectedProgress as SingleValue<RectSelectOption>)
        payload.Progress = [
          (selectedProgress as SingleValue<RectSelectOption>)?.value,
        ];
      if (selectedUsers) {
        payload.UserIDs = (selectedUsers as MultiValue<RectSelectOption>).map(
          (users) => users.value
        );
      }
      if (startDate)
        payload.StartAvailabilityDate = format(startDate, 'yyyy-MM-dd');
      if (endDate) payload.EndAvailabilityDate = format(endDate, 'yyyy-MM-dd');

      try {
        const { data } = await axios.post<{ data: Campaign[] }>(
          `/api/searchCampaign/`,
          payload,
          {
            signal: controller.signal,
          }
        );
        setCampaigns(data.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    [
      debouncedSearchTerm,
      selectedProgress,
      selectedUsers,
      selectedTags,
      startDate,
      endDate,
    ]
  );

  useEffect(() => {
    const controller = new AbortController();

    fetchCampaign(controller);
    return () => {
      controller.abort();
    };
  }, [fetchCampaign]);

  return (
    <form className="flex" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-5 gap-6">
        <SearchInput
          placeholder="Search...."
          onChange={handleChange}
          value={keywword}
        />

        <SelectTag onChangeTagOptions={onChangeTagOptions} />
        <ReactSelect
          options={progressOptions}
          styles={StyleSelect}
          isClearable
          components={{ IndicatorSeparator: () => null }}
          onChange={onChangeProgressOptions}
        />
        <SelectUser onChangeUsersOptions={onChangeUsersOptions} />
        <DateRangeInput
          placeholder="Please select date"
          startDate={startDate}
          endDate={endDate}
          onChange={onChangeDateRange}
        />
      </div>
    </form>
  );
};

export default FormSearch;
