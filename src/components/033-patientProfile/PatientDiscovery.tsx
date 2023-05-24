import Button from '@components/Button/Button';
import LoadingCard from '@components/Card/LoadingCard';
import PatientCard from '@components/Card/PatientCard';
import Chip from '@components/Chip/Chip';
import Navbar from '@components/navbar/Navbar';
import PageHead, { HeadStyle } from '@components/Ui/PageHead';
import Pagination from '@components/Ui/Pagination';
import { useGetTagLibraryQuery } from '@redux/tagLibApi';
import type { FC } from 'react';
import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RiSaveLine } from 'react-icons/ri';
import { TbFileDownload } from 'react-icons/tb';
import { LibraryToTag } from 'utils/PersonaUtil';

import type { PatientData } from '#types/PatientProfile';

interface PatientDiscoveryProps {
  ClinicalInfo: {
    Demographic: any[];
    ClinicalCaptures: any[];
    HealthConditions: any[];
    VisitLocations: any[];
  };
  SearchResult: any[];
  PatientCount: string;
  message: string;
}

const PatientDiscovery: FC<PatientDiscoveryProps> = ({
  // eslint-disable-next-line unused-imports/no-unused-vars
  ClinicalInfo,
  SearchResult,
  PatientCount,
  message,
}) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [currentPage, setCurrentPage] = React.useState(1);

  // get tag library
  const { data, isLoading } = useGetTagLibraryQuery();

  if (isLoading) {
    return (
      <div className="flex h-full flex-col">
        <PageHead title="Patient Discovery" />
        <LoadingCard />
      </div>
    );
  }
  if (!data) {
    return <div>Error</div>;
  }
  const tagLibrary = LibraryToTag(data.data);

  function handlePatientClick(patientId: string) {
    window.location.href = `/health-summary/${patientId}`;
  }

  const PatientName = (patient: PatientData) => {
    let NamePrefix: string;
    if (patient.PatientInfo.Gender === 'Male') {
      NamePrefix = 'นาย';
    } else if (patient.PatientInfo.Gender === 'Female') {
      NamePrefix = 'นางสาว';
    } else {
      NamePrefix = '';
    }
    return `${NamePrefix} ${patient.PatientInfo.FirstName} ${patient.PatientInfo.LastName}`;
  };

  // const PatientHealthStatus = (patient: PatientData) => {
  //   if (patient.ClinicalInfo.HealthPriorityIDs.length === 0) {
  //     return 'no data';
  //   }
  //   const healthStatusUuid = patient.ClinicalInfo.HealthPriorityIDs[0];
  //   return tagLibrary.HealthPriority[healthStatusUuid].Value;
  // };

  const PatientList = SearchResult.map((patient, i: number) => {
    return (
      <div
        key={i}
        className="mb-6"
        onClick={() => handlePatientClick(patient.uuid)}
      >
        <PatientCard
          name={PatientName(patient)}
          healthStatus="pretty good"
          visits={patient.CountVisits}
          verify={true}
          cardID="????"
          birthDate={patient.PatientInfo.Birthdate}
          age={patient.PatientInfo.Age}
          gender={patient.PatientInfo.Gender}
          email={patient.PatientInfo.Email}
          tel={patient.PatientInfo.CellPhone}
          healthConditions={[]}
          clinicalCaptures={[]}
          recommendedCampaign={[]}
          organizations={patient.DemographicInfo.Demographic.OrganizationID}
          addresses={[]}
          visitLocations={patient.DemographicInfo.VisitLocationIDs}
          payors={patient.DemographicInfo.Demographic.PayorIDs}
          tagLibrary={tagLibrary}
        />
      </div>
    );
  });

  const SelectedTagChips = (
    // <div>
    //   {ClinicalInfo.Demographic.map((tag: any, i: number) => {
    //     return (
    //       <div key={i} className="mr-3 mt-1.5 inline-block">
    //         <Chip bold text={'Hi'} color="green" />
    //       </div>
    //     );
    //   })}
    //   {ClinicalInfo.ClinicalCaptures.map((tag: any, i: number) => {
    //     return (
    //       <div key={i} className="mr-3 mt-1.5 inline-block">
    //         <Chip bold text={'He'} color="red" />
    //       </div>
    //     );
    //   })}
    //   {ClinicalInfo.HealthConditions.map((tag: any, i: number) => {
    //     return (
    //       <div key={i} className="mr-3 mt-1.5 inline-block">
    //         <Chip bold text={'Ho'} color="blue" />
    //       </div>
    //     );
    //   })}
    //   {ClinicalInfo.VisitLocations.map((tag: any, i: number) => {
    //     return (
    //       <div key={i} className="mr-3 mt-1.5 inline-block">
    //         <Chip bold text={'Haiya'} color="yellow" />
    //       </div>
    //     );
    //   })}
    // </div>
    <>
      <div className="mr-3 mt-1.5 inline-block">
        <Chip bold text={'Hi'} color="green" />
      </div>
      <div className="mr-3 mt-1.5 inline-block">
        <Chip bold text={'Haiya'} color="blue" />
      </div>
      <div className="mr-3 mt-1.5 inline-block">
        <Chip bold text={'Fuiyo'} color="red" />
      </div>
      <div className="mr-3 mt-1.5 inline-block">
        <Chip bold text={'Manhattan'} color="orange" />
      </div>
      <div className="mr-3 mt-1.5 inline-block">
        <Chip bold text={'Ugauga'} color="white" />
      </div>
    </>
  );

  return (
    <Navbar activeNav="Patient Engagement" activeSubNav="Patient Profile">
      <div className={`flex w-full flex-col`}>
        <PageHead
          headChildren={
            <div className="flex w-full items-center gap-6">
              <h1 className={HeadStyle}>Patient Discovery</h1>
              <div className="flex items-center gap-1.5">
                <AiOutlineCalendar />
                <p className="text-sm font-normal text-blackOcare">
                  Today - 16 May 23
                </p>
              </div>
              <Button
                type="outlined"
                text={`Save as Persona`}
                bold
                startIcon={<RiSaveLine className="text-blueOcare" size={16} />}
                shadow
                className="ml-auto"
              />
            </div>
          }
        >
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-wrap gap-2.5">{SelectedTagChips}</div>
          </div>
        </PageHead>
        {/* Page Content Head */}
        <div className="flex items-center p-3 lg:p-6">
          <p className="font-medium">{`${PatientCount} ${
            parseInt(PatientCount, 10) > 1 ? 'Results' : 'Result'
          }`}</p>
          <div className="ml-auto flex cursor-pointer items-center gap-1.5 text-blueOcare transition hover:underline active:text-blueOcare/50 active:no-underline">
            <TbFileDownload size={18} />
            <p className="font-normal underline-offset-2">Download</p>
          </div>
        </div>
        {/* Page Content */}
        <div className="flex flex-col px-3 lg:px-6">
          {message === 'loading' ? <LoadingCard /> : PatientList}
        </div>
        <div className="mb-6 flex justify-center">
          <Pagination
            totalPages={
              parseInt(PatientCount, 10) > 10
                ? Math.ceil(parseInt(PatientCount, 10) / 10)
                : 1
            }
            currentPage={currentPage}
            onPageChange={() => {}}
          />
        </div>
      </div>
    </Navbar>
  );
};

export default PatientDiscovery;
