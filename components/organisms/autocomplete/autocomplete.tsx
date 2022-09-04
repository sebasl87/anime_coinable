/* eslint-disable no-shadow */
import React, { useState, useEffect, useRef } from 'react';

import styled from '@emotion/styled';

import { theme } from '@theme';
import { RowAnimeOption } from '@components/molecules';

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

export const Autocomplete = ({
    options,
    placeHolder = 'algo',
    fontWeightTextNormal,
    fontColorTextNormal,
    fontWeightTextMark,
    fontColorTextMark,
    fontWeightTextNoMatch,
    fontColorTextNoMatch,
    noMatchText,
    handleCancel,
    idMovement,
    placeHolderColor,
    handleCleanFilterSearch,
    limitRenderOptions = 5,
    matchOption: matchOptionProps,
    value,
}) => {
    const wrapperRef = useRef(null);
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

    const matchOption = (option, labelSearch) => {
        if (matchOptionProps) {
            return matchOptionProps(option, labelSearch);
        }
        return option.toLowerCase().includes(labelSearch.toLowerCase());
    };

    const updateDisplay = (labelSearch) => {
        // if (labelSearch?.length > 2 && !!options) {
        //     const suggestion = options
        //         .filter((e) => matchOption(e, labelSearch))
        //         .slice(0, limitRenderOptions);
        //     setInputSearchState({
        //         // resfound: suggestion.length !== 0,
        //         // suggest: suggestion,
        //         // display: true,
        //         // searchtext: labelSearch,
        //     });
        // } else {
        //     setInputSearchState({
        //         ...inputSearchState,
        //         suggest: [],
        //         display: false,
        //         searchtext: labelSearch,
        //     });
        // }
    };

    const handleChange = (e) => {
        const searchval = e.target.value;

        const isEmptySearch = searchval === '';
        if (!isEmptySearch) {
            setInputSearchState({ ...inputSearchState, searchtext: searchval, inputText: true });
            updateDisplay(searchval);
        }
    };

    const getSuggestions = () => {
        if (
            inputSearchState?.suggest?.length === 0 &&
            inputSearchState?.searchtext !== '' &&
            !inputSearchState?.resfound
        ) {
            return (
                noMatchText && (
                    <NoMatch
                    >
                        {noMatchText}
                    </NoMatch>
                )
            );
        }

        return (
            <>
                {inputSearchState?.suggest?.map((item, index) => (
                    <Match
                        key={index}
                    // onClick={() => suggestedText(item)}
                    >
                    </Match>
                ))}
            </>
        );
    };
    return (
        <>
            <ContainerInput>
                <Input
                    autoComplete="off"
                    type="text"
                    placeholder="You can search for ‘Kyoukai no Kanata’ for example"
                    // value={inputSearchState.searchtext}
                    onChange={handleChange}
                />
            </ContainerInput>
            {/* {inputSearchState.display && ( */}
            <ContainerDisplayOptions>
                <RowAnimeOption />
            </ContainerDisplayOptions>
            {/* )} */}
        </>
    );
};

export default Autocomplete;
