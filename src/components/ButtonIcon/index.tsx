import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, ButtonIconTypeStyleProps } from './styles'
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  color?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, color = 'PRIMARY', ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon
        name={icon}
        color={color}
      />
    </Container>
  )
}
