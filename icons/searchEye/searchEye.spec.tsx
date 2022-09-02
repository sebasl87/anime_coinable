import { render } from '@testing-library/react';
import SearchEye from './searchEye';

describe('SearchEye', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchEye />);
    expect(baseElement).toBeTruthy();
  });
});
