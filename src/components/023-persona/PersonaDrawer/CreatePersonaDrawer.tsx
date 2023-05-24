import Button from '@components/Button/Button';
import Drawer from '@components/Drawer/Drawer';
import DateRangeInput from '@components/Input/DateRangeInput';
import NewTextInput from '@components/Input/NewTextInput';
import TextAreaInput from '@components/Input/TextAreaInput';
import { ShowToast } from '@components/Toast/OcareToast';
import DisplayBox from '@components/Ui/DisplayBox';
import type { FC } from 'react';
import React, { useState } from 'react';

import type {
  CreatePersonaDrawerProps,
  InformationFormType,
  SelectedMenuType,
  TagNoGroup,
  TagWithGroup,
} from '#types/Persona';

import ClinicalCaptureMenu from '../PersonaMenu/ClinicalCapturesMenu';
import CustomPersonaMenu from '../PersonaMenu/CustomPersonaMenu';
import DemographicMenu from '../PersonaMenu/DemographicMenu';
import HealthConditionsMenu from '../PersonaMenu/HealthConditionMenu';
import VisitLocationsMenu from '../PersonaMenu/VisitLocationsMenu';
import { BottomNavigation, handleSavePersona } from './DrawerUtil';

const CreatePersonaDrawer: FC<CreatePersonaDrawerProps> = ({
  hideModal,
  reload,
  isVisible,
  tagResponse,
}) => {
  const [informationFrom, setInformationFrom] = useState<InformationFormType>({
    personaName: '',
    cost: null,
    alias: '',
    description: '',
    validityStartDate: null,
    validityEndDate: null,
    visitStartDate: null,
    visitEndDate: null,
  });

  const [selectedMenu, setSelectedMenu] =
    useState<SelectedMenuType>('Demographic');

  const [selectedDemographic, setSelectedDemographic] = useState([
    {
      Name: 'Expense',
      Value: {
        Max: 100000,
        Min: 0,
      },
    },
    {
      Name: 'Age',
      Value: {
        Max: 100,
        Min: 0,
      },
    },
  ]);

  const [selectedHealthConditions, setSelectedHealthConditions] = useState<
    TagWithGroup[]
  >([]);

  const [selectedClinicalCaptures, setSelectedClinicalCaptures] = useState<
    TagWithGroup[]
  >([]);

  const [selectedVisitLocations, setSelectedVisitLocations] = useState<
    TagNoGroup[]
  >([]);

  const [selectedCustomPersonas, setSelectedCustomPersonas] = useState<
    TagNoGroup[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  const [alertRequired, setAlertRequired] = useState({
    personaName: false,
  });

  function handleVisitDateRange(start: Date, end: Date): void {
    setInformationFrom({
      ...informationFrom,
      visitStartDate: start,
      visitEndDate: end,
    });
  }

  return (
    <Drawer hideDrawer={hideModal} title="Create Persona" display={isVisible}>
      {/* Information */}
      <div>
        <div className="mb-3 mt-4 text-sm font-semibold">{`Information`}</div>
        <div className="flex w-full gap-6">
          {/* Left Info */}
          <div className="flex w-full flex-col gap-[16px]">
            <NewTextInput
              legend="Persona Name"
              placeholder="Insert Persona Name"
              value={informationFrom.personaName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setInformationFrom({
                  ...informationFrom,
                  personaName: event.target.value,
                })
              }
              required
              alertRequired={alertRequired.personaName}
            />
            <NewTextInput
              legend="Alias"
              placeholder="Insert Alias"
              value={informationFrom.alias}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setInformationFrom({
                  ...informationFrom,
                  alias: event.target.value,
                })
              }
            />
            <DisplayBox header="Visit Date Range">
              <DateRangeInput
                placeholder="Select Date Range"
                startDate={informationFrom.visitStartDate}
                endDate={informationFrom.visitEndDate}
                onChange={handleVisitDateRange}
                height={48}
              />
            </DisplayBox>
          </div>
          {/* Right Info */}
          <div className="flex w-full flex-col gap-[16px]">
            <DisplayBox header="Description">
              <TextAreaInput
                placeholder="Insert Description"
                value={informationFrom.description}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setInformationFrom({
                    ...informationFrom,
                    description: event.target.value,
                  })
                }
              />
            </DisplayBox>
          </div>
        </div>
      </div>

      {/* Person Tag */}
      <div className="mb-6">
        <div className="mb-3 mt-4 text-sm font-semibold">{`Persona Tag`}</div>
        {/* <BottomNavigation /> */}
        <BottomNavigation
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
        <DemographicMenu
          display={selectedMenu === 'Demographic'}
          selectedTags={selectedDemographic}
          setSelectedTags={setSelectedDemographic}
        />
        <HealthConditionsMenu
          display={selectedMenu === 'Health Conditions'}
          selectedConditionTags={selectedHealthConditions}
          setSelectedConditionTags={setSelectedHealthConditions}
          healthConditionTags={tagResponse.data.HealthConditions}
        />
        <ClinicalCaptureMenu
          display={selectedMenu === 'Clinical Captures'}
          selectedTags={selectedClinicalCaptures}
          setSelectedTags={setSelectedClinicalCaptures}
          tagLibrary={tagResponse.data.ClinicalCaptures}
        />
        <VisitLocationsMenu
          display={selectedMenu === 'Visit Locations'}
          selectedTags={selectedVisitLocations}
          setSelectedTags={setSelectedVisitLocations}
          tagLibrary={tagResponse.data.VisitLocations}
        />
        <CustomPersonaMenu
          display={selectedMenu === 'Custom Persona'}
          selectedTags={selectedCustomPersonas}
          setSelectedTags={setSelectedCustomPersonas}
          tagLibrary={tagResponse.data.CustomPersonas}
        />
      </div>

      {/* Bottom button */}
      <div className="flex gap-4">
        <Button
          type="outlined"
          text="Preview"
          bold
          size="full"
          onClick={() => ShowToast('info', 'Developing')}
        />
        <Button
          text="Save Persona"
          bold
          size="full"
          onClick={async () => {
            if (informationFrom.personaName === '') {
              setAlertRequired({
                ...alertRequired,
                personaName: true,
              });
              ShowToast('error', 'please fill persona name');
              window.scrollTo(0, 0);
            } else {
              setIsLoading(true);
              await handleSavePersona(
                informationFrom,
                selectedDemographic,
                selectedHealthConditions,
                selectedClinicalCaptures,
                selectedVisitLocations,
                selectedCustomPersonas,
                hideModal,
                reload
              );
              setIsLoading(false);
            }
          }}
          isLoading={isLoading}
        />
      </div>
    </Drawer>
  );
};

export default CreatePersonaDrawer;
