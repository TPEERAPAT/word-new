/* eslint-disable unused-imports/no-unused-vars */

import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import moment from 'moment';
import type { FC } from 'react';
import { useState } from 'react';
import { HiTrash } from 'react-icons/hi2';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';
import { RiPencilFill } from 'react-icons/ri';

import type { CampaignDataType } from '#types/Campaign';

const CampaignCard: FC<
  CampaignDataType & { edit: () => void; remove: () => void }
> = ({
  name = '',
  alias = '',
  description = '',
  cost = 0,
  startDate = new Date(),
  endDate = new Date(),
  estimatePatient = '',
  expectValue = '',
  personaTag = {
    demographic: {
      male: false,
      female: false,
      age: 'Age: All',
      expense: 'Expense: All',
      address: [],
      payor: [],
    },
    clinical: [],
    healthCondition: [],
    location: [],
  },
  edit = () => {},
  remove = () => {},
}) => {
  const [openDescriptions, setOpenDescriptions] = useState<boolean>(false);

  const toggleDescriptions = () => {
    setOpenDescriptions(!openDescriptions);
  };

  return (
    <div className="w-full">
      <Card className="shadow-lg">
        <div className="flex flex-col">
          <div className="grid grid-cols-12 gap-4">
            {/* First Half */}
            <div className="col-span-7 grid grid-cols-10 gap-4">
              {/* Name */}
              <div
                className="col-span-3 flex items-center justify-between px-4"
                onClick={toggleDescriptions}
              >
                <div className="font-semibold">{name}</div>
                <div className="flex">
                  {openDescriptions ? <IoCaretUp /> : <IoCaretDown />}
                </div>
              </div>

              {/* Date */}
              <div className="col-span-2 flex items-center">
                <div className="font-normal">
                  {moment(startDate).format('DD MMMM YYYY')} -{' '}
                  {moment(endDate).format('DD MMMM YYYY')}
                </div>
              </div>

              {/* Estimate patients */}
              <div className="col-span-2 flex items-center">
                <div className="font-normal">{estimatePatient}</div>
              </div>

              {/* Expected valuation */}
              <div className="col-span-3 flex items-center">
                <div className="font-normal">{expectValue}</div>
              </div>
            </div>

            {/* Persona Tag */}
            <div className="col-span-4 flex flex-wrap gap-2 py-4">
              {personaTag.demographic.male && (
                <Chip color="green" text={'Male'} bold />
              )}

              {personaTag.demographic.female && (
                <Chip color="green" text={'Female'} bold />
              )}

              <Chip color="green" text={personaTag.demographic.age} bold />
              <Chip color="green" text={personaTag.demographic.expense} bold />

              {personaTag.demographic.address.map((address, i) => {
                return <Chip key={i} color="green" text={address} bold />;
              })}

              {personaTag.demographic.payor.map((payor, i) => {
                return <Chip key={i} color="green" text={payor} bold />;
              })}

              {personaTag.clinical.map((clinical, i) => {
                return <Chip key={i} color="red" text={clinical} bold />;
              })}

              {personaTag.healthCondition.map((healthCondition, i) => {
                return (
                  <Chip key={i} color="seaBlue" text={healthCondition} bold />
                );
              })}

              {personaTag.location.map((location, i) => {
                return <Chip key={i} color="yellow" text={location} bold />;
              })}
            </div>

            {/* Action */}
            <div className="col-span-1 flex items-center">
              <div className="flex flex-row gap-2">
                <RiPencilFill
                  size={24}
                  className="cursor-pointer fill-[#FF9500]"
                  onClick={edit}
                />
                <HiTrash
                  size={24}
                  className="cursor-pointer fill-[#C7C7CC]"
                  onClick={remove}
                />
              </div>
            </div>
          </div>

          {openDescriptions && (
            <div className="mb-4 w-full px-4 ">
              <div className="rounded-lg bg-[#F2F2F7] px-4 py-2">
                {description}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CampaignCard;
