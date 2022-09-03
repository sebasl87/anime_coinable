import { render } from '@testing-library/react';
import BoxImage from './box-image';

describe('BoxImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoxImage />);
    expect(baseElement).toBeTruthy();
  });
});
