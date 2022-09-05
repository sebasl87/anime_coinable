import { render } from '@testing-library/react';
import BoxImage from './box-image';

describe('BoxImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoxImage image_url='http://image.url' anime_title='image_title'/>);
    expect(baseElement).toBeTruthy();
  });
});
