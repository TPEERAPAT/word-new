import CheckChip from '@components/Chip/CheckChip';
import XChip from '@components/Chip/XChip';
import HeadWithLine from '@components/Input/HeadWithLine';
import TextInput from '@components/Input/TextInput';
import type { FC } from 'react';
import { useCallback, useState } from 'react';

import type { TagWithGroup } from '#types/Persona';

import { isLoosely, ValueLegend } from '../PersonaDrawer/DrawerUtil';

interface HealthConditionMenuProps {
  display: boolean;
  selectedConditionTags: TagWithGroup[];
  setSelectedConditionTags: (tags: TagWithGroup[]) => void;
  healthConditionTags: TagWithGroup[];
}

const HealthConditionsMenu: FC<HealthConditionMenuProps> = ({
  display,
  selectedConditionTags,
  setSelectedConditionTags,
  healthConditionTags,
}) => {
  const [searchingWord, setSearchingWord] = useState<string>('');

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchingWord(event.target.value);
    },
    []
  );

  const XChipPriorityColor = (priority: string) => {
    switch (priority) {
      case 'normal':
        return 'green';
      case 'borderline':
        return 'orange';
      case 'need-care':
        return 'red';
      case 'abnormal':
        return 'red';
      default:
        return 'white';
    }
  };

  const handleConditionTagChange = (tag: TagWithGroup) => {
    if (
      selectedConditionTags.some((selectedTag) => isLoosely(selectedTag, tag))
    ) {
      const newSelectedTags = selectedConditionTags.filter(
        (eachTag) => !isLoosely(eachTag, tag)
      );
      setSelectedConditionTags(newSelectedTags);
    } else {
      setSelectedConditionTags([...selectedConditionTags, tag]);
    }
  };

  const SelectedTagsRender = () => (
    <div className="mb-4 mt-[12px]">
      {selectedConditionTags.map((conditionTag, i: number) => (
        <div key={i} className="mr-3 mt-1.5 inline-block">
          <XChip
            text={conditionTag.Name}
            color={XChipPriorityColor(conditionTag.Value)}
            bold
            onClick={() => {
              const newSelectedTags = selectedConditionTags.filter(
                (item) => item !== conditionTag
              );
              setSelectedConditionTags(newSelectedTags);
            }}
          />
        </div>
      ))}
    </div>
  );

  const groupedConditionTags: { groupName: string; items: TagWithGroup[] }[] =
    [];
  if (healthConditionTags) {
    healthConditionTags.forEach((tag) => {
      const group = groupedConditionTags.find(
        (eachGroup) => eachGroup.groupName === tag.Group
      );
      if (group) {
        group.items.push(tag);
      } else {
        groupedConditionTags.push({
          groupName: tag.Group,
          items: [tag],
        });
      }
    });
  }

  const HealthConditionTags = () => (
    <div className={`flex flex-col gap-4`}>
      <ValueLegend />
      {groupedConditionTags.map((group, i: number) => (
        <div key={i} className="mb-4">
          <HeadWithLine header={group.groupName} />
          <div className="mb-4 mt-1.5">
            {group.items.map((tag, j: number) => (
              <div key={j} className="mr-3 mt-1.5 inline-block">
                <CheckChip
                  label={tag.Name}
                  checked={selectedConditionTags.some((selectedTag) =>
                    isLoosely(selectedTag, tag)
                  )}
                  onChange={() => handleConditionTagChange(tag)}
                  color={XChipPriorityColor(tag.Value)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`${display ? 'block' : 'hidden'}`}>
      <SelectedTagsRender />
      <div className="flex flex-col gap-4 rounded-lg bg-greySemiLightOcare px-4 py-3">
        {/* Search Tag bar */}
        <TextInput
          placeholder="Search Tag"
          value={searchingWord}
          onChange={handleSearchInputChange}
          height={0}
        />
        {/* Search Tag result ** default is all tags */}
        <div className="flex max-h-[248px] min-h-[248px] flex-col overflow-y-auto">
          <HealthConditionTags />
        </div>
      </div>
    </div>
  );
};

export default HealthConditionsMenu;
