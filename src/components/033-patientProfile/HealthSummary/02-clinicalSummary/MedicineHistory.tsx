import Button from '@components/Button/Button';
import Card from '@components/Card/Card';
import { ShowToast } from '@components/Toast/OcareToast';
import React from 'react';
import { RiCapsuleFill, RiErrorWarningFill } from 'react-icons/ri';

import MedHistSubMed from './MedHistSubMed';

export const MockData = [
  {
    Name: 'Amoxicillin',
    Name_TH: 'กลุ่มยาปฏิชีวนะ',
    Detail: [
      {
        DateTime: '15 เม.ย. 2565',
        Value:
          'Amoxicillin 500 mg 1 แคปซูล ทาน 3 ครั้ง วันละ 1 ครั้ง หลังอาหาร',
        Location: 'โรงพยาบาลสมิติเวช สุขุมวิท 31',
        HospitalGroup: 'โรงพยาบาลสมิติเวช',
      },
      {
        DateTime: '19 เม.ย. 2565',
        Value: 'Amoxicillin + Clavulanate Tab 500 mg (1 เม็ด * 2 pc เช้าเย็น',
        Location: 'คลินิกไผ่ล้อม',
        HospitalGroup: 'โรงพยาบาลมหาราช',
      },
    ],
  },
  {
    Name: 'Glipizide',
    Name_TH: 'กลุ่มยาเบาหวาน',
    Detail: [
      {
        DateTime: '9 ต.ค. 2562',
        Value: 'Glipizide 5 mg 1 cap * 2 pc',
        Location: 'Ocare Manhattan',
        HospitalGroup: 'Ocare Health Hub',
      },
      {
        DateTime: '4 ธ.ค. 2564',
        Value: 'Glipizide 5 mg 1 แคปซูล ทาน 3 ครั้ง วันละ 1 ครั้ง ก่อนอาหาร',
        Location: 'Ocare London',
        HospitalGroup: 'Ocare Health Hub',
      },
      {
        DateTime: '15 เม.ย. 2565',
        Value: 'Glipizide 5 mg 1 แคปซูล ทาน 3 ครั้ง วันละ 1 ครั้ง ก่อนอาหาร',
        Location: 'โรงพยาบาลสมิติเวช สุขุมวิท 31',
        HospitalGroup: 'โรงพยาบาลสมิติเวช',
      },
      {
        DateTime: '29 เม.ย. 2565',
        Value: 'Glipizide 5 mg 1 แคปซูล ทาน 3 ครั้ง วันละ 1 ครั้ง ก่อนอาหาร',
        Location: 'คลินิกไผ่ล้อม',
        HospitalGroup: 'โรงพยาบาลมหาราช',
      },
    ],
  },
];

// eslint-disable-next-line unused-imports/no-unused-vars
const MedicationHistory = ({ data }: { data: any }) => {
  // const MedData = data;
  const MedData = MockData;

  const MedicineIcon = {
    Normal: <RiCapsuleFill size={20} className="text-blueOcare" />,
    Danger: (
      <>
        <div className="absolute ml-[1px] mt-[1px] flex h-[9px] w-[9px] rounded-full bg-white">
          <RiErrorWarningFill size={9} className="text-orangeOcare" />
        </div>
        <RiCapsuleFill size={20} className="text-blueOcare" />
      </>
    ),
  };

  const backgroundColor = ['bg-greyOcare/10', 'bg-orangeOcare/10'];

  const medicineDetail =
    MedData.length > 0 ? (
      MedData.map((metaMed: any, i: number) => {
        return (
          <div key={i} className="mb-6 flex flex-col">
            {/* meta medicine */}
            <div className="mb-[18px] flex gap-[6px] px-9">
              {i % 2 === 0 ? MedicineIcon.Normal : MedicineIcon.Danger}
              <div>
                <h2 className="text-base font-semibold">{metaMed.Name}</h2>
                <h2 className="text-base font-normal">{metaMed.Name_TH}</h2>
              </div>
            </div>
            {/* sub medicine */}
            <MedHistSubMed
              subMed={metaMed.Detail}
              color={backgroundColor[i % 2] as string}
            />
          </div>
        );
      })
    ) : (
      <p className="mb-3 text-center text-sm">{`patient don't have medication history yet`}</p>
    );

  return (
    <div className="px-[18px] pb-[18px]">
      <Card className="pb-3 pt-6 sm:rounded-lg sm:p-6" shadow={true}>
        {/* head */}
        <div className="mb-6 px-6">
          <div className="mb-6 flex items-center">
            <h2 className="text-lg font-medium">Medication History</h2>
            <Button
              type="outlined"
              text="ดูข้อมูล"
              className="ml-auto max-h-[36px] max-w-[71px]"
              onClick={() => ShowToast('info', 'Coming Soon')}
            />
          </div>
          <div className="h-[1px] w-full bg-greyLightOcare" />
        </div>
        {medicineDetail}
      </Card>
    </div>
  );
};

export default MedicationHistory;
