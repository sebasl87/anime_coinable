import { render } from '@testing-library/react';
import FooterContent from './footer-content';

describe('FooterContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterContent />);

    expect(baseElement).toBeTruthy();
  });
});
