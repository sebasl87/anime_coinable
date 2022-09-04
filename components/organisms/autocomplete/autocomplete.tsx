import { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import { theme } from '@theme';
import { RowAnimeOption } from '@components/molecules';
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
`;
export const ContainerDisplayText = styled.div``;

export const Match = styled(ContainerDisplayText)`
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.gray200};
  }
`;

export const NoMatch = styled(ContainerDisplayText)`
  font-weight: 700;
  cursor: default;
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
    data
}) => {
    const router = useRouter();
    const [inputSearchState, setInputSearchState] = useState({
        searchtext: value || '',
        suggest: [],
        resfound: true,
        inputText: false,
        display: false,
    });

    useEffect(() => {
        setInputSearchState({ ...inputSearchState, searchtext: value });
        if (!value || value === '') setInputSearchState({ ...inputSearchState, inputText: false });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const handleChange = (e) => {
        const searchval = e.target.value;

        const isEmptySearch = searchval === '';
        if (!isEmptySearch) {
            setInputSearchState({ ...inputSearchState, searchtext: searchval, inputText: true });
        }
    };

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
            <ContainerDisplayOptions>
                {data.map(opt => (
                    <RowAnimeOption key={opt.mal_id} optAnime={opt} handleClick={() => { selectAndClose(opt.mal_id) }} />

                ))}
            </ContainerDisplayOptions>
        </>
    );
};

export default Autocomplete;
