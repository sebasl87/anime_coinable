/* eslint-disable jsx-a11y/anchor-is-valid */
import { DivMaster, Text, InputSearch, CalendarDate } from '../../index';

import { HeaderContentProps } from '@interfaces';
import styled from '@emotion/styled';
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

export const HeaderContent: React.FC<HeaderContentProps> = ({ handleClick, pathMenu }) => {
  const router = useRouter();
  const { isMobile } = useContext(AnimeContext);

  return (
    <>
      <Container>
        {pathMenu ? (
          <>
            <Text fontType="H1-w600">
              Anime
            </Text>
            <InputSearch />
            <CalendarDate isMobile={isMobile} />
          </>
        ) : (
          <DivMaster
            ml={1}
            mt={1}
            display="flex"
            justifyContent="center"
            onClick={() => router.back()}
            cursor="pointer"
          >
            <DivMaster mr={2}>
              <ChevronBack />
            </DivMaster>
            <Text fontType="H3-w600-16">Go back to Main</Text>
          </DivMaster>
        )}
      </Container>
    </>
  )
};

export default HeaderContent;
