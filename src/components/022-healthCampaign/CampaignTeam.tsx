import DisplayBox from '@components/Ui/DisplayBox';
import useCampaignUsers from 'hooks/api/useCampaignUsers';

interface Props {
  teamIds: string[];
}

const CampaignTeam = ({ teamIds }: Props) => {
  const { data: users } = useCampaignUsers();

  const teamUsers = users?.filter((user) => {
    if (teamIds.find((id) => user.uuid === id)) return true;
    return false;
  });

  return (
    <DisplayBox header="Team">
      <div>
        {teamUsers &&
          teamUsers?.map((team, index) => {
            return (
              <div className="flex items-center gap-2 pb-1" key={index}>
                <img
                  src="/imgs/cavalier.jpeg"
                  alt=""
                  className="h-6 w-6 rounded-full border border-solid border-gray-300"
                />
                <span className="text-sm">
                  {team.FirstName} {team.LastName}
                </span>
              </div>
            );
          })}
      </div>
    </DisplayBox>
  );
};

export default CampaignTeam;
