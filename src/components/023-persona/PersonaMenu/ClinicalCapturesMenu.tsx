import CheckChip from '@components/Chip/CheckChip';
import XChip from '@components/Chip/XChip';
import HeadWithLine from '@components/Input/HeadWithLine';
import TextInput from '@components/Input/TextInput';
import type { FC } from 'react';
import React, { useCallback, useMemo, useState } from 'react';

import { ValueLegend } from '../PersonaDrawer/DrawerUtil';

interface ClinicalCaptureMenuProps {
  display: boolean;
  selectedTags: any[];
  setSelectedTags: Function;
  tagLibrary: any[];
}

const ClinicalCaptureMenu: FC<ClinicalCaptureMenuProps> = ({
  display,
  selectedTags,
  setSelectedTags,
  tagLibrary,
}) => {
  // console.log(selectedTags);
  const [searchingWord, setSearchingWord] = useState<string>('');

  function CheckBoxColor(status: 'normal' | 'abnormal' | 'borderline') {
    switch (status) {
      case 'normal':
        return 'green';
      case 'abnormal':
        return 'red';
      case 'borderline':
        return 'orange';
      default:
        return 'white';
    }
  }

  const memoizedSelectedTagsRender = useMemo(() => {
    return selectedTags.map((tag, i: number) => (
      <div key={i} className="mr-3 mt-1.5 inline-block">
        <XChip
          text={tag.Name}
          color={CheckBoxColor(tag.Value)}
          bold
          onClick={() => {
            const newSelectedTags = selectedTags.filter((item) => item !== tag);
            setSelectedTags(newSelectedTags);
          }}
        />
      </div>
    ));
  }, [selectedTags, setSelectedTags]);

  const memoizedGroupedTagsArray = useMemo(() => {
    const groupedTags = tagLibrary.reduce((acc, item) => {
      if (!acc[item.Group]) {
        acc[item.Group] = [];
      }
      acc[item.Group].push(item);
      return acc;
    }, {});

    // @ts-ignore
    return Object.values(groupedTags).map((items: any[]) => ({
      groupName: items[0].Group,
      items,
    }));
  }, [tagLibrary]);

  const handleTagChange = useCallback(
    (item: any) => {
      if (selectedTags.some((tag) => tag.Name === item.Name)) {
        const newSelectedTags = selectedTags.filter(
          (tag) => tag.Name !== item.Name
        );
        setSelectedTags(newSelectedTags);
      } else {
        setSelectedTags([...selectedTags, item]);
      }
    },
    [selectedTags, setSelectedTags]
  );

  const memoizedTagLibraryDisplay = useMemo(() => {
    return memoizedGroupedTagsArray.map((group, i: number) => (
      <div key={i}>
        <HeadWithLine header={group.groupName} />
        <div className="mb-4 mt-1.5">
          {group.items.map((item: any, j: number) => (
            <div key={j} className="mr-3 mt-1.5 inline-block">
              <CheckChip
                label={item.Name}
                checked={selectedTags.some((tag) => tag.Name === item.Name)}
                onChange={() => handleTagChange(item)}
                color={CheckBoxColor(item.Value)}
              />
            </div>
          ))}
        </div>
      </div>
    ));
  }, [handleTagChange, memoizedGroupedTagsArray, selectedTags]);

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchingWord(event.target.value);
    },
    []
  );

  return (
    <div className={`${display ? 'block' : 'hidden'}`}>
      <div className="mb-4 mt-[12px]">{memoizedSelectedTagsRender}</div>
      <div className="flex flex-col gap-4 rounded-lg bg-greySemiLightOcare px-4 py-3">
        {/* Search Tag bar */}
        <TextInput
          placeholder="Search Tag"
          value={searchingWord}
          onChange={handleSearchInputChange}
          height={0}
        />
        {/* Search Tag result ** default is all tags */}
        <ValueLegend />
        <div className="flex max-h-[200px] min-h-[200px] flex-col overflow-y-auto">
          {memoizedTagLibraryDisplay}
        </div>
      </div>
    </div>
  );
};

export default ClinicalCaptureMenu;
