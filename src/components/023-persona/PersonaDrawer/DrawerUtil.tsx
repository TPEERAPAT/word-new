import Chip from '@components/Chip/Chip';
import { ShowToast } from '@components/Toast/OcareToast';
import type { FC } from 'react';
import { BiUser } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  RiClipboardLine,
  RiHeartPulseLine,
  RiUserSettingsLine,
} from 'react-icons/ri';

import type {
  BottomNavigationProps,
  EachPersona,
  InformationFormType,
  MenuType,
} from '#types/Persona';

export function ToUuidArray(selectedTags: any[]) {
  const uuidArray = selectedTags.map((item) => item.uuid);
  if (uuidArray.length === 0) {
    return null;
  }
  return uuidArray;
}

export async function handleSavePersona(
  informationFrom: InformationFormType,
  selectedDemographic: any,
  selectedHealthConditions: any,
  selectedClinicalCaptures: any,
  selectedVisitLocations: any,
  selectedCustomPersonas: any,
  hideModal: () => void,
  reload: () => void
) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const cleanDemographic = () => {
    const result = [...selectedDemographic];
    // Age
    if (result[1]?.Value.Max === 100 && result[1]?.Value.Min === 0) {
      result.splice(1, 1);
    }
    // Expense
    if (result[0]?.Value.Max === 100000 && result[0]?.Value.Min === 0) {
      result.splice(0, 1);
    }
    return result;
  };

  const raw = JSON.stringify({
    PersonaName: informationFrom.personaName,
    Alias: informationFrom.alias || '',
    ShortDetail: informationFrom.description || '',
    Cost: informationFrom.cost || '0',
    Demographic: cleanDemographic(),
    ClinicalCaptureIDs: ToUuidArray(selectedClinicalCaptures),
    HealthConditionIDs: ToUuidArray(selectedHealthConditions),
    HealthPriorityIDs: null,
    OrganizationIDs: null,
    PayorIDs: null,
    VisitLocationIDs: ToUuidArray(selectedVisitLocations),
    CustomPersonaIDs: ToUuidArray(selectedCustomPersonas),
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
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow' as RequestRedirect,
  };

  const response = await fetch('/api/personas', requestOptions);
  const data = await response.json();
  if (data.status === 'success') {
    hideModal();
    reload();
    setTimeout(() => {
      ShowToast('success', 'create persona success');
    }, 300);
  } else {
    hideModal();
    ShowToast('error', 'Haiya');
  }
}

export function EditInitDemograhpic(editForm: EachPersona) {
  let expense;
  let age;
  editForm.Demographic?.forEach((tag) => {
    if (tag.Name === 'Expense') {
      expense = tag.Value;
    } else if (tag.Name === 'Age') {
      age = tag.Value;
    }
  });
  const sortDemographic = [
    {
      Name: 'Expense',
      Value: expense || { Min: 0, Max: 100000 },
    },
    {
      Name: 'Age',
      Value: age || { Min: 0, Max: 100 },
    },
  ];
  editForm.Demographic?.forEach((tag) => {
    if (tag.Name === 'Gender') {
      sortDemographic.push(tag);
    }
  });
  return sortDemographic;
}

export function isLoosely(a: any, b: any) {
  return a.Value === b.Value && a.Name === b.Name && a.uuid === b.uuid;
}

export const MenuList: MenuType[] = [
  {
    name: 'Demographic',
    icon: BiUser,
    color: 'border-greenOcare',
    iconColor: 'text-greenOcare',
  },
  {
    name: 'Health Conditions',
    icon: RiClipboardLine,
    color: 'border-blueOcare',
    iconColor: 'text-blueOcare',
  },
  {
    name: 'Clinical Captures',
    icon: RiHeartPulseLine,
    color: 'border-redOcare',
    iconColor: 'text-redOcare',
  },
  {
    name: 'Visit Locations',
    icon: HiOutlineLocationMarker,
    color: 'border-orangeOcare',
    iconColor: 'text-orangeOcare',
  },
  {
    name: 'Custom Persona',
    icon: RiUserSettingsLine,
    color: 'border-black3',
    iconColor: 'text-black3',
  },
];

export const BottomNavigation: FC<BottomNavigationProps> = ({
  selectedMenu,
  setSelectedMenu,
}) => {
  return (
    <div className="flex gap-[6px] border-x-0 border-t-0 border-solid border-greyBorder">
      {MenuList.map((menu: any, i: number) => (
        <div
          key={i}
          onClick={() => setSelectedMenu(menu.name)}
          className={`
            ${
              selectedMenu === menu.name
                ? `border-b-2 border-solid ${menu.color} border-x-0 border-t-0 text-blackOcare`
                : 'border-0 text-greyDarkOcare'
            }
            flex cursor-pointer items-center justify-center py-[8px] transition hover:bg-greySemiLightOcare active:bg-blueOcareHover
          `}
        >
          <menu.icon
            className={`
            ${menu.iconColor} ${
              selectedMenu !== menu.name && 'opacity-50'
            } mr-[6px]
          `}
          />
          <p className="mr-[8px] text-sm font-normal">{menu.name}</p>
        </div>
      ))}
    </div>
  );
};

export const ValueLegend = () => {
  return (
    <div className="ml-auto flex gap-[20px]">
      <Chip color="green" text="Normal" />
      <Chip color="red" text="Abnormal" />
      <Chip color="orange" text="Borderline" />
    </div>
  );
};
