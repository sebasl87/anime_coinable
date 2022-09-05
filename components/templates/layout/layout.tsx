import { useState } from 'react';
import { useRouter } from 'next/router';
import { getAnimesBySearch } from '@redux/animes/actions';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { AnimesStateProps, LayoutProps } from '@interfaces';
import { theme } from '@theme';
import { HeaderContent, Modal, Autocomplete, FooterContent } from '@components';


const Container = styled.div<LayoutProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 24px 16px 24px 16px;
  width: 100%;
  max-width: 90rem;
  margin: auto;
`;

const Header = styled.div<LayoutProps>`
  width: 100%;
  border-bottom: ${props => props.pathMenu && "1px solid #DDDDDD"};
  position: sticky;
  top: 0;
  background:${theme.colors.white};
  z-index: 1;
`;

const Footer = styled.div<LayoutProps>`
  width: 100%;
  border-top: 1px solid #DDDDDD;
  display:${props => !props.pathMenu && "none"};
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const pathMenu = router.asPath === '/';
  const [openModal, setOpenModal] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    searchValue?.length >= 3 &&
      dispatch(getAnimesBySearch(searchValue) as unknown as AnyAction);
  };
  const { animeSearchListed } = useSelector((state: AnimesStateProps) => state?.animes);

  return (
    <>
      <Header pathMenu={pathMenu}>
        <HeaderContent pathMenu={pathMenu} handleClick={() => setOpenModal(true)} />
      </Header>
      <Container>
        {children}
      </Container>
      <Footer pathMenu={pathMenu}>
        <FooterContent />
      </Footer>
      {openModal && <Modal fClose={() => setOpenModal(false)} backgroundColor="#00000099">
        <Autocomplete handleChange={handleChange} fClose={() => setOpenModal(false)} data={animeSearchListed} value={searchValue} />
      </Modal>}
    </>
  )
};

export default Layout;
