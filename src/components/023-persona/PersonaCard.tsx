import Button from '@components/Button/Button';
import IconButton from '@components/Button/IconButton';
import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import DisplayBox from '@components/Ui/DisplayBox';
import StatusDot from '@components/Ui/StatusDot';
import Tooltips from '@components/Ui/Tooltips';
import type { FC } from 'react';
import React, { useState } from 'react';
import { FaBookmark, FaPlus, FaRegBookmark } from 'react-icons/fa';
import { RiDeleteBinLine, RiUserSearchLine } from 'react-icons/ri';
import { TbPencilMinus } from 'react-icons/tb';

const PatientBookmark = (actived: boolean) => {
  return (
    <div
      className={`${
        actived
          ? 'bg-blueOcare hover:bg-blueOcare/70'
          : 'border-solid border-blueOcare hover:bg-blueOcare/10'
      } flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full transition`}
    >
      {actived ? (
        <FaBookmark size={18} className="fill-white" />
      ) : (
        <FaRegBookmark size={18} className="text-blueOcare" />
      )}
    </div>
  );
};

interface PersonaCardProps {
  persona: any;
  onClickAddToCampaign: Function;
  onClickEditPersona: Function;
  onClickDeletePersona: Function;
  personaIndex: number;
  tagLibrary: any;
}

