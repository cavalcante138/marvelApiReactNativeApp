import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';

import {
 Container
} from './styles';
import { PressableProps } from 'react-native';

interface Props extends PressableProps{
    color?: string;
}

export function BackButton({color, ...rest}: Props){

  const theme = useTheme();

  return(
    <Container {...rest}>
        <MaterialIcons
        name="chevron-left"
        size={42}
        testID='back-button-icon'
        color={color ? color : theme.colors.primary}
        />
    </Container>
  );
}