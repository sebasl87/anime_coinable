import { ModalProps } from '@interfaces';
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


});
