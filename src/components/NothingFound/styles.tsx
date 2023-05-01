import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const ErrorWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height/2}px;
    position: relative;
`;

export const ErrorMessageContainer = styled.View`
    position: absolute;
`;

export const ErrorMessage = styled.Text`
    font-size: 20px;
    color: red;
    width: ${Dimensions.get('window').width}px;
    font-family: ${({ theme }) => theme.fonts.primary_900};
    text-transform: uppercase;
    padding: 20px 18px;
`;

export const ReloadButton = styled.Pressable`
    width: 120px;
    height: 44px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin: 0px 18px;
`;

export const ReloadButtonText = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ContainerText = styled.View`
    width: ${Dimensions.get('window').width / 3}px;
    `;