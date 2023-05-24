// @ts-nocheck
import '@testing-library/jest-dom';

import BarGraph from '@components/011-healthDashboard/BarGraph';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Check @components/011-healthDashboard/BarGraph', () => {
  it('Check Vertical Orentation With Amount', async () => {
    render(
      <BarGraph
        orentation="vertical"
        amount={100}
        percent={10}
        label={'เลือดจาง'}
        color={'redOcare'}
        showAmount
      />
    );

    // Amount number
    const amountElement = screen.getAllByText('100')[0];
    expect(amountElement).toBeInTheDocument();
    expect(amountElement).toHaveClass('text-redOcare');

    // Graph height
    const graphElement = screen.getByTestId('bar-graph-test');
    expect(graphElement).toHaveStyle(`height: 10%`);
    expect(graphElement).toHaveClass('bg-redOcare');

    // Label text
    const labelElement = screen.getAllByText('เลือดจาง')[0];
    expect(labelElement).toBeInTheDocument();
  });

  it('Check Vertical Orentation Without Amount', async () => {
    render(
      <BarGraph
        orentation="vertical"
        amount={100}
        percent={10}
        label={'เลือดจาง'}
        color={'redOcare'}
      />
    );

    // Graph height
    const graphElement = screen.getByTestId('bar-graph-test');
    expect(graphElement).toHaveStyle(`height: 10%`);
    expect(graphElement).toHaveClass('bg-redOcare');

    // Label text
    const labelElement = screen.getAllByText('เลือดจาง')[0];
    expect(labelElement).toBeInTheDocument();
  });

  it('Check Horizontal Orentation With Amount', async () => {
    render(
      <BarGraph
        orentation="horizontal"
        amount={100}
        percent={10}
        label={'คอลเลสเตอรอล'}
        color={'blueOcare'}
        bgcolor={'blueLightOcare'}
        showAmount
      />
    );

    // Graph width
    const graphElement = screen.getByTestId('bar-graph-test');
    expect(graphElement).toHaveStyle(`width: 10%`);
    expect(graphElement).toHaveClass('bg-blueOcare');

    // Label text
    const labelElement = screen.getAllByText('คอลเลสเตอรอล')[0];
    expect(labelElement).toBeInTheDocument();
  });

  it('Check Horizontal Orentation Without Amount', async () => {
    render(
      <BarGraph
        orentation="horizontal"
        amount={100}
        percent={10}
        label={'คอลเลสเตอรอล'}
        color={'blueOcare'}
        bgcolor={'blueLightOcare'}
      />
    );

    // Graph width
    const graphElement = screen.getByTestId('bar-graph-test');
    expect(graphElement).toHaveStyle(`width: 10%`);
    expect(graphElement).toHaveClass('bg-blueOcare');
  });

  it('Check Vertical Orentation With Amount Tooltips', async () => {
    render(
      <BarGraph
        orentation="vertical"
        amount={1000}
        percent={50}
        label={'เลือดจาง'}
        color={'redOcare'}
        showAmount
      />
    );

    // Graph
    const graphElement = screen.getByTestId('bar-graph-test');

    // Tooltip will show after hover
    await userEvent.hover(graphElement);
    const tooltipsElement = screen.getByTestId('bar-graph-tooltips-test');
    expect(tooltipsElement).toBeInTheDocument();

    // Tooltip will hide after moveout
    await userEvent.unhover(graphElement);
    expect(tooltipsElement).not.toBeInTheDocument();
  });

  it('Check Vertical Orentation Without Amount Tooltips', async () => {
    render(
      <BarGraph
        orentation="vertical"
        amount={1000}
        percent={50}
        label={'เลือดจาง'}
        color={'redOcare'}
      />
    );

    // Graph
    const graphElement = screen.getByTestId('bar-graph-test');

    // Tooltip will show after hover
    await userEvent.hover(graphElement);
    const tooltipsElement = screen.getByTestId('bar-graph-tooltips-test');
    expect(tooltipsElement).toBeInTheDocument();

    // Tooltip will hide after moveout
    await userEvent.unhover(graphElement);
    expect(tooltipsElement).not.toBeInTheDocument();
  });

  it('Check Horizontal Orentation With Amount Tooltips', async () => {
    render(
      <BarGraph
        orentation="horizontal"
        amount={1000}
        percent={50}
        label={'เลือดจาง'}
        color={'redOcare'}
        showAmount
      />
    );

    // Graph
    const graphElement = screen.getByTestId('bar-graph-test');

    // Tooltip will show after hover
    await userEvent.hover(graphElement);
    const tooltipsElement = screen.getByTestId('bar-graph-tooltips-test');
    expect(tooltipsElement).toBeInTheDocument();

    // Tooltip will hide after moveout
    await userEvent.unhover(graphElement);
    expect(tooltipsElement).not.toBeInTheDocument();
  });

  it('Check Horizontal Orentation Without Amount Tooltips', async () => {
    render(
      <BarGraph
        orentation="horizontal"
        amount={3000}
        percent={80}
        label={'เลือดจาง'}
        color={'redOcare'}
      />
    );

    // Graph
    const graphElement = screen.getByTestId('bar-graph-test');

    // Tooltip will show after hover
    await userEvent.hover(graphElement);
    const tooltipsElement = screen.getByTestId('bar-graph-tooltips-test');
    expect(tooltipsElement).toBeInTheDocument();

    // Tooltip will hide after moveout
    await userEvent.unhover(graphElement);
    expect(tooltipsElement).not.toBeInTheDocument();
  });
});
