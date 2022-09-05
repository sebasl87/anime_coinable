import styled from '@emotion/styled';
import { RowAnimeOption, Text } from '@components';
import { useRouter } from 'next/router';
import { AutocompleProps } from '@interfaces';

const ContainerInput = styled.div`
    height: 8rem;
    display: flex;
    width: 100%;
    max-width: 77rem;
    border-radius: 4rem;
    background-color: #ffffff;
`;

const ContainerDisplayOptions = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin-top: 2rem;
  border-radius: 4rem;
  min-height: 15rem;
  padding: 4rem 3rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
    background-color: transparent;
    border: none;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 19px;
    margin-left: 3rem;
    margin-right: 3rem;
    text-align: left;
    text-overflow: ellipsis;
    width: 100%;
    &:focus,
    &:hover:not(:focus):not(:disabled) {
    border: none;
    outline: none;
  }
  `;

export const Autocomplete: React.FC<AutocompleProps> = ({
    value,
    fClose,
    data,
    handleChange
}) => {
    const router = useRouter();

    const selectAndClose = (id) => {
        fClose();
        router.push({
            pathname: `/anime/${id}`,
        });
    }
    return (
        <>
            <ContainerInput>
                <Input
                    autoComplete="off"
                    type="text"
                    placeholder="You can search for ‘Kyoukai no Kanata’ for example"
                    onChange={handleChange}
                />
            </ContainerInput>
            {value.length > 2 &&
                <ContainerDisplayOptions>
                    {data?.length > 0 ? data?.map(opt => (
                        <RowAnimeOption key={opt.mal_id} optAnime={opt} handleClick={() => { selectAndClose(opt.mal_id) }} />

                    )) : <Text fontType="H3-w500-16" width="100%" justifyContent="center">
                        Oops it seems there is nothing for ‘{value}’
                    </Text>
                    }
                </ContainerDisplayOptions>
            }
        </>
    );
};

export default Autocomplete;
