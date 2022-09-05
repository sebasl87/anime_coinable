import { render } from '@testing-library/react';
import RowAnimeOption from './row-anime-option';
import mockData from '../../../mockData';

describe('RowAnimeOption', () => {
  const changeMock = jest.fn();

  it('should render successfully', () => {
    const wrappercontent = render(<RowAnimeOption optAnime={mockData.data} onClick={changeMock} />);
    expect(wrappercontent).toBeTruthy();

  });
});
