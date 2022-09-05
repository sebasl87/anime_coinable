import { renderHook } from '@testing-library/react';
import UseQuotation from './use-animes';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
describe('UseQuotation', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { result } = renderHook(() => UseQuotation());
    const { getFetchData } = result.current;
    getFetchData({});
    expect(mockDispatch).toHaveBeenCalled();
  });


});
