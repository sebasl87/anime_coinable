import { LayoutProps } from '@interfaces';
import styled from '@emotion/styled';
import { theme } from '@theme';
import { HeaderContent, Modal, Autocomplete } from '@components';
import FooterContent from '@components/organisms/footer-content/footer-content';
import { useRouter } from 'next/router';

import { useState } from 'react';


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
        <Autocomplete />
      </Modal>}
    </>
  )
};

export default Layout;
