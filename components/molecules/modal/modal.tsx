import { MouseEvent } from 'react';
import { ModalClose } from '@atoms';
import { ModalProps } from '@interfaces';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ModalBackground = styled.div<ModalProps>`
  position: fixed;
  z-index: 999;
  background-color: ${props => props.backgroundColor};
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  overflow-y: hidden;
  touch-action: none;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `}
`;

const ModalContent = styled.div<ModalProps>`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: relative;
`;

const ModalContainer = styled.div`
  position: relative;
  flex-direction: column;
  top: 20%;
  max-width: 77rem;
  width: 100%;
`;

export const Modal: React.FC<ModalProps> = ({
  children,
  fClose,
  closeOnClickAway = false,
  showCloseButton = true,
  width,
  height,
  backgroundColor,
  bgColorModal,
  borderColor,
  boxShadow,
  borderRadius,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  animationDurationBg,
  pt = 3,
  center,
  marginContent,
}) => {
  const fCloseByBackground = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!closeOnClickAway) return;
    fClose();
  };
  return (
    <ModalBackground
      onClick={fCloseByBackground}
      backgroundColor={backgroundColor}
      animationDurationBg={animationDurationBg}
      data-testid="modal-outside"
      pt={pt}
      center={center}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalClose
          fClose={fClose}
          showCloseButton={showCloseButton}
        />
        <ModalContent
          margin={marginContent}
          width={width}
          height={height}
          bgColorModal={bgColorModal}
          borderColor={borderColor}
          boxShadow={boxShadow}
          borderRadius={borderRadius}
          minWidth={minWidth}
          minHeight={minHeight}
          maxWidth={maxWidth}
          maxHeight={maxHeight}>
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
