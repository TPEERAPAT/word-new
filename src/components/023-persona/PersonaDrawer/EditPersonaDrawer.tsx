import {
  BottomNavigation,
  EditInitDemograhpic,
} from '@components/023-persona/PersonaDrawer/DrawerUtil';
import Button from '@components/Button/Button';
import Drawer from '@components/Drawer/Drawer';
import DateRangeInput from '@components/Input/DateRangeInput';
import NewTextInput from '@components/Input/NewTextInput';
import TextAreaInput from '@components/Input/TextAreaInput';
import Modal from '@components/Modal/Modal';
import { ShowToast } from '@components/Toast/OcareToast';
import DisplayBox from '@components/Ui/DisplayBox';
import type { FC } from 'react';
import React, { useState } from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';

import type {
  EachPersona,
  InformationFormType,
  SelectedMenuType,
  TagNoGroup,
  TagResponse,
  TagWithGroup,
} from '#types/Persona';

import ClinicalCaptureMenu from '../PersonaMenu/ClinicalCapturesMenu';
import CustomPersonaMenu from '../PersonaMenu/CustomPersonaMenu';
import DemographicMenu from '../PersonaMenu/DemographicMenu';
import HealthConditionsMenu from '../PersonaMenu/HealthConditionMenu';
import VisitLocationsMenu from '../PersonaMenu/VisitLocationsMenu';

interface EditModalProps {
  hideModal: () => void;
  reload: () => void;
  isVisible: boolean;
  editForm: EachPersona;
  tagLibrary: any;
  tagResponse: TagResponse;
}

