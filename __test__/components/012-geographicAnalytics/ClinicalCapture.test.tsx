// @ts-nocheck
import ClinicalCapture from '@components/012-geographicHealth/ClinicalCapture';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Check @components/02-geographicHealth/ClinicalCapture', () => {
  const testData = [
    {
      name: 'Nonthaburi',
      population: {
        amount: 36000,
        percent: 30,
      },
      healthStatus: {
        good: {
          amount: 12000,
          percent: 33,
        },
        warn: {
          amount: 18000,
          percent: 50,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      kidney: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      hyperuricemia: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      metabolic: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      obesity: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
    },
    {
      name: 'Bangkok',
      population: {
        amount: 39900,
        percent: 30,
      },
      healthStatus: {
        good: {
          amount: 6000,
          percent: 17,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 18000,
          percent: 50,
        },
      },
      kidney: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      hyperuricemia: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      metabolic: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      obesity: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
    },
    {
      name: 'Samut Prakan',
      population: {
        amount: 39900,
        percent: 30,
      },
      healthStatus: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      kidney: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      hyperuricemia: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      metabolic: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      obesity: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
    },
    {
      name: 'Samut Sakhon',
      population: {
        amount: 39900,
        percent: 30,
      },
      healthStatus: {
        good: {
          amount: 6000,
          percent: 17,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 18000,
          percent: 50,
        },
      },
      kidney: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      hyperuricemia: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      metabolic: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      obesity: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
    },
    {
      name: 'Samut Songkhram',
      population: {
        amount: 39900,
        percent: 30,
      },
      healthStatus: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      kidney: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      hyperuricemia: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      metabolic: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
      obesity: {
        good: {
          amount: 18000,
          percent: 50,
        },
        warn: {
          amount: 12000,
          percent: 33,
        },
        dangerous: {
          amount: 6000,
          percent: 17,
        },
      },
    },
  ];

  const calculateClinicalCaptures = () => {
    interface ThreeGroupType {
      good: {
        amount: number;
        percent: number;
      };
      warn: {
        amount: number;
        percent: number;
      };
      dangerous: {
        amount: number;
        percent: number;
      };
    }

    interface ResultType {
      kidney: ThreeGroupType;
      hyperuricemia: ThreeGroupType;
      metabolic: ThreeGroupType;
      obesity: ThreeGroupType;
    }

    const result: ResultType = {
      kidney: {
        good: {
          amount: 0,
          percent: 0,
        },
        warn: {
          amount: 0,
          percent: 0,
        },
        dangerous: {
          amount: 0,
          percent: 0,
        },
      },
      hyperuricemia: {
        good: {
          amount: 0,
          percent: 0,
        },
        warn: {
          amount: 0,
          percent: 0,
        },
        dangerous: {
          amount: 0,
          percent: 17,
        },
      },
      metabolic: {
        good: {
          amount: 0,
          percent: 0,
        },
        warn: {
          amount: 0,
          percent: 0,
        },
        dangerous: {
          amount: 0,
          percent: 0,
        },
      },
      obesity: {
        good: {
          amount: 0,
          percent: 0,
        },
        warn: {
          amount: 0,
          percent: 0,
        },
        dangerous: {
          amount: 0,
          percent: 0,
        },
      },
    };

    testData.forEach((data: provinceData) => {
      for (let i = 0; i < Object.keys(result).length; i++) {
        const key = Object.keys(result)[i] as keyof ResultType;
        result[key].dangerous.amount += data[key].dangerous.amount;
        result[key].warn.amount += data[key].warn.amount;
        result[key].good.amount += data[key].good.amount;
      }
    });

    for (let i = 0; i < Object.keys(result).length; i++) {
      const key = Object.keys(result)[i] as keyof ResultType;
      result[key].dangerous.percent = Math.floor(
        (result[key].dangerous.amount /
          (result[key].dangerous.amount +
            result[key].warn.amount +
            result[key].good.amount)) *
          100
      );
      result[key].warn.percent = Math.floor(
        (result[key].warn.amount /
          (result[key].dangerous.amount +
            result[key].warn.amount +
            result[key].good.amount)) *
          100
      );
      result[key].good.percent = Math.floor(
        (result[key].good.amount /
          (result[key].dangerous.amount +
            result[key].warn.amount +
            result[key].good.amount)) *
          100
      );
    }

    return result;
  };

  it('Check Thai Label Text', async () => {
    render(<ClinicalCapture data={calculateClinicalCaptures()} />);
    expect(
      screen.getAllByText('สรุปโรคไม่ติดต่อเรื้อรัง')[0]
    ).toBeInTheDocument();
  });

  it('Check English Label Text', async () => {
    render(<ClinicalCapture data={calculateClinicalCaptures()} />);
    expect(screen.getAllByText('(Clinical Capture)')[0]).toBeInTheDocument();
  });

  it('Check Details Render', async () => {
    render(<ClinicalCapture data={calculateClinicalCaptures()} />);

    expect(await screen.findByText(/โรคไต/i)).toBeInTheDocument();
    expect(await screen.findByText(/Kidney disease/i)).toBeInTheDocument();

    expect(await screen.findByText(/ยูริคในเลือดสูง/i)).toBeInTheDocument();
    expect(await screen.findByText(/Hyperuricemia/i)).toBeInTheDocument();

    expect(await screen.findByText(/ภาวะอ้วนลงพุง/i)).toBeInTheDocument();
    expect(await screen.findByText(/Metabolic syndrome/i)).toBeInTheDocument();

    expect(await screen.findByText(/โรคอ้วน/i)).toBeInTheDocument();
    expect(await screen.findByText(/Obesity/i)).toBeInTheDocument();
  });
});
