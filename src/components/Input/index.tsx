import { TextInput, TextInputProps } from 'react-native';
import { Container } from './styles';
import { useTheme } from 'styled-components';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({inputRef, ...rest }: Props) {
  const theme = useTheme;
  return (
    <Container
      ref={inputRef}
      placeholderTextColor='#7C7C8A'
      {...rest}
    />
  )
}
