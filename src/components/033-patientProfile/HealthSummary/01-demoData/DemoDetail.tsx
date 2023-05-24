import React from 'react';

const DemoDetail = ({ data }: { data: any }) => {
  const patientGender = () => {
    if (data.Gender === '') {
      return '-';
    }
    if (data.Gender === 'Male') {
      return 'ชาย';
    }
    if (data.Gender === 'Female') {
      return 'หญิง';
    }
    return data.Gender;
  };

  return (
    <div className="mx-6">
      <div className="mb-6 mr-32 inline-block">
        <h3 className="mb-1.5 text-sm text-greyOcare">หมายเลขบัตรประชาชน</h3>
        <p className="font-normal">
          {data.IdenticalNumber === '' ? '-' : data.IdenticalNumber}
        </p>
      </div>
      <div className="mb-6 mr-32 inline-block">
        <h3 className="mb-1.5 text-sm text-greyOcare">วันเดือนปีเกิด</h3>
        <p className="font-normal">
          {data.Birthdate === '' ? '-' : data.Birthdate}
        </p>
      </div>
      <div className="mb-6 mr-32 inline-block">
        <h3 className="mb-1.5 text-sm text-greyOcare">อายุ</h3>
        <p className="font-normal">{data.Age === '' ? '-' : data.Age} ปี</p>
      </div>
      <div className="mb-6 mr-32 inline-block">
        <h3 className="mb-1.5 text-sm text-greyOcare">เพศ</h3>
        <p className="font-normal">{patientGender()}</p>
      </div>
      <div className="mb-6 mr-32 inline-block">
        <h3 className="mb-1.5 text-sm text-greyOcare">เชื้อชาติ</h3>
        <p className="font-normal">
          {data.Address.nationality_id === ''
            ? '-'
            : data.Address.nationality_id}
        </p>
      </div>
      <div className="mb-6 mr-32 inline-block">
        <h3 className="mb-1.5 text-sm text-greyOcare">เบอร์โทรศัพท์</h3>
        <p className="font-normal">
          {data.CellPhone === '' ? '-' : data.CellPhone}
        </p>
      </div>
      <div className="mb-6 mr-32 inline-block">
        <h3 className="mb-1.5 text-sm text-greyOcare">อีเมล์</h3>
        <p className="font-normal">{data.Email === '' ? '-' : data.Email}</p>
      </div>
      <div className="mb-6 mr-32 inline-block">
        <h3 className="mb-1.5 text-sm text-greyOcare">สิทธิการรักษา</h3>
        {/* <p>{data.Payer}</p> */}
        <p className="font-normal">???</p>
      </div>
      <div className="mb-6 mr-32 inline-block">
        <h3 className="mb-1.5 text-sm text-greyOcare">ที่อยู่</h3>
        <p className="font-normal">
          {data.Address.full_address === '' ? '-' : data.Address.full_address}
        </p>
      </div>
    </div>
  );
};

export default DemoDetail;
