import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import Card from '@components/Card/Card';
import { Resizable } from 're-resizable';
import { RiChatQuoteLine } from 'react-icons/ri';
import ReactWordcloud from 'react-wordcloud';

const resizeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const options: object = {
  colors: ['#8E8E93'],
  enableTooltip: false,
  deterministic: false,
  fontFamily: 'IBM Plex Sans Thai',
  fontSizes: [15, 24],
  fontStyle: 'normal',
  fontWeight: '400',
  padding: 5,
  rotations: 1,
  rotationAngles: [0],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 0,
};

export const KeywordAnalytics = () => {
  // Mock data
  const words = [
    {
      text: 'ต่อมลูกหมากโต',
      value: 268,
    },
    {
      text: 'วัคซีนปากมดลูก',
      value: 134,
    },
    {
      text: 'เจาะเลือด',
      value: 459,
    },
    {
      text: 'คัดกรองมะเร็ง',
      value: 168,
    },
    {
      text: 'มะเร็งเต้านม',
      value: 184,
    },
    {
      text: 'ตรวจสุขภาพวันแม่',
      value: 128,
    },
    {
      text: 'ฉีดวัคซีน',
      value: 92,
    },
    {
      text: 'ไขมันในเลือดสูง',
      value: 513,
    },
    {
      text: 'แพคเกจสุขภาพ',
      value: 305,
    },
  ];

  return (
    <Card shadow className="min-h-[221px] max-w-[458px] p-3">
      <div className="flex w-full items-center gap-3">
        <RiChatQuoteLine className="text-greyOcare" />
        <p className="text-sm font-semibold">Keyword ยอดนิยม</p>
      </div>
      <div className="mt-3 flex justify-center">
        <Resizable
          defaultSize={{
            width: 400,
            height: 159,
          }}
          style={resizeStyle}
        >
          <ReactWordcloud words={words} options={options} />
        </Resizable>
      </div>
    </Card>
  );
};
