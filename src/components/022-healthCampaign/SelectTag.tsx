import useCampaignTags from 'hooks/api/useCampaignTags';
import type { ActionMeta, MultiValue, SingleValue } from 'react-select';
import ReactSelect from 'react-select';

import type { RectSelectOption } from '#types/Campaign';

import { StyleSelect } from './StyleSelect';

interface Props {
  onChangeTagOptions: (
    newValue: SingleValue<RectSelectOption> | MultiValue<RectSelectOption>,
    actionMeta: ActionMeta<RectSelectOption>
  ) => void;
}

const SelectTag = ({ onChangeTagOptions }: Props) => {
  const { data: tags } = useCampaignTags();

  if (!tags) return null;

  const tagOptions = tags.map((tag) => {
    return {
      value: tag.uuid,
      label: tag.CampaignTagName,
    };
  });

  return (
    <ReactSelect
      options={tagOptions}
      styles={StyleSelect}
      isMulti
      components={{ IndicatorSeparator: () => null }}
      onChange={onChangeTagOptions}
    />
  );
};

export default SelectTag;
