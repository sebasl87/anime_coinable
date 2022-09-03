import { LayoutProps } from '@interfaces';
import styled from '@emotion/styled';
import { theme } from '@theme';
import { HeaderContent } from '@components';
import FooterContent from '@components/organisms/footer-content/footer-content';

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
  border-bottom: 1px solid #DDDDDD;
`;

const Footer = styled.div<LayoutProps>`
  width: 100%;
  border-top: 1px solid #DDDDDD;
`;

const ButtonB2C = styled.div<LayoutProps>`
  position: absolute;
  top: ${theme.spaces(2.875)};
  left: ${theme.spaces(1)};
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <Header>
        <HeaderContent />
      </Header>
      <Container>
        {children}
      </Container>
      <Footer>
        <FooterContent />
      </Footer>
    </>
  )
};

export default Layout;
