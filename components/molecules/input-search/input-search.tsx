import { SearchEye } from '@icons/searchEye/searchEye';
import { ImputSearch } from '@interfaces';
import styled from '@emotion/styled';
import { theme } from '@theme';
import { Text } from '@atoms'

const ContainerInput = styled.div<{
}>`
  align-items: center;
  background: ${theme.colors.gray};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  margin: auto 2rem;
  min-width: 202px;
  padding: 1rem 0 1rem 2rem;
  width: 100%;
  ${theme.breakpoints.md}{
    max-width: 362px;
  }
  `;

export const InputSearch: React.FC<ImputSearch> = ({
  placeHolder = 'Search...',
  onClick
}) => {
  return (
    <>
      <ContainerInput onClick={onClick}>
        <SearchEye />
        <Text fontType="H1-w400" fontColor={theme.colors.gray100} ml={1}>
          {placeHolder}
        </Text>
      </ContainerInput>

    </>
  );
};
export default InputSearch;