import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

interface Props{
    isFocused: boolean;
}

export const Container = styled.View<Props>`
    flex-direction: row;
    margin-bottom: 2px;
    border-radius: 6px;
    height: 40px;
    border: 1px solid ${({theme }) => theme.colors.gray};
    ${({isFocused, theme }) =>  isFocused && css `
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.primary};
`};
`;

export const IconContainer = styled.View`
    height: 40px;
    width: 36px;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    border-radius: 6px;
`

export const InputText = styled(TextInput)`
    flex: 1;
    background-color: ${({theme }) => theme.colors.white};
    color: ${({theme }) => theme.colors.text};
    border-radius: 6px;
    font-size: ${RFValue(15)}px;
    padding: 0 10px;
`
export const Label = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme }) => theme.colors.primary};
    font-family: ${({theme }) => theme.fonts.primary_400};
    margin-bottom: 3px;
`

