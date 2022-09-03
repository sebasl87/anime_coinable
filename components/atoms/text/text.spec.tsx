import { render, screen } from '@testing-library/react';
import Text from './text';

beforeEach(() => render(<Text>Miércoles 19 de Septiembre</Text>));

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Text fontType="Span-w500" />);

    expect(baseElement).toBeTruthy();
  });

  it('should render successfully all', () => {
    const { baseElement } = render(
      <Text fontType={{ sm: 'Span-w500', md: 'Span-w500', ll: 'Span-w500' }} />
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render successfully mobile', () => {
    const { baseElement } = render(
      <Text fontType={{ sm: 'Span-w500' }}>Hi</Text>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render successfully mid', () => {
    const { baseElement } = render(
      <Text fontType={{ md: 'Span-w500' }}>Hi</Text>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render successfully large', () => {
    const { baseElement } = render(
      <Text fontType={{ ll: 'Span-w500' }}>Hi</Text>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render successfully text transform', () => {
    const { baseElement } = render(<Text textTransform="uppercase" />);

    expect(baseElement).toBeTruthy();
  });

  it('should be 26 characters long', () => {
    const { textContent } = screen.getByTestId('activity-date');

    expect(textContent.length).toBeLessThanOrEqual(26);
  });
});
