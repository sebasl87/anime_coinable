import { AnimeContext } from '@hooks';
import { render, fireEvent } from '@testing-library/react';
import HeaderContent from './header-content';

describe('HeaderContent', () => {
  const changeMock = jest.fn();

  it('should render successfully', () => {
    const wrappercontent = render(
      <AnimeContext.Provider value={{ isMobile: true }}>
        <HeaderContent handleClick={changeMock} pathMenu/>
      </AnimeContext.Provider>
    );
    const input = wrappercontent.getAllByTestId("activity-date");
    fireEvent.click(input[1]);
    expect(changeMock).toBeCalled();
  });

  it('should render successfully without pathMenu', () => {
    const wrappercontent = render(
      <AnimeContext.Provider value={{ isMobile: true }}>
        <HeaderContent handleClick={changeMock} />
      </AnimeContext.Provider>
    );
    expect(wrappercontent).toBeTruthy();
  });
});
