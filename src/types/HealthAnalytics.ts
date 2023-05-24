export type AgeRange = {
  Label: string;
  PatientCount: number;
};

export type Stage = {
  Label: string;
  PatientCount: number;
};

export type ConditionDetails = {
  Label: string;
  PatientCount: number;
};

export type Condition = {
  ConditionName: string;
  Stage?: Stage[];
  Details?: ConditionDetails[];
  TotalPatients: number;
};

export type Gender = {
  Label: string;
  PatientCount: number;
};

export type HealthStatus = {
  Label: string;
  PatientCount: number;
};

export type Payor = {
  Label: string;
  PatientCount: number;
};

export type DataObject = {
  AgeRange: AgeRange[];
  Condition: Condition[];
  Gender: Gender[];
  HealthStatus: HealthStatus[];
  Payor: Payor[];
};
