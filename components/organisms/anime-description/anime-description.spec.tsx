import { render } from '@testing-library/react';
import AnimeDescription from './anime-description';
import mockData from '../../../mockData';

describe('AnimeDescription', () => {

  it('should render successfully', () => {
    const wrappercontent = render(<AnimeDescription data={mockData.data} />);
    expect(wrappercontent).toBeTruthy();
    
  });
});
