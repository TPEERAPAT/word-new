import Button from '@components/Button/Button';
import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import DisplayBox from '@components/Ui/DisplayBox';
import StatusDot from '@components/Ui/StatusDot';
import moment from 'moment';
import type { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoBagAddOutline } from 'react-icons/io5';
import { MdCall, MdEmail } from 'react-icons/md';
import {
  RiShieldCheckFill,
  RiUserHeartLine,
  RiVidiconFill,
} from 'react-icons/ri';

interface PatientCardProps {
  name: string;
  healthStatus: string;
  visits: number;
  verify: boolean;
  cardID: string;
  birthDate: string;
  age: string;
  gender: string;
  email: string | null;
  tel: string;
  healthConditions: string[];
  clinicalCaptures: string[];
  recommendedCampaign: string[];
  organizations: string;
  addresses: string[];
  visitLocations: string[];
  payors: string[];
  tagLibrary: any;
}

const PatientCard: FC<PatientCardProps> = ({
  name,
  healthStatus,
  visits,
  verify,
  cardID,
  birthDate,
  age,
  gender,
  email,
  tel,
  healthConditions,
  clinicalCaptures,
  recommendedCampaign,
  organizations,
  addresses,
  visitLocations,
  payors,
  tagLibrary,
}) => {
  // console.log(tagLibrary.HealthCondition);
  const conditionChip =
    healthConditions.length === 0 ? (
      <p className="pt-1.5 text-base font-normal">-</p>
    ) : (
      healthConditions.map((item: string, i: number) => {
        return (
          <div key={i} className="mr-3 mt-1.5 inline-block">
            <Chip
              bold
              text={tagLibrary.HealthCondition[item].Label.EN}
              color={'blue'}
            />
          </div>
        );
      })
    );

  const clinicalCaptureChip =
    clinicalCaptures.length === 0 ? (
      <p className="pt-1.5 text-base font-normal">-</p>
    ) : (
      clinicalCaptures.map((item: string, i: number) => {
        return (
          <div key={i} className="mr-3 mt-1.5 inline-block">
            {/* <Chip bold text={item} color={'red'} /> */}
            <Chip
              bold
              // text={tagLibrary.ClinicalCaptures[item]?.Name}
              text={tagLibrary.ClinicalCapture[item].Label.EN}
              color={'red'}
            />
          </div>
        );
      })
    );

  const clinicLocationChip =
    visitLocations.length === 0 ? (
      <p className="pt-1.5 text-base font-normal">-</p>
    ) : (
      visitLocations.map((item, i: number) => {
        return (
          <div key={i} className="mr-3 mt-1.5 inline-block">
            <Chip bold text={item} color={'yellow'} />
          </div>
        );
      })
    );

  const organizationChip = organizations && (
    <>
      <div className="mr-3 mt-1.5 inline-block">
        <Chip
          bold
          text={tagLibrary.Organization[organizations].Company}
          color="white"
        />
      </div>
      <div className="mr-3 mt-1.5 inline-block">
        <Chip
          bold
          text={tagLibrary.Organization[organizations].Department}
          color="white"
        />
      </div>
      <div className="mr-3 mt-1.5 inline-block">
        <Chip
          bold
          text={tagLibrary.Organization[organizations].Position}
          color="white"
        />
      </div>
    </>
  );

  const addressChip =
    addresses.length === 0 ? (
      <p className="pt-1.5 text-base font-normal">-</p>
    ) : (
      addresses.map((item, i: number) => {
        return (
          <div key={i} className="mr-3 mt-1.5 inline-block">
            <Chip bold text="????" color="white" />
          </div>
        );
      })
    );

  const recommendedCampaignChip =
    recommendedCampaign.length === 0 ? (
      <p className="pt-1.5 text-base font-normal">-</p>
    ) : (
      recommendedCampaign.map((item, i: number) => {
        return (
          <div key={i} className="mr-3 mt-1.5 inline-block">
            <Chip bold text={`Recommended ${i}`} color={'white'} />
          </div>
        );
      })
    );

  return (
    <div className="w-full cursor-pointer">
      <Card className="border-[1px] border-solid border-transparent shadow-lg transition hover:border-blueOcare">
        <div className="flex flex-col py-6">
          {/* Top section */}
          <div className="mb-6 flex flex-row items-center justify-between border-[3px] border-y-[0px] border-r-[0px] border-solid border-blueOcare px-6">
            <div className="flex flex-row">
              {/* Name */}
              <div className="mr-3 max-w-[380px] truncate border-l-[3px] text-2xl font-normal">
                {name}
              </div>
              <StatusDot message={healthStatus} />
            </div>

            {/* 5 ending botton */}
            <div className="flex flex-row items-center gap-4">
              {/* Visits */}
              <p className="flex h-[30px] w-[70px] items-center justify-center rounded-lg border-[1px] border-solid border-greyBorder text-sm font-normal">
                {visits} {visits > 1 ? 'Visits' : 'Visit'}
              </p>

              {/* Verified with icon */}
              <div className="flex h-[30px] w-[93px] items-center  justify-center rounded-lg bg-greenLightOcare text-sm font-medium">
                <RiShieldCheckFill size={14} className="mr-2 fill-greenOcare" />
                <p className="text-sm font-normal text-greenOcare">
                  {verify} Verified
                </p>
              </div>

              {/* Divider */}
              <span className="h-9 w-[1px] bg-greyBorder"></span>

              {/* Email with icon */}
              <div className="flex h-[40px] flex-row items-center rounded-lg border-[1px] border-solid border-greyBorder px-4">
                <MdEmail size={16} className="mr-3 text-black3Ocare" />
                <p className="text-sm font-medium">Email</p>
              </div>

              {/* Call with icon */}
              <div className="flex h-[40px] flex-row items-center rounded-lg border-[1px] border-solid border-greyBorder px-4">
                <MdCall size={16} className="mr-3 text-black3Ocare" />
                <p className="text-sm font-medium">Call</p>
              </div>

              {/* VDO Call with icon */}
              <div className="flex h-[40px] flex-row items-center rounded-lg border-[1px] border-solid border-greyBorder px-4">
                <RiVidiconFill size={16} className="mr-3 text-black3Ocare" />
                <p className="text-sm font-medium">VDO Call</p>
              </div>
            </div>
          </div>
          {/* <span className="h-[1px] bg-greyBorder mx-6 mb-6" /> */}
          {/* Middle section */}
          <div className="flex w-full flex-row justify-between px-6">
            <DisplayBox header="ID">
              <div className="pt-1.5 text-base font-normal">{cardID}</div>
            </DisplayBox>

            <DisplayBox header="Date of Birth">
              <div className="pt-1.5 text-base font-normal">
                {moment(birthDate).format('D MMM YYYY')}
              </div>
            </DisplayBox>

            <DisplayBox header="Age">
              <div className="pt-1.5 text-base font-normal">
                {age !== '0' ? `${age} ปี` : '-'}
              </div>
            </DisplayBox>

            <DisplayBox header="Gender">
              <div className="pt-1.5 text-base font-normal">{gender}</div>
            </DisplayBox>

            <DisplayBox header="Email">
              <div className="pt-1.5 text-base font-normal">
                {email !== '' && email !== null ? email : '-'}
              </div>
            </DisplayBox>

            <DisplayBox header="Mobile Phone" divClassName="w-[15%]">
              <div className="pt-1.5 text-base font-normal">{tel}</div>
            </DisplayBox>
          </div>

          {/* Upper Chip section */}
          <div className="flex w-full flex-row justify-between px-6 pt-6">
            <DisplayBox
              header="Diagnosis"
              divClassName="inline-block w-full min-w-[348px]"
            >
              {conditionChip}
            </DisplayBox>

            <DisplayBox
              header="Clinical Captures"
              divClassName="inline-block w-full min-w-[348px] max-h-[120px] overflow-y-auto"
            >
              {clinicalCaptureChip}
            </DisplayBox>

            <DisplayBox
              header="Recommended Campaign"
              divClassName="inline-block w-full min-w-[348px]"
            >
              {recommendedCampaignChip}
            </DisplayBox>
          </div>

          {/* Middle Chip section */}
          <div className="flex w-full flex-row justify-between px-6 pt-6">
            <DisplayBox
              header="Organizations"
              divClassName="inline-block w-full min-w-[348px]"
            >
              {organizationChip}
            </DisplayBox>

            <DisplayBox
              header="Address"
              divClassName="inline-block w-full min-w-[348px]"
            >
              {addressChip}
            </DisplayBox>

            <DisplayBox
              header="Visit Location"
              divClassName="inline-block w-full min-w-[348px]"
            >
              {clinicLocationChip}
            </DisplayBox>
          </div>

          {/* Bottom section */}
          <div className="flex w-full flex-row justify-between px-6 pt-6">
            <DisplayBox
              header="Payor"
              divClassName="inline-block w-full min-w-[450px]"
            >
              <div className="flex gap-3 text-sm font-normal">
                {payors.map((payor, i: number) => {
                  // return <p key={i}>• ?? payor {i}</p>;
                  return (
                    <div key={i} className="flex gap-3">
                      {/* <p>{payor}</p> */}
                      <p>{tagLibrary.Payor[payor].Name}</p>
                      {i !== payors.length - 1 && <p className="mx-1">,</p>}
                    </div>
                  );
                })}
              </div>
            </DisplayBox>
          </div>
          <div className="ml-auto flex gap-[18px] pr-6">
            <Button
              startIcon={<IoBagAddOutline size={14} />}
              type="outlined"
              bold
              shadow
              text="Add to Campaign"
              className="mt-auto max-w-[219px]"
            />
            <Button
              startIcon={<RiUserHeartLine size={14} />}
              type="outlined"
              bold
              shadow
              text="Add to Engagement"
              className="mt-auto max-w-[219px]"
            />
            <Button
              startIcon={<FaPlus size={14} />}
              bold
              shadow
              text="Add Custom Persona"
              className="mt-auto max-w-[219px]"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PatientCard;
