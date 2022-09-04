import { FC } from 'react';
import { Close } from '@icons/close/close';
import { IModalCloseButton } from '@interfaces';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@theme';

const ModalCloseButton = styled.span<IModalCloseButton>`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  padding-right: ${theme.spaces(2.25)};
  padding-top: ${theme.spaces(2.25)};
  top: 0;
  cursor: default;
  margin-right: 0px;
  span {
    cursor: pointer;
  }
  ${({ modalCloseType }) =>
    modalCloseType === 'custom-mobile' &&
    css`
      span {
        background-color: ${theme.colors.main};
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
      }
    `}
`;

const CustomModalClose = styled.span<IModalCloseButton>`
  background-color: ${theme.colors.main};
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -10px;
  margin-right: -10px;
  z-index: 99999;
`;

export const ModalClose: FC<IModalCloseButton> = ({
  fClose,
  modalCloseType,
  showCloseButton,
}) => {
  if (!fClose || !showCloseButton) return null;

  return modalCloseType === 'custom-desktop' ? (
    <CustomModalClose
      onClick={fClose}
      modalCloseType={modalCloseType}>
      <Close />
    </CustomModalClose>
  ) : (
    <ModalCloseButton modalCloseType={modalCloseType}>
      <span onClick={fClose} data-testid="modalclick">
        <div>
          <Close />
        </div>
      </span>
    </ModalCloseButton>
  );
};

export default ModalClose;
