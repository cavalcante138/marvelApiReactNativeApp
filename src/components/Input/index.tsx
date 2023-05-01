import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'

import {
 Container,
 InputText,
 IconContainer,
 Label
} from './styles';
import { useTheme } from 'styled-components/native';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name']
    value?: string;
}

export const Input = ({
    iconName,
    value,
    testID,
    ...rest
}: Props) => {

  const [isFocused, setIsFocused] = useState(false);

  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  const handleIsInputFocus = () => {
    setIsFocused(true);
  }

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value)
  }

  return(
    <>
    <Label>Nome do Personagem</Label>
    <Container 
    isFocused={isFocused}
    testID={`${testID}-input-container`}
    >
        <InputText 
        onFocus={handleIsInputFocus}
        onBlur={handleInputBlur}
        value={value}
        {...rest} 
        testID={`${testID}-input`}
        />
        <IconContainer>
            <Feather 
            name={iconName}
            size={24}
            color={theme.colors.primary}
            />
        </IconContainer>
    </Container>
    </>
  );
}