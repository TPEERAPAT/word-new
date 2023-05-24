import 'react-svg-map/lib/index.css';

import Thailand from '@assets/02-geograpHealth/ThailandSVG';
import React, { useState } from 'react';
import { SVGMap } from 'react-svg-map';

import mockData from './MockData/mockData';

interface IThailandMap {
  onBoxHealthHover: Function;
  onHoverInfo: Function;
  onHoverProvinceData: Function;
  onHoverProvince: Function;
}

const ThailandMap: React.FC<IThailandMap> = ({
  onBoxHealthHover,
  onHoverInfo,
  onHoverProvinceData,
  onHoverProvince,
}) => {
  const [boxHealthHover, setBoxHealthHover] = useState<boolean>(true);
  const [hoverProvince, setHoverProvince] = useState<string>('');
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
  const [hoverInfo, setHoverInfo] = useState({
    x: 0,
    y: 0,
    display: false,
  });
  const [hoverProvinceData, setHoverProvinceData] = useState(mockData[0]);

  // const provinceClass = (location: { name: string }) => {
  //   if (selectedProvinces[0].includes(location.name)) {
  //     if (location.name === hoverProvince) {
  //       return 'fill-mapPrimaryOcare';
  //     }
  //     return 'fill-mapSecondaryOcare';
  //   }
  //   return 'fill-mapNormalOcare';
  // };

  const handleMouseEnter = (event: any) => {
    setHoverInfo({
      x: event.clientX,
      y: event.clientY,
      display: true,
    });
  };

  const provinceHoverHandler = (event: {
    target: { ariaLabel: string; classList: any };
  }) => {
    if (selectedProvinces[0].includes(event.target.ariaLabel)) {
      if (event.target.ariaLabel !== hoverProvince) {
        setHoverProvinceData(
          mockData.filter((data) => data.name === event.target.ariaLabel)
            .length > 0
            ? mockData.filter((data) => data.name === event.target.ariaLabel)[0]
            : mockData[0]
        );
      }
      handleMouseEnter(event);
    }
    setHoverProvince(event.target.ariaLabel);
    setBoxHealthHover(false);
  };

  const handleMouseLeave = () => {
    setHoverInfo({
      x: 0,
      y: 0,
      display: false,
    });
  };

  const provinceHoverOutHandler = () => {
    handleMouseLeave();
    setBoxHealthHover(true);
  };

  onBoxHealthHover(boxHealthHover);
  onHoverInfo(hoverInfo);
  onHoverProvinceData(hoverProvinceData);
  onHoverProvince(hoverProvince);

  return (
    <SVGMap
      className="relative left-0 stroke-white stroke-3 outline-none sm:left-0 md:left-[90px] lg:left-[90px] xl:left-[90px]"
      map={Thailand}
      // locationClassName={provinceClass}
      onLocationMouseOver={provinceHoverHandler}
      onLocationMouseOut={provinceHoverOutHandler}
    />
  );
};

export default ThailandMap;
