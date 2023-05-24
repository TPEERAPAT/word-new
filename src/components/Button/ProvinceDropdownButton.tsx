import DropdownGroupInput from '@components/Input/DropdownGroupInput';
import type { FC } from 'react';

interface ProvinceDropdownButtonProps {
  label: string;
  value: string[];
  onChangeHandler: Function;
}

const ProvinceDropdownButton: FC<ProvinceDropdownButtonProps> = ({
  label,
  value,
  onChangeHandler,
}) => {
  const provinceOption = {
    // 17 Province
    Northern: [
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
    ],
    // 20 Province
    Northeast: [
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
    ],
    // 7 Province
    Metropolitan: [
      'Bangkok',
      'Nakhon Pathom',
      'Nonthaburi',
      'Pathum Thani',
      'Samut Prakan',
      'Samut Sakhon',
      'Samut Songkhram',
    ],
    // 7 Province
    Central: [
      'Ang Thong',
      'Phra Nakhon Si Ayutthaya',
      'Chai Nat',
      'Lop Buri',
      'Nakhon Nayok',
      'Saraburi',
      'Sing Buri',
    ],
    // 5 Province
    Western: [
      'Kanchanaburi',
      'Phetchaburi',
      'Prachuap Khiri Khan',
      'Ratchaburi',
      'Suphan Buri',
    ],
    // 7 Province
    Eastern: [
      'Chachoengsao',
      'Chanthaburi',
      'Chon Buri',
      'Prachin Buri',
      'Rayong',
      'Sa Kaeo',
      'Trat',
    ],
    // 14 Province
    South: [
      'Chumphon',
      'Nakhon Si Thammarat',
      'Narathiwat',
      'Pattani',
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
    ],
  };

  return (
    <>
      <DropdownGroupInput
        label={label}
        options={provinceOption}
        value={value}
        onChangeHandler={onChangeHandler}
      />
    </>
  );
};

export default ProvinceDropdownButton;
