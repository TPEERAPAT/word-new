// @ts-nocheck
import Chip from '@components/Chip/Chip';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Check @components/Chip/Chip', () => {
  it('Check Label Render', async () => {
    render(<Chip text={'Test'} />);

    const element = await screen.findByText('Test');
    expect(element).toBeInTheDocument();

    render(
      <div data-testid="chip-test">
        <Chip />
      </div>
    );

    expect(
      // eslint-disable-next-line testing-library/no-node-access
      screen.getByTestId('chip-test').children[0]?.children[0]
    ).toBeEmptyDOMElement();
  });

  it('Check Color Render', async () => {
    // Green Test
    render(<Chip text={'Test Green'} color={'green'} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Green').parentElement).toHaveClass(
      'bg-greenLightOcare'
    );
    expect(screen.getByText('Test Green')).toHaveClass('text-greenOcare');

    // Red Test
    render(<Chip text={'Test Red'} color={'red'} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Red').parentElement).toHaveClass(
      'bg-redLightOcare'
    );
    expect(screen.getByText('Test Red')).toHaveClass('text-redOcare');

    // Blue Test
    render(<Chip text={'Test Blue'} color={'blue'} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Blue').parentElement).toHaveClass(
      'bg-blueLightOcare'
    );
    expect(screen.getByText('Test Blue')).toHaveClass('text-blueOcare');

    // Sea Blue Test
    render(<Chip text={'Test Sea Blue'} color={'seaBlue'} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Sea Blue').parentElement).toHaveClass(
      'bg-seaBlueLightOcare'
    );
    expect(screen.getByText('Test Sea Blue')).toHaveClass('text-seaBlueOcare');

    // Yellow Test
    render(<Chip text={'Test Yellow'} color={'yellow'} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Yellow').parentElement).toHaveClass(
      'bg-yellowLightOcare'
    );
    expect(screen.getByText('Test Yellow')).toHaveClass('text-yellowOcare');

    // Default Test
    render(<Chip text={'Test Default'} color={'default'} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Default').parentElement).toHaveClass(
      'bg-greenLightOcare'
    );
    expect(screen.getByText('Test Default')).toHaveClass('text-greenOcare');
  });

  it('Check Color Fill Render', async () => {
    // Green Test
    render(<Chip text={'Test Green'} color={'green'} fill />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Green').parentElement).toHaveClass(
      'bg-greenOcare'
    );
    expect(screen.getByText('Test Green')).toHaveClass('text-white');

    // Red Test
    render(<Chip text={'Test Red'} color={'red'} fill />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Red').parentElement).toHaveClass(
      'bg-redOcare'
    );
    expect(screen.getByText('Test Red')).toHaveClass('text-white');

    // Blue Test
    render(<Chip text={'Test Blue'} color={'blue'} fill />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Blue').parentElement).toHaveClass(
      'bg-blueOcare'
    );
    expect(screen.getByText('Test Blue')).toHaveClass('text-white');

    // Sea Blue Test
    render(<Chip text={'Test Sea Blue'} color={'seaBlue'} fill />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Sea Blue').parentElement).toHaveClass(
      'bg-seaBlueOcare'
    );
    expect(screen.getByText('Test Sea Blue')).toHaveClass('text-white');

    // Yellow Test
    render(<Chip text={'Test Yellow'} color={'yellow'} fill />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Yellow').parentElement).toHaveClass(
      'bg-yellowOcare'
    );
    expect(screen.getByText('Test Yellow')).toHaveClass('text-white');

    // Default Test
    render(<Chip text={'Test Default'} color={'default'} fill />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Test Default').parentElement).toHaveClass(
      'bg-greenOcare'
    );
    expect(screen.getByText('Test Default')).toHaveClass('text-white');
  });

  it('Check Bold Render', async () => {
    render(<Chip text={'Test'} bold />);

    const element = await screen.findByText('Test');
    expect(element).toHaveClass('font-medium');
  });
});