const PersonaCard: FC<PersonaCardProps> = ({
  persona,
  onClickAddToCampaign,
  onClickEditPersona,
  onClickDeletePersona,
  personaIndex,
  tagLibrary,
}) => {
  const [personaNameTooltipStatus, setPersonaNameTooltipStatus] =
    useState<boolean>(false);
  const [aliasTooltipStatus, setAliasTooltipStatus] = useState<boolean>(false);

  const personaNameTooltipStatusHandler = (eachStatus: 'in' | 'out') => {
    if (eachStatus === 'in') {
      setPersonaNameTooltipStatus(true);
    } else if (eachStatus === 'out') {
      setPersonaNameTooltipStatus(false);
    }
  };

  const aliasTooltipStatusHandler = (eachStatus: 'in' | 'out') => {
    if (eachStatus === 'in') {
      setAliasTooltipStatus(true);
    } else if (eachStatus === 'out') {
      setAliasTooltipStatus(false);
    }
  };

  const DemographicTag = () => {
    if (!persona.Demographic) return null;
    return (
      <>
        {persona.Demographic &&
          persona.Demographic.map((tag: any, j: number) => {
            if (tag.Name === 'Gender') {
              return (
                <div key={j} className="mr-3 mt-1.5 inline-block">
                  <Chip text={tag.Value} color="green" bold />
                </div>
              );
            }
            if (tag.Name === 'Expense') {
              return (
                <div key={j} className="mr-3 mt-1.5 inline-block">
                  <Chip
                    text={`
                      Expense ${tag.Value.Min.toLocaleString()} - ${tag.Value.Max.toLocaleString()}
                    `}
                    color="green"
                    bold
                  />
                </div>
              );
            }
            if (tag.Name === 'Age') {
              return (
                <div key={j} className="mr-3 mt-1.5 inline-block">
                  <Chip
                    text={`
                      Age ${tag.Value.Min.toLocaleString()} - ${tag.Value.Max.toLocaleString()}
                    `}
                    color="green"
                    bold
                  />
                </div>
              );
            }

            return null;
          })}

        {persona.Organization &&
          persona.OrganizationIDs.map(
            (eachOraganization: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  <div key={index} className="mr-3 mt-1.5 inline-block">
                    <Chip
                      color="green"
                      text={tagLibrary.Organization[eachOraganization].Company}
                      bold
                    />
                  </div>
                  <div className="mr-3 mt-1.5 inline-block">
                    <Chip
                      color="green"
                      text={
                        tagLibrary.Organization[eachOraganization].Department
                      }
                      bold
                    />
                  </div>
                  <div className="mr-3 mt-1.5 inline-block">
                    <Chip
                      color="green"
                      text={tagLibrary.Organization[eachOraganization].Position}
                      bold
                    />
                  </div>
                </React.Fragment>
              );
            }
          )}

        {persona.PayorIDs &&
          persona.PayorIDs.map((eachPayor: any, index: number) => {
            return (
              <div key={index} className="mr-3 mt-1.5 inline-block">
                <Chip
                  color="green"
                  text={tagLibrary.Payor[eachPayor].Name}
                  bold
                />
              </div>
            );
          })}
      </>
    );
  };

  const HealthConditionTag = () => {
    if (!persona.HealthConditionIDs) return null;
    return (
      <>
        {persona.HealthConditionIDs.map((eachCondition: any, index: number) => {
          return (
            <div key={index} className="mr-3 mt-1.5 inline-block">
              <Chip
                color="blue"
                text={tagLibrary.HealthCondition[eachCondition].Label.EN}
                bold
              />
            </div>
          );
        })}
      </>
    );
  };

  const HealthPriorityTag = () => {
    if (!persona.HealthPriorityIDs) return null;
    return (
      <>
        {persona.HealthPriorityIDs.map((eachCondition: any, index: number) => {
          return (
            <div key={index} className="mr-3 mt-1.5 inline-block">
              <Chip
                color="blue"
                text={tagLibrary.HealthPriority[eachCondition].Value}
                bold
              />
            </div>
          );
        })}
      </>
    );
  };

  const ClinicalCaptureTag = () => {
    if (!persona.ClinicalCaptureIDs) return null;
    return (
      <>
        {persona.ClinicalCaptureIDs &&
          persona.ClinicalCaptureIDs.map((tag: any, j: number) => {
            return (
              <div key={j} className="mr-3 mt-1.5 inline-block">
                <Chip
                  text={tagLibrary.ClinicalCapture[tag].Label.EN}
                  color="red"
                  bold
                />
              </div>
            );
          })}
      </>
    );
  };

  const VisitLocationTag = () => {
    if (!persona.VisitLocationIDs) return null;
    return (
      <>
        {persona.VisitLocationIDs.map((eachLocation: any, index: number) => {
          return (
            <div key={index} className="mr-3 mt-1.5 inline-block">
              <Chip
                color="orange"
                text={tagLibrary.VisitLocation[eachLocation].Name}
                bold
              />
            </div>
          );
        })}
      </>
    );
  };

  const CustomPersonaTag = () => {
    if (!persona.CustomPersonaIDs) return null;
    return (
      <>
        {persona.CustomPersonaIDs.map((eachCustom: any, index: number) => {
          return (
            <div key={index} className="mr-3 mt-1.5 inline-block">
              <Chip
                color="white"
                text={tagLibrary.CustomPersona[eachCustom]?.Name}
                bold
              />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <Card className="mb-6 p-3 lg:p-6" shadow>
      {/* ---- Patient Card Head ---- */}
      <div className="flex items-center gap-4">
        {/* pass props later in real api */}
        {PatientBookmark(true)}
        <div>
          <div>
            <p
              className="max-w-[300px] cursor-pointer truncate text-2xl font-medium transition hover:underline active:text-blueOcare/70"
              onClick={() => {
                window.location.href = `/persona/personaId=${persona.uuid}&page=1`;
              }}
              onMouseOver={() => personaNameTooltipStatusHandler('in')}
              onMouseOut={() => personaNameTooltipStatusHandler('out')}
            >
              {persona.PersonaName}
            </p>
            {personaNameTooltipStatus && persona.PersonaName.length > 26 ? (
              <Tooltips
                top=""
                left=""
                style="mt-[-65px]"
                color="blueOcare"
                label="Persona Name"
                text={persona.PersonaName}
              />
            ) : null}
          </div>
          <p className="text-sm">
            {`Visit Range:
              ${
                persona.StartVisitDate
                  ? new Date(persona.StartVisitDate).toLocaleDateString(
                      'en-US',
                      {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      }
                    )
                  : ' '
              } - ${
              persona.EndVisitDate
                ? new Date(persona.EndVisitDate).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                : ' '
            }
                `}
          </p>
        </div>
        {persona.Alias && persona.Alias.length > 0 ? (
          <div className="relative flex justify-center">
            <div
              className="relative max-w-[200px] truncate rounded-lg bg-blueLightOcare px-4 py-[7px] text-base font-medium text-blueOcare"
              onMouseOver={() => aliasTooltipStatusHandler('in')}
              onMouseOut={() => aliasTooltipStatusHandler('out')}
            >
              {persona.Alias}
            </div>
            {aliasTooltipStatus && persona.Alias.length > 21 ? (
              <Tooltips
                top="-36px"
                left=""
                style=""
                color="blueOcare"
                label="Alias"
                text={persona.Alias}
              />
            ) : null}
          </div>
        ) : null}
        <div className="ml-auto flex flex-col items-end">
          <StatusDot
            message="Active Campaign Usage"
            color="green"
            className="mb-3"
          />
          {/* <div className="flex gap-3">
            <Chip text="?????" color="white" />
            <Chip text="?????" color="white" />
            <Chip text="?????" color="white" />
          </div> */}
        </div>
      </div>
      <div className="my-6 h-[1px] w-full bg-greyLightOcare" />
      {/* --- Patient Detail --- */}
      <div className="mb-3 w-full">
        <div className="mb-6 flex max-w-[660px] justify-between">
          <DisplayBox header="Estimate Size">
            <p className="font-normal">{persona.ExpectPatients}</p>
          </DisplayBox>

          <DisplayBox header="Expected Value">
            <p className="font-normal">{persona.ExpectValuation}</p>
          </DisplayBox>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <DisplayBox header="Clinical Tag">
              <DemographicTag />
              <HealthConditionTag />
              <HealthPriorityTag />
              <ClinicalCaptureTag />
              <VisitLocationTag />
              <CustomPersonaTag />
            </DisplayBox>
          </div>
          <div className="w-1/2">
            <DisplayBox header="Description">
              {persona.ShortDetail ? (
                <p className="max-h-[80px] w-[253px] overflow-auto rounded bg-greySemiLightOcare px-3 py-2 text-sm font-normal">
                  {persona.ShortDetail}
                </p>
              ) : (
                '-'
              )}
            </DisplayBox>
          </div>
        </div>
      </div>
      {/* --- Buttons --- */}
      <div className="flex justify-end gap-[18px]">
        <IconButton
          color="red"
          icon={<RiDeleteBinLine className="fill-redOcare" size={18} />}
          onClick={onClickDeletePersona}
          tooltip="Delete Persona"
        />
        <IconButton
          icon={<RiUserSearchLine className="text-greyOcare" size={18} />}
          onClick={() => {
            window.location.href = `/persona/personaId=${persona.uuid}&page=1`;
          }}
          tooltip="Discover Patients"
        />
        <IconButton
          icon={<TbPencilMinus className="text-greyOcare" size={18} />}
          onClick={() => onClickEditPersona(personaIndex)}
          tooltip="Edit Persona"
        />
        <Button
          type="outlined"
          text="Add to Campaign"
          bold
          className="max-w-fit px-[18px]"
          startIcon={<FaPlus className="text-blueOcare" size={10} />}
          onClick={onClickAddToCampaign}
        />
      </div>
    </Card>
  );
};

export default PersonaCard;
