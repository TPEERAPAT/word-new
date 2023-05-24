import React, { useState } from 'react';

import type { provinceData } from '#types/GeographicHealth';

import mockData from './MockData/mockData';
import provinceNameTH from './MockData/provincesNameTH';
import ProvinceHealthStatus from './ProvinceHealthStatus';

const sortingFunction = (a: provinceData, b: provinceData) => {
  const nameA: keyof typeof provinceNameTH =
    a.name as keyof typeof provinceNameTH;
  const nameB: keyof typeof provinceNameTH =
    b.name as keyof typeof provinceNameTH;
  return -1 * provinceNameTH[nameA].localeCompare(nameB, 'th');
};

const calculateProvinceGroup = () => {
  interface GroupProvince {
    dangerous: provinceData[];
    warn: provinceData[];
    good: provinceData[];
  }

  const result: GroupProvince = {
    dangerous: [],
    warn: [],
    good: [],
  };

  mockData.forEach((data) => {
    if (
      data.healthStatus.dangerous.amount >= data.healthStatus.warn.amount &&
      data.healthStatus.dangerous.amount >= data.healthStatus.good.amount
    ) {
      result.dangerous.push(data);
    } else if (
      data.healthStatus.warn.amount >= data.healthStatus.dangerous.amount &&
      data.healthStatus.warn.amount >= data.healthStatus.good.amount
    ) {
      result.warn.push(data);
    } else {
      result.good.push(data);
    }
  });

  return result;
};

const ProvinceGroup = () => {
  const selectedProvinces = useState<string[]>([
    'Chiang Mai',
    'Lamphun',
    'Lampang',
    'Uttaradit',
    'Phrae',
    'Nan',
    'Phayao',
    'Chiang Rai',
    'Mae Hong Son',
    'Nakhon Sawan',
    'Uthai Thani',
    'Kamphaeng Phet',
    'Tak',
    'Sukhothai',
    'Phitsanulok',
    'Phichit',
    'Phetchabun',
    'Bueng Kan',
    'Nong Khai',
    'Loei',
    'Nong Bua Lam Phu',
    'Udon Thani',
    'Sakon Nakhon',
    'Nakhon Phanom',
    'Mukdahan',
    'Kalasin',
    'Chaiyaphum',
    'Khon Kaen',
    'Maha Sarakham',
    'Roi Et',
    'Yasothon',
    'Amnat Charoen',
    'Ubon Ratchathani',
    'Si Sa Ket',
    'Surin',
    'Buriram',
    'Nakhon Ratchasima',
    'Bangkok',
    'Nakhon Pathom',
    'Nonthaburi',
    'Pathum Thani',
    'Samut Prakan',
    'Samut Sakhon',
    'Samut Songkhram',
    'Ang Thong',
    'Phra Nakhon Si Ayutthaya',
    'Chai Nat',
    'Lop Buri',
    'Nakhon Nayok',
    'Saraburi',
    'Sing Buri',
    'Kanchanaburi',
    'Phetchaburi',
    'Prachuap Khiri Khan',
    'Ratchaburi',
    'Suphan Buri',
    'Chachoengsao',
    'Chanthaburi',
    'Chon Buri',
    'Prachin Buri',
    'Rayong',
    'Sa Kaeo',
    'Trat',
    'Chumphon',
    'Nakhon Si Thammarat',
    'Narathiwat',
    'Pattaniนี',
    'Phatthalung',
    'Songkhla',
    'Surat Thani',
    'Yala',
    'Krabi',
    'Phangnga',
    'Phuket',
    'Ranong',
    'Satun',
    'Trang',
  ]);
  return (
    <div className="">
      {calculateProvinceGroup()
        .dangerous.filter((data) => selectedProvinces[0].includes(data.name))
        .sort(sortingFunction)
        .map((eachProvince, index) => (
          <ProvinceHealthStatus
            key={index}
            name={
              provinceNameTH[eachProvince.name as keyof typeof provinceNameTH]
            }
            percent={eachProvince.healthStatus.dangerous.percent}
            amount={eachProvince.healthStatus.dangerous.amount}
            color="blueDarkOcare"
          />
        ))}

      {calculateProvinceGroup()
        .warn.filter((data) => selectedProvinces[0].includes(data.name))
        .sort(sortingFunction)
        .map((eachProvince, index) => (
          <ProvinceHealthStatus
            key={index}
            name={
              provinceNameTH[eachProvince.name as keyof typeof provinceNameTH]
            }
            percent={eachProvince.healthStatus.warn.percent}
            amount={eachProvince.healthStatus.warn.amount}
            color="blueOcare"
          />
        ))}

      {calculateProvinceGroup()
        .good.filter((data) => selectedProvinces[0].includes(data.name))
        .sort(sortingFunction)
        .map((eachProvince, index) => (
          <ProvinceHealthStatus
            key={index}
            name={
              provinceNameTH[eachProvince.name as keyof typeof provinceNameTH]
            }
            percent={eachProvince.healthStatus.good.percent}
            amount={eachProvince.healthStatus.good.amount}
            color="seaBlueOcare"
          />
        ))}
    </div>
  );
};

export default ProvinceGroup;
