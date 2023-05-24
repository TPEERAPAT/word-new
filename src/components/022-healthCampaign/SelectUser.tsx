import useCampaignUsers from 'hooks/api/useCampaignUsers';
import type { ActionMeta, MultiValue, SingleValue } from 'react-select';
import ReactSelect from 'react-select';

import type { RectSelectOption } from '#types/Campaign';

import { StyleSelect } from './StyleSelect';

interface Props {
  onChangeUsersOptions: (
    newValue: SingleValue<RectSelectOption> | MultiValue<RectSelectOption>,
    actionMeta: ActionMeta<RectSelectOption>
  ) => void;
}

const SelectUser = ({ onChangeUsersOptions }: Props) => {
  const { data: users } = useCampaignUsers();

  if (!users || !users.length) return null;

  const teamUsers = users.map((user) => {
    return {
      value: user.uuid,
      label: `${user.FirstName} ${user.LastName}`,
    };
  });

  return (
    <ReactSelect
      options={teamUsers}
      styles={StyleSelect}
      isMulti
      components={{ IndicatorSeparator: () => null }}
      onChange={onChangeUsersOptions}
    />
  );
};

export default SelectUser;
