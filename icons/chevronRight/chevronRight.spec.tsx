import { render } from '@testing-library/react';
import ChevronRight from './chevronRight';

describe('ChevronRight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronRight />);
    expect(baseElement).toBeTruthy();
  });
});
