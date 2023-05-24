import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import useCampaignPersonaById from 'hooks/api/useCampaignPersonaById';
import useFetchFromLibraryPersona from 'hooks/api/useLibraryPersona';
import type { SetStateAction } from 'react';
import { Fragment, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';

import type {
  CampaignDemographicAge,
  CampaignDemographicValueAddress,
  DemographicPersonaLibrary,
  DemographicPersonaLibraryOrganization,
  PersonaLibrary,
} from '#types/Campaign';

import CampaignPersonaCaptures from './CampaignPersonaCaptures';
import CampaignPersonaDemographic from './CampaignPersonaDemographic';

interface Props {
  personaId: string;
  setEstimatedValuation: (value: SetStateAction<number>) => void;
  setEstimatedSize: (value: SetStateAction<number>) => void;
}

const CampaignPersonaLayout = ({
  personaId,
  setEstimatedValuation,
  setEstimatedSize,
}: Props) => {
  const [height, setHeight] = useState('40');
  const { data: personaLibrary } = useFetchFromLibraryPersona();
  const { data: persona } = useCampaignPersonaById(
    personaId,
    setEstimatedSize,
    setEstimatedValuation
  );

  const handleHeight = () => {
    if (height === 'auto') {
      setHeight('40');
    } else {
      setHeight('auto');
    }
  };

  if (!persona || !personaLibrary) return null;

  const filterOrganization = personaLibrary.Organizations?.filter((cus) => {
    if (persona.OrganizationIDs.find((per) => per === cus.uuid)) return true;
    return false;
  });

  const guardDemographicAge = (
    age: CampaignDemographicAge | CampaignDemographicValueAddress | null
  ): age is CampaignDemographicAge => {
    return (age as CampaignDemographicAge).Max !== undefined;
  };

  const personaDemographic = persona.Demographic?.map((demographic, index) => {
    if (!demographic.Value) {
      return (
        <Fragment key={index}>
          <Chip text="Male" bold />
          <Chip text="Female" bold />
        </Fragment>
      );
    }
    if (typeof demographic.Value === 'string')
      return <Chip key={index} text={demographic.Value} bold />;
    if (guardDemographicAge(demographic.Value))
      return (
        <Chip
          key={index}
          color="green"
          bold
          text={`${demographic.Name}: ${demographic.Value.Min}-${demographic.Value.Max}`}
        />
      );
    return null;
  });

  return (
    <div>
      <Card
        color="greySemiLightOcare"
        className="w-full place-self-start rounded-b-none rounded-e-none p-4"
      >
        <div className="flex items-center">
          <IoPersonOutline />
          <span className="ml-2">{persona.PersonaName}</span>
          <Chip text={persona.Alias} color="blue" className="ml-2" bold />
        </div>
        <AnimateHeight
          duration={500}
          height={height === 'auto' ? 'auto' : Number(height)}
        >
          <div className="relative my-2 flex flex-wrap gap-2">
            {personaDemographic}
            <CampaignPersonaCaptures
              capturesIds={persona.ClinicalCaptureIDs ?? []}
              dataCapture={
                (personaLibrary.ClinicalCaptures as PersonaLibrary[]) ?? []
              }
              color="red"
            />
            <CampaignPersonaCaptures
              capturesIds={persona.CustomPersonaIDs ?? []}
              dataCapture={
                (personaLibrary.CustomPersonas as PersonaLibrary[]) ?? []
              }
              color="white"
            />
            <CampaignPersonaCaptures
              capturesIds={persona.HealthConditionIDs ?? []}
              dataCapture={
                (personaLibrary.HealthConditions as PersonaLibrary[]) ?? []
              }
              color="blue"
            />
            <CampaignPersonaCaptures
              capturesIds={persona.HealthPriorityIDs ?? []}
              dataCapture={
                (personaLibrary.HealthPriorities as PersonaLibrary[]) ?? []
              }
              color="blue"
              show="value"
            />
            <CampaignPersonaCaptures
              capturesIds={persona.VisitLocationIDs ?? []}
              dataCapture={
                (personaLibrary.VisitLocations as PersonaLibrary[]) ?? []
              }
              color="yellow"
            />
            <CampaignPersonaDemographic
              capturesIds={persona.PayorIDs ?? []}
              dataCapture={
                (personaLibrary.Payors as DemographicPersonaLibrary[]) ?? []
              }
              color="green"
            />
            {filterOrganization?.map((org, index) => {
              return (
                <Fragment key={index}>
                  <Chip
                    color="green"
                    text={
                      (org as DemographicPersonaLibraryOrganization).Company
                    }
                    bold
                  />
                  <Chip
                    color="green"
                    text={
                      (org as DemographicPersonaLibraryOrganization).Department
                    }
                    bold
                  />
                  <Chip
                    color="green"
                    text={
                      (org as DemographicPersonaLibraryOrganization).Position
                    }
                    bold
                  />
                </Fragment>
              );
            })}
          </div>
        </AnimateHeight>
      </Card>

      <div
        className="flex cursor-pointer items-center justify-center rounded-b-lg bg-[#F2F2F7]"
        onClick={handleHeight}
      >
        {height === 'auto' ? <HiChevronUp /> : <HiChevronDown />}
        <span className="py-2 text-sm">
          Show {height === 'auto' ? 'less' : 'more'}
        </span>
      </div>
    </div>
  );
};

export default CampaignPersonaLayout;
