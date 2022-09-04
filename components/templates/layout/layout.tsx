import { LayoutProps } from '@interfaces';
import styled from '@emotion/styled';
import { theme } from '@theme';
import { HeaderContent, Modal } from '@components';
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatibus qui laborum non, facilis perspiciatis distinctio vel nobis eveniet odio fugit, aut molestiae provident consequatur laudantium blanditiis recusandae iure aliquam et inventore. Laborum aspernatur totam in iure nemo incidunt omnis voluptates, libero unde sequi praesentium enim hic recusandae, aperiam pariatur quia explicabo corporis ducimus provident ullam odit aut eveniet? Harum eos exercitationem minima, vel minus magnam! Nam veniam quia laboriosam ea dolorem sed sint iste, reprehenderit, esse velit consequatur alias rem repellat voluptas. Aut aspernatur doloribus eum rerum temporibus perspiciatis labore harum eos consequuntur, esse, sunt nostrum alias. Fugiat repellendus quo molestias earum. Fugiat iure odit unde doloribus. Eum placeat, praesentium ad alias architecto atque doloribus animi explicabo optio dolorem vitae amet enim ullam nemo, obcaecati accusantium debitis. Recusandae debitis, laudantium minima quam quidem sequi nobis iste error iusto at reprehenderit distinctio temporibus nisi molestias unde voluptatum sint facilis libero? Cum, delectus nesciunt repellendus fuga quasi neque voluptatibus enim nemo mollitia obcaecati itaque dolorem id alias blanditiis! Quia sed unde voluptatum qui, dolorum necessitatibus, optio illum est temporibus sunt magnam dolores animi expedita, inventore alias debitis. Sunt ipsum blanditiis amet? Sapiente quasi consequatur fugiat itaque ipsam corporis deleniti expedita ex.
      </Modal>}
    </>
  )
};

export default Layout;
