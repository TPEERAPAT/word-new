import Card from '@components/Card/Card';
import LoadingCard from '@components/Card/LoadingCard';
import Chip from '@components/Chip/Chip';
import DisplayBox from '@components/Ui/DisplayBox';
import { useGetTagLibraryQuery } from '@redux/tagLibApi';
import React from 'react';
import { LibraryToTag } from 'utils/PersonaUtil';

const HealthAnalysis = ({ PatientData }: { PatientData: any }) => {
  const { data, isLoading } = useGetTagLibraryQuery();

  if (isLoading) {
    return <LoadingCard />;
  }
  if (!data) {
    return <div>Error</div>;
  }

  const tagLibrary = LibraryToTag(data.data);

  const diagnosis =
    PatientData.ClinicalInfo.HealthConditionIDs.length === 0 ? (
      <p>-</p>
    ) : (
      PatientData.ClinicalInfo.HealthConditionIDs.map(
        (item: any, i: number) => {
          return (
            <div key={i} className="inline-block">
              <Chip
                color="blue"
                text={tagLibrary.HealthCondition[item].Name}
                bold
                className="mb-3 mr-3"
              />
            </div>
          );
        }
      )
    );

  const clinicalCaptures =
    PatientData.ClinicalInfo.ClinicalCaptureIDs.length === 0 ? (
      <p>-</p>
    ) : (
      PatientData.ClinicalInfo.ClinicalCaptureIDs.map(
        (item: any, i: number) => {
          return (
            <div key={i} className="inline-block">
              <Chip
                color="red"
                text={tagLibrary.ClinicalCapture[item].Name}
                bold
                className="mb-3 mr-3"
              />
            </div>
          );
        }
      )
    );

  const longBoxStyle =
    'inline-block w-full min-w-[260px] align-top lg:mb-6 sm:w-1/3';

  return (
    <Card
      className="px-[18px] pb-3 pt-[18px] sm:rounded-lg sm:p-6"
      shadow={true}
    >
      {/* head */}
      <div className="mb-[18px] border-0 border-b-[1px] border-solid border-greyLightOcare pb-[18px]">
        <h2 className="mb-[6px] text-lg font-medium">Health Analysis</h2>
        <p className="text-sm text-greyOcare">
          AI-powered Clinical Intelligence ™
        </p>
      </div>
      {/* detail */}
      <div className="justify-between xl:flex">
        <DisplayBox header="Diagnosis" divClassName={longBoxStyle}>
          {diagnosis}
        </DisplayBox>

        <div className="mb-[18px] h-[1px] w-full bg-greyLightOcare" />

        <DisplayBox header="Clinical Captures" divClassName={longBoxStyle}>
          {clinicalCaptures}
        </DisplayBox>

        <div className="mb-[18px] h-[1px] w-full bg-greyLightOcare" />

        <DisplayBox header="Health Plan" divClassName={longBoxStyle}>
          {/* {healthPlan} */}
          ???
        </DisplayBox>
      </div>
    </Card>
  );
};

export default HealthAnalysis;
