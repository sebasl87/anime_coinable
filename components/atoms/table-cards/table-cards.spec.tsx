import { render } from '@testing-library/react';
import { TableCards } from './table-cards';

describe('TableCards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableCards />);
    expect(baseElement).toBeTruthy();
  });
});
