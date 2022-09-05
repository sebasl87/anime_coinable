import { render, fireEvent } from '@testing-library/react';
import ImputSearch from './input-search';

describe('ImputSearch', () => {
  const changeMock = jest.fn();
  it('should render successfully', () => {
    const wrappercontent = render(<ImputSearch onClick={changeMock} />);
    const input = wrappercontent.getByTestId("activity-date")
    fireEvent.click(input);
    expect(changeMock).toBeCalled();
  });
});
