export interface TagWithGroup {
  Group: string;
  Name: string;
  Value: string;
  uuid: string;
}

export interface TagNoGroup {
  Name: string;
  Value: string;
  uuid: string;
}

export interface PersonaSearchType {
  demographic: {
    male: boolean;
    female: boolean;
    age: string;
    expense: string;
    address: string[];
    payor: string[];
  };
  clinical: string[];
  healthCondition: string[];
  location: string[];
  startDate: Date;
  endDate: Date;
}

export interface InformationFormType {
  personaName: string;
  cost: number | null;
  alias: string;
  description: string;
  validityStartDate: Date | null;
  validityEndDate: Date | null;
  visitStartDate: Date | null;
  visitEndDate: Date | null;
}

export interface CreatePersonaDrawerProps {
  hideModal: () => void;
  reload: () => void;
  isVisible: boolean;
  tagResponse: TagResponse;
}

export type SelectedMenuType =
  | 'Demographic'
  | 'Clinical Captures'
  | 'Health Conditions'
  | 'Visit Locations'
  | 'Custom Persona';

export interface MenuType {
  name: SelectedMenuType;
  icon: any;
  color: string;
  iconColor: string;
}

export type BottomNavigationProps = {
  selectedMenu: SelectedMenuType;
  setSelectedMenu: React.Dispatch<React.SetStateAction<SelectedMenuType>>;
};

type Label = {
  en: string;
  th: string;
};

export type DemographicTag = {
  Name: 'Gender' | 'Age' | 'Expense';
  Value: 'Female' | 'Male' | { min: number; max: number };
};

export type ClinicalCapture = {
  Group: string;
  Label: Label;
  Name: string;
  Ref: string;
  Stage: string;
  Value: string;
  uuid: string;
};

export type CustomPersona = {
  Group: string;
  Name: string;
  Value: string;
  uuid: string;
};

export type HealthConditionDetail =
  | {
      cholestorol: string;
      hdl: string;
      ldl: string;
      triglyceride: string;
    }
  | string;

export type HealthConditionStage =
  | {
      en: string;
      th: string;
    }
  | string;

export type HealthCondition = {
  Detail: HealthConditionDetail;
  Group: string;
  Label: Label;
  Name: string;
  Ref: string;
  Stage: HealthConditionStage;
  Value: string;
  uuid: string;
};

export type HealthPriority = {
  Label: Label;
  Name: string;
  Value: string;
  uuid: string;
};

export type Organization = {
  Company: string;
  Department: string;
  Job_type1: string;
  Job_type2: string;
  Position: string;
  uuid: string;
};

export type Payor = {
  Agreement: string;
  Average: string;
  Name: string;
  Office: string;
  Type: string;
  uuid: string;
};

export type VisitLocation = {
  Label: Label;
  Name: string;
};

export type TagData = {
  ClinicalCaptures: ClinicalCapture[];
  CustomPersonas: CustomPersona[];
  HealthConditions: HealthCondition[];
  HealthPriorities: HealthPriority[];
  Organizations: Organization[];
  Payors: Payor[];
  VisitLocations: VisitLocation[];
};

export type TagResponse = {
  data: TagData;
  status: string;
};

export type UuidToTag<T> = {
  [key: string]: T[];
};

export interface TagLibrary {
  ClinicalCaptures: UuidToTag<ClinicalCapture>;
  CustomPersona: UuidToTag<CustomPersona>;
  HealthCondition: UuidToTag<HealthCondition>;
  HealthPriorities: UuidToTag<HealthPriority>;
  Organizations: UuidToTag<Organization>;
  Payors: UuidToTag<Payor>;
  VisitLocations: UuidToTag<VisitLocation>;
}

export interface EditModalProps {
  hideModal: () => void;
  reload: () => void;
  editUUID: string;
  personaName: string;
  cost: number | null;
  startValidityDate: string | null;
  endValidityDate: string | null;
  alias: string | null;
  description: string | null;
  isVisible?: boolean;
}

export interface EachPersona {
  Alias: string;
  ClinicalCaptureIDs: string[] | null;
  Cost: number | null;
  CountPatients: number;
  CustomPersonaIDs: string[] | null;
  Demographic:
    | {
        Name: 'Gender' | 'Age' | 'Expense';
        Value: any;
      }[]
    | null;
  EndValidityDate: string;
  EndVisitDate: string;
  HealthPriorityIDs: string[] | null;
  HealthConditionIDs: string[] | null;
  PersonaName: string;
  ShortDetail: string;
  StartValidityDate: string;
  StartVisitDate: string;
  VisitLocationIDs: string[] | null;
  uuid: string;
}

export interface ISearchResult {
  data: EachPersona[];
  status: string;
}
