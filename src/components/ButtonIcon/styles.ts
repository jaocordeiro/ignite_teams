import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  color: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme, color }: Props) => ({
  size: 24,
  color: color === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;