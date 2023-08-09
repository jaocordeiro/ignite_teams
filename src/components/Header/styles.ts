import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
  top: 8%;
`;

export const BackButton = styled.TouchableOpacity`
  top: 8%;
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;