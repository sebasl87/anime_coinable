/* eslint-disable jsx-a11y/anchor-is-valid */
import { DivMaster, Text, InputSearch, CalendarDate } from '../../index';

import { LayoutProps } from '@interfaces';
import styled from '@emotion/styled';
import { theme } from '@theme';
import { HeaderContent } from '@components';
import FooterContent from '@components/organisms/footer-content/footer-content';



const Container = styled.div<LayoutProps>`
  align-items: center;
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 24px 16px 24px 16px;
  width: 100%;
  max-width: 90rem;
  margin: auto;
`;

const LogoContainer = styled.div<LayoutProps>`
  display: flex;
`;

const ButtonContainer = styled.div<LayoutProps>`
  display: flex;
`;

const ButtonB2C = styled.div<LayoutProps>`
  position: absolute;
  top: ${theme.spaces(2.875)};
  left: ${theme.spaces(1)};
`;

export const Layout: React.FC<LayoutProps> = () => {

    return (
        <>
            <div className="" style={{ width: '100%', borderBottom: '1px solid #DDDDDD' }}>

                <HeaderContent />
            </div>
            <div>
                <p>Hello World</p>
            </div>
            <div className="" style={{ width: '100%', borderTop: '1px solid #DDDDDD' }}>
                <FooterContent />
            </div>
        </>
    )
};

export default Layout;
