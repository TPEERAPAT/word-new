import AddToCampaignDrawer from '@components/021-personaAnalytics/CampaignDrawer/AddToCampaignDrawer';
import Button from '@components/Button/Button';
import LoadingCard from '@components/Card/LoadingCard';
import DateRangeInput from '@components/Input/DateRangeInput';
import SearchInput from '@components/Input/SearchInput';
import RedModal from '@components/Modal/RedModal';
import Navbar from '@components/navbar/Navbar';
import { ShowToast } from '@components/Toast/OcareToast';
import PageHead, { HeadStyle } from '@components/Ui/PageHead';
import Pagination from '@components/Ui/Pagination';
import { useGetTagLibraryQuery } from '@redux/tagLibApi';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { TbFileDownload } from 'react-icons/tb';
import { LibraryToTag } from 'utils/PersonaUtil';

import type { EachPersona, ISearchResult } from '#types/Persona';

import TagInput from './InputPersona/TagInput';
import PersonaCard from './PersonaCard';
import CreatePersonaDrawer from './PersonaDrawer/CreatePersonaDrawer';
import EditPersonaModal from './PersonaDrawer/EditPersonaDrawer';

const PersonaLanding = () => {
  const [createPersonaModal, setCreatePersonaModal] = useState<boolean>(false);
  const [editPersonaModal, setEditPersonaModal] = useState<boolean>(false);
  const [addToCampaignModal, setAddToCampaignModal] = useState<boolean>(false);

  const [personaStartDateSearch, setPersonaStartDateSearch] =
    useState<any>(null);
  const [personaEndDateSearch, setPersonaEndDateSearch] = useState<any>(null);

  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  const [searchResult, setSearchResult] = useState<ISearchResult>({
    data: [],
    status: 'loading',
  });
  const [countPersona, setCountPersona] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deletePersonaUuid, setDeletePersonaUuid] = useState<string>('');
  const [searchPersonaName, setSearchPersonaName] = useState<string>('');
  const [editForm, setEditForm] = useState<EachPersona>({
    Alias: '',
    ClinicalCaptureIDs: null,
    Cost: null,
    CountPatients: 0,
    CustomPersonaIDs: null,
    Demographic: null,
    EndValidityDate: '',
    EndVisitDate: '',
    HealthPriorityIDs: null,
    HealthConditionIDs: null,
    PersonaName: '',
    ShortDetail: '',
    StartValidityDate: '',
    StartVisitDate: '',
    VisitLocationIDs: null,
    uuid: '',
  });

  function loadPersona() {
    fetch('/api/searchPersona', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        PersonaName: searchPersonaName.length > 0 ? searchPersonaName : null,
        ClinicalCaptures: null,
        VisitLocations: null,
        HealthConditions: null,
        Demographic: null,
        CampaignIds: null, // in development
        StartValidityDate: personaEndDateSearch
          ? personaStartDateSearch.toISOString().substring(0, 10)
          : null,
        EndValidityDate: personaEndDateSearch
          ? personaEndDateSearch.toISOString().substring(0, 10)
          : null,
        Page: page,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setCountPersona(res.CountPersona);
      })
      .catch(() => ShowToast('error', "can't load persona"))
      .finally(() => setIsPageLoading(false));
  }

  useEffect(() => {
    loadPersona();
  }, [page, searchPersonaName, personaStartDateSearch, personaEndDateSearch]);

  // get tag library to transform uuid to name

  const { data, isLoading } = useGetTagLibraryQuery();
  if (isLoading) {
    return <LoadingCard />;
  }
  if (!data) {
    return <div>Error</div>;
  }

  const tagLibrary = LibraryToTag(data.data);

  async function handleDeletePersona(uuid: string) {
    const response = await fetch(`/api/personas/${uuid}`, {
      method: 'DELETE',
    });
    const responseData = await response.json();
    if (responseData.status === 'success') {
      loadPersona();
      setDeleteModal(false);
      setTimeout(() => {
        ShowToast('success', 'delete persona success');
      }, 500);
    } else {
      ShowToast('error', 'delete persona failed');
    }
  }

  const PersonaNameList = searchResult.data.map((persona, i: number) => {
    return (
      <PersonaCard
        key={i}
        persona={persona}
        onClickAddToCampaign={() => setAddToCampaignModal(true)}
        onClickEditPersona={(personaIndex: number) => {
          setEditPersonaModal(true);
          setEditForm(searchResult.data[personaIndex] as EachPersona);
        }}
        onClickDeletePersona={() => {
          setDeleteModal(true);
          setDeletePersonaUuid(persona.uuid);
        }}
        personaIndex={i}
        tagLibrary={tagLibrary}
      />
    );
  });

  return (
    <>
      {createPersonaModal ? (
        <CreatePersonaDrawer
          hideModal={() => setCreatePersonaModal(false)}
          reload={() => loadPersona()}
          isVisible={createPersonaModal}
          tagResponse={data}
        />
      ) : null}

      {editPersonaModal ? (
        <EditPersonaModal
          hideModal={() => setEditPersonaModal(false)}
          reload={() => loadPersona()}
          isVisible={editPersonaModal}
          editForm={editForm}
          tagLibrary={tagLibrary}
          tagResponse={data}
        />
      ) : null}

      {addToCampaignModal ? (
        <AddToCampaignDrawer
          closeModal={() => setAddToCampaignModal(false)}
          isVisible={addToCampaignModal}
        />
      ) : null}

      {deleteModal && (
        <RedModal
          isOpen={deleteModal}
          icon={<RiDeleteBinLine className="fill-redOcare" size={66} />}
          title="ลบข้อมูล Persona"
          text="คุณต้องการลบข้อมูล Persona ใช่หรือไม่"
          cancel
          confirm={() => handleDeletePersona(deletePersonaUuid)}
          onClose={() => setDeleteModal(false)}
        />
      )}

      <Navbar activeNav="Clincal Explorer" activeSubNav="Persona">
        <div
          className={`flex ${
            createPersonaModal ||
            editPersonaModal ||
            deleteModal ||
            addToCampaignModal
              ? 'fixed'
              : null
          } w-full flex-col`}
        >
          {/* Page Header */}
          <PageHead
            headChildren={
              <div className="flex w-full items-center gap-6">
                <h1 className={HeadStyle}>Persona</h1>
                <Button
                  text={`Persona Design`}
                  bold
                  startIcon={<FaPlus className="text-white" size={10} />}
                  shadow
                  className="ml-auto"
                  onClick={() => {
                    setCreatePersonaModal(true);
                  }}
                />
              </div>
            }
          >
            <div className="flex gap-4">
              <SearchInput
                placeholder="ค้นหารายชื่อ"
                value={searchPersonaName}
                onChange={(e) => setSearchPersonaName(e.target.value)}
              />
              <TagInput placeholder="Select Tags" />
              <TagInput placeholder="Select Active Campaign" />
              <DateRangeInput
                placeholder="Select Date Range"
                startDate={personaStartDateSearch}
                endDate={personaEndDateSearch}
                onChange={(start: any, end: any) => {
                  setPersonaStartDateSearch(start);
                  setPersonaEndDateSearch(end);
                }}
                height={48}
              />
            </div>
          </PageHead>

          {/* Page Content Head */}
          <div className="flex items-center p-3 lg:p-6">
            <p className="font-medium">{`${countPersona} ${
              countPersona > 1 ? 'Results' : 'Result'
            }`}</p>
            <div className="ml-auto flex cursor-pointer items-center gap-1.5 text-blueOcare transition hover:underline active:text-blueOcare/50 active:no-underline">
              <TbFileDownload size={18} />
              <p className="font-normal underline-offset-2">Download</p>
            </div>
          </div>
          {/* Page Content */}
          <div className="px-3 lg:px-6">
            {isPageLoading ? <LoadingCard /> : PersonaNameList}
          </div>
          <div className="mb-6 flex justify-center">
            <Pagination
              totalPages={Math.ceil(countPersona / 10)}
              currentPage={page}
              onPageChange={setPage}
            />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default PersonaLanding;
