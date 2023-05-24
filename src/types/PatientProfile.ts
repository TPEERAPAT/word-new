// Patient Portal

export type PatientData = {
  ClinicalInfo: any; // delete later : waiting for API schema
  CountVisits: number;
  PatientInfo: {
    Age: string;
    Birthdate: string;
    CellPhone: string;
    Email: string | null;
    FirstName: string;
    LastName: string;
    Gender: 'Male' | 'Female';
    HN: string;
  };
  DemographicInfo: {
    Demographic: {
      OrganizationID: string;
      PayorIDs: string[];
    };
    VisitLocationIDs: string[];
  };
  uuid: string;
};

export type SearchKeywordResult = {
  patientsData: PatientData[];
  CountPatients: number;
};

// Health Summary

export interface HealthSummaryProps {
  data: { [key: string]: any };
  thirdParty?: boolean;
}
// export interface SubMedicineProps {
//   DateTime: string;
//   Value: string;
//   Location: string;
// }

// export interface MedicineProps {
//   Name: string;
//   Name_EN: string;
//   Name_TH: string;
//   Ref: string;
//   Stage: string;
//   Value: string;
//   Period: string[];
//   Detail: SubMedicineProps[];
// }

// export interface MedicationInfoProps {
//   LineItem: MedicineProps[];
// }
