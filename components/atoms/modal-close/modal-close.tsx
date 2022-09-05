import { FC } from 'react';
import { Close } from '@icons/close/close';
import { IModalCloseButton } from '@interfaces';
import styled from '@emotion/styled';

const ModalCloseButton = styled.span<IModalCloseButton>`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  top: 0;
  cursor: default;
  margin-right: 0px;
  margin-bottom:1.5rem;
  span {
    cursor: pointer;
  }
`;

export const ModalClose: FC<IModalCloseButton> = ({
  fClose,
}) => {

  return (
    <ModalCloseButton >
      <span onClick={fClose}>
        <div>
          <Close />
        </div>
      </span>
    </ModalCloseButton>
  )
};

export default ModalClose;
