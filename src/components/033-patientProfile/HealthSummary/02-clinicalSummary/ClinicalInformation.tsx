import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import DisplayBox from '@components/Ui/DisplayBox';
import React from 'react';

interface ClinicalInformationProps {
  data: any;
}

const ClinicalInformation = ({ data }: ClinicalInformationProps) => {
  // const clinicOrLocation =
  //   data.visitLocations === undefined ? (
  //     <Chip color="orange" text="???" bold />
  //   ) : (
  //     data.visitLocations.map((item: any, i: number) => {
  //       return (
  //         <div key={i} className="inline-block">
  //           <Chip color="orange" text={item.Name} className="mb-3 mr-3" bold />
  //         </div>
  //       );
  //     })
  //   );

  const visitLocations = data.DemographicInfo.VisitLocationIDs.map(
    (visitLocation: any, i: number) => {
      return (
        <div key={i} className="inline-block">
          <Chip
            color="orange"
            text={visitLocation.Name}
            className="mb-3 mr-3"
            bold
          />
        </div>
      );
    }
  );

  const boxStyle = 'inline-block w-[200px] align-top mb-[18px]';

  return (
    <Card className="px-[18px] pb-[18px] sm:rounded-lg sm:p-6" shadow>
      <h2 className="mb-6 border-0 border-b-[1px] border-solid border-greyLightOcare pb-[18px] pt-6 text-lg font-medium">
        Clinical Information
      </h2>
      {/* ---- upper data ---- */}
      {/* <div className="justify-between xl:flex"> */}
      <div className="justify-between">
        <DisplayBox header="โรคประจำตัว" divClassName={boxStyle}>
          ???
        </DisplayBox>

        <DisplayBox header="ประวัติสุขภาพครอบครัว" divClassName={boxStyle}>
          ???
        </DisplayBox>

        <DisplayBox header="ประวัติผ่าตัด" divClassName={boxStyle}>
          ???
        </DisplayBox>

        <DisplayBox header="การแพ้" divClassName={boxStyle}>
          ???
        </DisplayBox>

        <DisplayBox header="Blood group" divClassName={boxStyle}>
          ???
        </DisplayBox>
      </div>

      {/* ---- lower data ---- */}
      <div>
        <DisplayBox header="Visit Locations">{visitLocations}</DisplayBox>
      </div>
    </Card>
  );
};

export default ClinicalInformation;
