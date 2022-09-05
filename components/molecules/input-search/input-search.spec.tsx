import { render, fireEvent } from '@testing-library/react';
import ImputSearch from './input-search';

describe('ImputSearch', () => {
  const changeMock = jest.fn();
  it('should render successfully', () => {
    const wrappercontent = render(<ImputSearch onChange={changeMock} />);
    const input = wrappercontent.getByRole('textbox');
    fireEvent.change(input, { target: { value: '12345678' } });
    expect(input?.value).toBe('12345678');
  });

  it('should render successfully Size 1, Round adn Full Width', () => {
    const wrappercontent = render(
      <ImputSearch size={1} round fullWidth onChange={changeMock} />
    );
    const input = wrappercontent.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input?.value).toBe('test');
  });
});
