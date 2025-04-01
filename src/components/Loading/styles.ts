import styled from "styled-components/native";
import { colors } from "../../themes/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({ size, color }) => ({
    size: size || "large",
    color: color || colors.secondary, // Define uma cor padrão a partir do objeto colors
  })
)``;
