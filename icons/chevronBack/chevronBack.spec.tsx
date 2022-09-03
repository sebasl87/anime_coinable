import { render } from '@testing-library/react';
import ChevronBack from './chevronBack';

describe('ChevronBack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronBack />);
    expect(baseElement).toBeTruthy();
  });
});
