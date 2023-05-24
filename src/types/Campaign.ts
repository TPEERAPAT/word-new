export interface CampaignSearchType {
  name: '';
  startDate: Date;
  endDate: Date;
  demographic: string[];
  clinical: string[];
  healthCondition: string[];
  location: string[];
}

export interface CampaignDataType {
  name: string;
  alias: string;
  description: string;
  cost: number;
  startDate: Date;
  endDate: Date;
  estimatePatient: number;
  expectValue: number;
  personaTag: CampaignDataPersonaTagType;
}

export interface CampaignDataPersonaTagType {
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
}

export interface Campaign {
  uuid: string;
  CampaignName: string;
  Progress: string;
  StartAvailabilityDate: string;
  EndAvailabilityDate: string;
  PersonaIDs: string[];
  CampaignTagIDs: string[];
  UserIDs: string[];
  Budget: number;
  ActivityIDs: string[];
}

export interface CampaignPayload {
  CampaignName: string | null;
  Progress: (string | undefined)[] | null;
  UserIDs: string[] | null;
  StartAvailabilityDate: string | null;
  EndAvailabilityDate: string | null;
}

export interface CampaignActivity {
  uuid: string;
  ActivityName: string;
  MediaType: string;
  TaskCompletion: number;
  Size: number;
  Delivered: number;
  Reach: number;
  CTA: number;
}

export interface CampaignDemographicAge {
  Min: string;
  Max: string;
}

export interface CampaignDemographicValueAddress {
  RegionIDs: number[];
  ProvinceIDs: number[];
  DistrictIDs: number[];
  SubDistrictIDs: number[];
}
export interface CampaignDemographic {
  Name: string;
  Value:
    | string
    | CampaignDemographicAge
    | CampaignDemographicValueAddress
    | null;
}

export interface CampaignPersona {
  Alias: string;
  CustomPersonaIDs: string[];
  ClinicalCaptureIDs: string[];
  HealthConditionIDs: string[];
  HealthPriorityIDs: string[];
  Demographic: CampaignDemographic[];
  PayorIDs: string[];
  OrganizationIDs: string[];
  VisitLocationIDs: string[];
  PersonaName: string;
  ShortDetail: string;
  StartValidityDate: string;
  EndValidityDate: string;
  Cost: number;
  uuid: string;
  CountPatients: number;
}

export interface Tag {
  uuid: string;
  CampaignTagName: string;
}

export interface PersonaLibrary {
  Group?: string;
  Name: string;
  Value: string;
  uuid: string;
}

export interface DemographicPersonaLibrary {
  Agreement: string;
  Average: string;
  Name: string;
  Office: string;
  Type: string;
  uuid: string;
}

export interface DemographicPersonaLibraryOrganization {
  Company: string;
  Department: string;
  Job_type1: string;
  Job_type2: string;
  Position: string;
  uuid: string;
}

export type GroupPersonaLibrary =
  | PersonaLibrary
  | DemographicPersonaLibrary
  | DemographicPersonaLibraryOrganization;

export interface CampaignPersonaLibrary {
  [key: string]: GroupPersonaLibrary[];
}

export interface CampaignUser {
  uuid: string;
  Email: string;
  FirstName: string;
  LastName: string;
}

export interface RectSelectOption {
  value: string;
  label: string;
}
