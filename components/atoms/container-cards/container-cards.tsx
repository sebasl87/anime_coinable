import styled from '@emotion/styled';
import { theme } from '@theme';

export const ContainerCards = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: ${theme.spaces(2)};
  margin-left: ${theme.spaces(2)};
  margin-right: ${theme.spaces(2)};
  ${theme.breakpoints.md} {
    margin-bottom: ${theme.spaces(9)};
  }
`;
