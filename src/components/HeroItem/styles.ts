import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
`;

interface ItemContainerProps {
    isPressed: boolean;
}

export const ItemContainer = styled.View<ItemContainerProps>`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 20px 10px;
    background-color: ${({ theme, isPressed }) => isPressed ? theme.colors.primary_light_opacity10 : theme.colors.white};
`;

export const HeroImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const HeroName = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 10px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    flex: 1;
`;