type PeriodPopularityDataType = {
  [month: string]: {
    [day: string]: number;
  };
};

const PeriodPopularityData: PeriodPopularityDataType = {
  Jan: {
    Sun: 12,
    Mon: 45,
    Tue: 23,
    Wed: 34,
    Thu: 0,
    Fri: 20,
    Sat: 5,
  },
  Feb: {
    Sun: 23,
    Mon: 56,
    Tue: 12,
    Wed: 34,
    Thu: 45,
    Fri: 65,
    Sat: 40,
  },
  Mar: {
    Sun: 56,
    Mon: 20,
    Tue: 45,
    Wed: 65,
    Thu: 23,
    Fri: 12,
    Sat: 34,
  },
  Apr: {
    Sun: 34,
    Mon: 12,
    Tue: 56,
    Wed: 20,
    Thu: 45,
    Fri: 23,
    Sat: 65,
  },
  May: {
    Sun: 20,
    Mon: 34,
    Tue: 65,
    Wed: 56,
    Thu: 12,
    Fri: 45,
    Sat: 23,
  },
  Jun: {
    Sun: 45,
    Mon: 23,
    Tue: 20,
    Wed: 12,
    Thu: 65,
    Fri: 34,
    Sat: 56,
  },
  Jul: {
    Sun: 23,
    Mon: 56,
    Tue: 0,
    Wed: 45,
    Thu: 20,
    Fri: 12,
    Sat: 65,
  },
  Aug: {
    Sun: 56,
    Mon: 34,
    Tue: 45,
    Wed: 23,
    Thu: 65,
    Fri: 20,
    Sat: 12,
  },
  Sep: {
    Sun: 45,
    Mon: 20,
    Tue: 56,
    Wed: 34,
    Thu: 12,
    Fri: 23,
    Sat: 65,
  },
  Oct: {
    Sun: 12,
    Mon: 23,
    Tue: 0,
    Wed: 20,
    Thu: 34,
    Fri: 56,
    Sat: 45,
  },
  Nov: {
    Sun: 56,
    Mon: 45,
    Tue: 23,
    Wed: 12,
    Thu: 34,
    Fri: 20,
    Sat: 65,
  },
  Dec: {
    Sun: 34,
    Mon: 20,
    Tue: 45,
    Wed: 56,
    Thu: 65,
    Fri: 12,
    Sat: 23,
  },
};

export default PeriodPopularityData;
