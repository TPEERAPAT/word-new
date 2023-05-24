export interface SubSectionArray {
  name: string;
  id: number;
  isChecked: boolean;
}

export interface ISubSection {
  name: string;
  id: number;
  selectAll: boolean;
  subSections: SubSectionArray[];
}

const subOneGov: ISubSection[] = [
  {
    name: 'Section 1',
    id: 1,
    selectAll: false,
    subSections: [
      { name: 'Sub Section 11', id: 11, isChecked: false },
      { name: 'Sub Section 12', id: 12, isChecked: false },
      { name: 'Sub Section 13', id: 13, isChecked: false },
      { name: 'Sub Section 14', id: 14, isChecked: false },
    ],
  },
  {
    name: 'Section 2',
    id: 2,
    selectAll: false,
    subSections: [
      { name: 'Sub Section 21', id: 21, isChecked: false },
      { name: 'Sub Section 22', id: 22, isChecked: false },
      { name: 'Sub Section 23', id: 23, isChecked: false },
      { name: 'Sub Section 24', id: 24, isChecked: false },
    ],
  },
  {
    name: 'Section 3',
    id: 3,
    selectAll: false,
    subSections: [
      { name: 'Sub Section 31', id: 31, isChecked: false },
      { name: 'Sub Section 32', id: 32, isChecked: false },
      { name: 'Sub Section 33', id: 33, isChecked: false },
      { name: 'Sub Section 34', id: 34, isChecked: false },
    ],
  },
  {
    name: 'Section 4',
    id: 4,
    selectAll: false,
    subSections: [
      { name: 'Sub Section 41', id: 41, isChecked: false },
      { name: 'Sub Section 42', id: 42, isChecked: false },
      { name: 'Sub Section 43', id: 43, isChecked: false },
      { name: 'Sub Section 44', id: 44, isChecked: false },
    ],
  },
];

export default subOneGov;
