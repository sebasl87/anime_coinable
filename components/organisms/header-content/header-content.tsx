/* eslint-disable jsx-a11y/anchor-is-valid */
import { DivMaster, Text, InputSearch, CalendarDate } from '../../index';

import { HeaderContentProps } from '@interfaces';
import styled from '@emotion/styled';
import { theme } from '@theme';
import { useRouter } from 'next/router';
import ChevronBack from '@icons/chevronBack/chevronBack';
import { useContext } from 'react';
import { AnimeContext } from '@hooks';


const Container = styled.div<HeaderContentProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px 16px 24px 16px;
  width: 100%;
  max-width: 90rem;
  margin: auto;
`;

const LogoContainer = styled.div<HeaderContentProps>`
  display: flex;
`;

const ButtonContainer = styled.div<HeaderContentProps>`
  display: flex;
`;

const ButtonBack = styled.div<HeaderContentProps>`
  position: absolute;
  top: ${theme.spaces(2.875)};
  left: ${theme.spaces(1)};
`;

export const HeaderContent: React.FC<HeaderContentProps> = ({ handleClick }) => {
  const router = useRouter();
  const { isMobile } = useContext(AnimeContext);

  // const pathMenu = router.asPath === '/cotizador';
  const pathMenu = true
  return (
    <>
      {pathMenu ? (
        <Container>
          <Text fontType="H1-w600">
            Anime
          </Text>
          <InputSearch />
          <CalendarDate isMobile={isMobile} />
        </Container>

      ) : (
        <ButtonBack>
          <DivMaster
            ml={1}
            mt={1}
            display="flex"
            justifyContent="center"
            onClick={() => router.back()}
            data-testid="sarlangatest">
            <ChevronBack />
          </DivMaster>
        </ButtonBack>
      )}
    </>
  )
};

export default HeaderContent;
