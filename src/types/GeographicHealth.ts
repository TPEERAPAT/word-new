/* eslint-disable @typescript-eslint/naming-convention */
export interface amountWithPercent {
  amount: number;
  percent: number;
}

export interface threeTypeWithPercent {
  // ปกติ
  good: amountWithPercent;
  // เสี่ยง
  warn: amountWithPercent;
  // มีปัญหา
  dangerous: amountWithPercent;
}

export interface provinceData {
  // ชื่อของจังหวัด
  name: string;
  // จำนวนประชากร
  population: amountWithPercent;
  // สภาวะสุขภาพ
  healthStatus: threeTypeWithPercent;
  // โรคไต
  kidney: threeTypeWithPercent;
  // ยูริคในเลือด
  hyperuricemia: threeTypeWithPercent;
  // อ้วนลงพุง
  metabolic: threeTypeWithPercent;
  // โรคอ้วน
  obesity: threeTypeWithPercent;
}
