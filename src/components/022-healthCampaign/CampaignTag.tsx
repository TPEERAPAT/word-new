import Chip from '@components/Chip/Chip';
import DisplayBox from '@components/Ui/DisplayBox';
import useCampaignTags from 'hooks/api/useCampaignTags';

import type { Tag } from '#types/Campaign';

interface Props {
  tagIds: string[];
}

const CampaignTag = ({ tagIds }: Props) => {
  const { data: tags } = useCampaignTags();

  const tagsList: Tag[] = [];

  tags?.forEach((tag) => {
    tagIds.forEach((tagId) => {
      if (tag.uuid === tagId) {
        tagsList.push(tag);
      }
    });
  });

  return (
    <DisplayBox header="Campaign Tag">
      {tags ? (
        <div className="mt-1 flex flex-wrap gap-1">
          {tagsList &&
            tagsList.map((tag, index) => {
              return (
                <Chip color="white" key={index} text={tag.CampaignTagName} />
              );
            })}
        </div>
      ) : null}
    </DisplayBox>
  );
};

export default CampaignTag;
