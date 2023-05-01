import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    margin-bottom: 20px;
`;


export const Arrow = styled.Pressable`

`;

interface IButtonProps {
    active?: boolean;
}

export const ButtonNumbers = styled.Pressable<IButtonProps>`
    background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.white };
    width: 36px;
    height: 36px;
    border-radius: 22px;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const ButtonNumbersText = styled.Text<IButtonProps>`
    color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const PaginationContainer = styled.View`
    flex-direction: row;
    gap: 5px;
`;