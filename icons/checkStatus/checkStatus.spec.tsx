import { render } from '@testing-library/react';
import CheckStatus from './checkStatus';

describe('CheckStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckStatus />);
    expect(baseElement).toBeTruthy();
  });
});
