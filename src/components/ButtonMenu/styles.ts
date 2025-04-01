import styled from "styled-components/native";
import { colors } from "../../themes/theme";

export const Container = styled.Pressable`
  width: 73px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const IconContainer = styled.View`
  width: 73px;
  height: 73px;
  background-color: ${colors.ternary};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.View`
  width: 30px;
  height: 30px;
`;
export const MenuTitle = styled.Text`
  margin-top: 16px;
  font-family: ${colors.fonts.Roboto_500Medium};
  font-size: 14px;
`;
