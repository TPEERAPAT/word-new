export interface MainGov {
  name: string;
  id: number;
  isChecked: boolean;
}

const mainGov: MainGov[] = [
  {
    name: 'Section 1',
    id: 1,
    isChecked: false,
  },
  {
    name: 'Section 2',
    id: 2,
    isChecked: false,
  },
  {
    name: 'Section 3',
    id: 3,
    isChecked: false,
  },
  {
    name: 'Section 4',
    id: 4,
    isChecked: false,
  },
];

export default mainGov;
