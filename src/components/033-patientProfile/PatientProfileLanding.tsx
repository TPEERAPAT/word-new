import { ShowToast } from '@components/Toast/OcareToast';
import type { KeyboardEvent } from 'react';
import { useState } from 'react';

import type { SearchKeywordResult } from '#types/PatientProfile';

import Navbar from '../navbar/Navbar';
import PatientPortal from './PatientPortal';
import SearchResult from './SearchResult';

const PatientProfileLanding = () => {
  const [inputData, setInputData] = useState({
    idOrName: '',
    province: '',
    organization: '',
    department: '',
  });

  const [searchResults, setSearchResults] =
    useState<SearchKeywordResult | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  function handleClickSearch() {
    if (inputData.idOrName !== '') {
      setIsLoading(true);
      fetch('/api/patient-profile/search-keyword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          SearchText: inputData.idOrName,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setSearchResults(res);
        })
        .catch(() =>
          ShowToast('error', 'Cannot search from server please contract Ocare')
        )
        .finally(() => setIsLoading(false));
    }
  }

  function handleKeyDownEnter(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const element = document.getElementById('search-button');
      if (element) {
        element.click();
      }
    }
  }

  return (
    <Navbar activeNav="Patient Engagement" activeSubNav="Patient Profile">
      {searchResults ? (
        <SearchResult
          inputData={inputData}
          setInputData={setInputData}
          handleKeyDownEnter={handleKeyDownEnter}
          handleClickSearch={handleClickSearch}
          isPageLoading={isLoading}
          searchResults={searchResults}
        />
      ) : (
        <PatientPortal
          inputData={inputData}
          setInputData={setInputData}
          handleKeyDownEnter={handleKeyDownEnter}
          handleClickSearch={handleClickSearch}
          isLoading={isLoading}
        />
      )}
    </Navbar>
  );
};

export default PatientProfileLanding;
