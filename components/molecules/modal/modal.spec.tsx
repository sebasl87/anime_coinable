import { ModalProps } from '@core-webapp/interfaces';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import Modal from './modal';

const fnMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Modal', () => {
  const setup = ({ fClose, ...rest }: ModalProps) =>
    render(
      <Modal fClose={fnMock} {...rest}>
        hola
      </Modal>
    );
  it('Component should render successfully', () => {
    const { getByText } = setup({});
    expect(getByText('hola')).toBeTruthy();
  });

  it('Component should show text typed', () => {
    const { getByText } = setup({});
    expect(getByText('hola')).toBeTruthy();
  });

  it('Component should close when user clicks on button', () => {
    const { getByTestId } = setup({});
    fireEvent.click(getByTestId('modalclick'));
    expect(fnMock).toBeCalled();
  });

  it('should render custom-desktop modal', () => {
    const { getByTestId } = setup({
      modalCloseType: 'custom-desktop',
    });
    const closeBtn = getByTestId('custom-desktop');
    expect(closeBtn).toBeTruthy();
  });

  it('should render custom-mobile modal', () => {
    const backgroundColor = 'rgb(78, 52, 225)';
    const { getByTestId } = setup({
      modalCloseType: 'custom-mobile',
      maxHeight: '95vh',
      maxWidth: '95vw',
      center: true,
    });
    const closeBtn = getByTestId('modalclick');
    fireEvent.click(closeBtn);
    expect(getComputedStyle(closeBtn).backgroundColor).toBe(backgroundColor);
    expect(fnMock).toHaveBeenCalledTimes(1);
  });

  it('should render footer component', () => {
    const { getByText } = setup({
      footer: <p>Footer test</p>,
    });
    const footer = getByText(/footer test/i);
    expect(footer).toBeTruthy();
  });

  it('should close when click outside', () => {
    const { getByTestId } = setup({
      closeOnClickAway: true,
    });
    const modalBackground = getByTestId('modal-outside');
    fireEvent.click(modalBackground);
    expect(fnMock).toHaveBeenCalled();
  });

  it('should not close when click outside', () => {
    const { getByTestId } = setup({ closeOnClickAway: false });
    fireEvent.click(getByTestId('modal-outside'));
    expect(fnMock).not.toHaveBeenCalled();
  });

  it('should to show standard close button', () => {
    const { queryByTestId } = setup({ showCloseButton: true });
    const standardCloseBtn = queryByTestId('modalclick');
    expect(standardCloseBtn).toBeTruthy();
  });

  it('should to show custom close desktop button', () => {
    const { queryByTestId } = setup({
      modalCloseType: 'custom-desktop',
    });
    const standardCloseBtn = queryByTestId('custom-desktop');
    expect(standardCloseBtn).toBeTruthy();
  });

  it('should to show custom close mobile button', () => {
    const { queryByTestId } = setup({
      modalCloseType: 'custom-mobile',
    });
    const standardCloseBtn = queryByTestId('modalclick');
    expect(standardCloseBtn).toBeTruthy();
  });

  it('should not to show close buttons', () => {
    const { queryByTestId } = setup({ showCloseButton: false });
    const customCloseBtn = queryByTestId('custom-desktop');
    const standardCloseBtn = queryByTestId('modalclick');
    expect(customCloseBtn).toBeFalsy();
    expect(standardCloseBtn).toBeFalsy();
  });
});
