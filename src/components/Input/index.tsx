import { TextInputProps } from 'react-native';
import { Container } from './styles';
import { useTheme } from 'styled-components';

export function Input({ ...rest }: TextInputProps) {
  const theme = useTheme;
  return (
    <Container
      placeholderTextColor='#7C7C8A'
      {...rest}
    />
  )
}
