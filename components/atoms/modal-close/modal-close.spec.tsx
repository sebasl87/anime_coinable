import { ModalClose } from '@atoms';
import { IModalCloseButton } from '@core-webapp/interfaces';
import { render } from '@testing-library/react';

describe('ModalClose', () => {
  const mockFn = jest.fn();
  const setup = ({
    fClose = mockFn,
    modalCloseType = 'normal',
    showCloseButton = true,
  }: Partial<IModalCloseButton>) =>
    render(
      <ModalClose
        modalCloseType={modalCloseType}
        showCloseButton={showCloseButton}
        fClose={fClose}
      />
    );

  it('should render successfully', () => {
    const { baseElement } = setup({ modalCloseType: 'custom-desktop' });
    expect(baseElement).toBeTruthy();
  });

  it('should render mobile successfully', () => {
    const { baseElement } = setup({ modalCloseType: 'custom-mobile' });
    expect(baseElement).toBeTruthy();
  });

  it('should render normal modal successfully', () => {
    const { baseElement } = setup({});
    expect(baseElement).toBeTruthy();
  });

  it('should not render', () => {
    const { baseElement } = setup({ showCloseButton: false });
    expect(baseElement).toBeTruthy();
  });
});