const EditPerosnaModal: FC<EditModalProps> = ({
  hideModal,
  reload,
  isVisible,
  editForm,
  tagLibrary,
  tagResponse,
}) => {
  const [informationFrom, setInformationFrom] = useState<InformationFormType>({
    personaName: editForm.PersonaName,
    cost: editForm.Cost,
    alias: editForm.Alias,
    description: editForm.ShortDetail,
    validityStartDate: editForm.StartValidityDate
      ? new Date(editForm.StartValidityDate)
      : null,
    validityEndDate: editForm.EndValidityDate
      ? new Date(editForm.EndValidityDate)
      : null,
    visitStartDate: editForm.StartVisitDate
      ? new Date(editForm.StartVisitDate)
      : null,
    visitEndDate: editForm.EndVisitDate
      ? new Date(editForm.EndVisitDate)
      : null,
  });

  const [alertRequired, setAlertRequired] = useState({
    personaName: false,
  });

  const [selectedMenu, setSelectedMenu] =
    useState<SelectedMenuType>('Demographic');

  const [selectedDemographic, setSelectedDemographic] = useState(
    EditInitDemograhpic(editForm)
  );

  function UuidArrayToObject(uuidArray: string[] | null, attribute: string) {
    if (!uuidArray) return [];
    const result: any[] = [];
    uuidArray.forEach((uuid: string) => {
      result.push(tagLibrary[attribute][uuid]);
    });
    return result;
  }

  const [selectedHealthConditions, setSelectedHealthConditions] = useState<
    TagWithGroup[]
  >(
    UuidArrayToObject(
      editForm.HealthConditionIDs,
      'HealthCondition'
    ) as TagWithGroup[]
  );

  const [selectedClinicalCaptures, setSelectedClinicalCaptures] = useState<
    TagWithGroup[]
  >(
    UuidArrayToObject(
      editForm.ClinicalCaptureIDs,
      'ClinicalCapture'
    ) as TagWithGroup[]
  );

  const [selectedVisitLocations, setSelectedVisitLocations] = useState<
    TagNoGroup[]
  >(
    UuidArrayToObject(
      editForm.VisitLocationIDs,
      'VisitLocation'
    ) as TagNoGroup[]
  );

  const [selectedCustomPersona, setSelectedCustomPersona] = useState<
    TagNoGroup[]
  >(
    UuidArrayToObject(
      editForm.CustomPersonaIDs,
      'CustomPersona'
    ) as TagNoGroup[]
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmModal, setConfirmModal] = useState<boolean>(false);

  function handleVisitDateRange(start: Date, end: Date): void {
    setInformationFrom({
      ...informationFrom,
      visitStartDate: start,
      visitEndDate: end,
    });
  }

  return (
    <>
      {confirmModal && (
        <Modal
          isOpen={confirmModal}
          icon={<IoAlertCircleOutline className="text-blueOcare" size={66} />}
          title="แก้ไขข้อมูล Persona"
          text="คุณต้องการแก้ไขข้อมูล Persona ใช่หรือไม่"
          cancel
          confirm={async () => {
            setIsLoading(true);
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            const raw = JSON.stringify({
              PersonaName: informationFrom.personaName,
              Alias: informationFrom.alias,
              ShortDetail: informationFrom.description,
              Cost: informationFrom.cost,
              StartValidityDate: informationFrom.validityStartDate
                ? informationFrom.validityStartDate.toISOString().split('T')[0]
                : null,
              EndValidityDate: informationFrom.validityEndDate
                ? informationFrom.validityEndDate.toISOString().split('T')[0]
                : null,
              StartVisitDate: informationFrom.visitStartDate
                ? informationFrom.visitStartDate.toISOString().split('T')[0]
                : null,
              EndVisitDate: informationFrom.visitEndDate
                ? informationFrom.visitEndDate.toISOString().split('T')[0]
                : null,
              Demographic: selectedDemographic,
              HealthPriorityIDs: null,
              HealthConditionIDs: selectedHealthConditions.map(
                (tag: TagWithGroup) => tag.uuid
              ),
              ClinicalCaptureIDs: selectedClinicalCaptures.map(
                (tag: TagWithGroup) => tag.uuid
              ),
              VisitLocationIDs: selectedVisitLocations.map(
                (tag: TagNoGroup) => tag.uuid
              ),
              CustomPersonaIDs: selectedCustomPersona.map(
                (tag: TagNoGroup) => tag.uuid
              ),
            });

            const requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: raw,
              redirect: 'follow' as RequestRedirect,
            };

            try {
              const response = await fetch(
                `/api/personas/${editForm.uuid}`,
                requestOptions
              );
              const data = await response.json();
              if (data.status === 'success') {
                hideModal();
                ShowToast('success', 'Edit Persona Success');
                reload();
              } else {
                hideModal();
                ShowToast('error', 'Edit Persona Failed');
              }
            } catch (error) {
              hideModal();
              ShowToast('error', 'Failed to fetch');
            }
          }}
          onClose={() => setConfirmModal(false)}
          isLoading={isLoading}
        />
      )}
      <Drawer hideDrawer={hideModal} title="Edit Persona" display={isVisible}>
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
            selectedTags={selectedCustomPersona}
            setSelectedTags={setSelectedCustomPersona}
            tagLibrary={tagResponse.data.CustomPersonas}
          />
        </div>

        {/* Visit Date Range */}
        <div className="mb-3 mt-auto text-sm font-semibold">
          {`Visit Date Range`}
        </div>
        <div className="mb-6 w-1/2 pr-2">
          <DateRangeInput
            placeholder="Select Date Range"
            startDate={informationFrom.visitStartDate}
            endDate={informationFrom.visitEndDate}
            onChange={handleVisitDateRange}
            height={48}
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
            onClick={() => {
              if (informationFrom.personaName === '') {
                setAlertRequired({
                  ...alertRequired,
                  personaName: true,
                });
                ShowToast('error', 'please fill persona name');
                window.scrollTo(0, 0);
              } else {
                setConfirmModal(true);
              }
            }}
          />
        </div>
      </Drawer>
    </>
  );
};

export default EditPerosnaModal;
