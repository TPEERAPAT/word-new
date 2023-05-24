import Card from '@components/Card/Card';
import type { FC } from 'react';
import { GoChevronDown } from 'react-icons/go';

const PersonaCardLoading: FC = () => {
  return (
    <div className="h-[310px] w-[95%]">
      <Card className="flex flex-col shadow-lg">
        <div className="flex flex-row justify-between p-6">
          {/* Name loading */}
          <div className="flex w-1/3 animate-pulse flex-col">
            <div className="text-2xl font-semibold text-[#3A3A3C]">Name</div>
            <div className="mt-2 h-12 w-1/2 rounded-lg bg-gray-100" />
          </div>

          {/* Loading HN and HealthCondition loading */}
          <div className="flex w-1/3 animate-pulse flex-col">
            <div className="text-2xl font-semibold text-[#3A3A3C]">HN</div>
            <div className="mt-2 h-12 w-1/2 rounded-lg bg-gray-100" />

            <div className="mt-3 text-2xl font-semibold text-[#3A3A3C]">
              HealthCondition
            </div>
            <div className="flex flex-row gap-4">
              <div className="mt-2 h-10 w-1/5 rounded-lg bg-blueLightOcare" />
              <div className="mt-2 h-10 w-1/5 rounded-lg bg-blueLightOcare" />
              <div className="mt-2 h-10 w-1/5 rounded-lg bg-blueLightOcare" />
            </div>
          </div>

          {/* Priority and Location loading */}
          <div className="flex w-1/3 animate-pulse flex-col">
            <div className="text-2xl font-semibold text-[#3A3A3C]">
              Priority Level
            </div>
            <div className="mt-2 h-12 w-1/2 rounded-lg bg-gray-100" />
            <div className="mt-3 text-2xl font-semibold text-[#3A3A3C]">
              Location
            </div>
            <div className="mt-2 h-10 w-1/5 rounded-lg bg-yellowLightOcare" />
          </div>
        </div>

        {/* Show more button */}
        <div className="w-full px-6 ">
          <div className="flex h-12 flex-col justify-center rounded-lg bg-gray-100">
            <div className="flex flex-row justify-center">
              <div className="text-2xl font-semibold text-gray-400">
                Show More Detail
              </div>
              <GoChevronDown size={32} className="ml-4 fill-gray-400" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PersonaCardLoading;
