import styled from "styled-components/native";
import { colors } from "../../themes/theme";
import { StatusBar } from "expo-status-bar";
import Constnts from "expo-constants";

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Header = styled.View`
  background-color: ${colors.primary};
  height: 25%;
  justify-content: center;
  align-items: center;
`;
export const ContainerHeader = styled.View`
  flex: 1;
  margin-top: ${Constnts.statusBarHeight};
`;

export const Content = styled.View`
  background-color: ${colors.secondary};
  flex: 1;
`;
export const IconArea = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
`;
export const UserWapper = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.13);
  width: 64px;
  height: 64px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
export const IconServices = styled.View`
  width: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.TouchableOpacity``;

export const UserInfo = styled.View``;
export const UserName = styled.Text`
  width: 85%;

  background-color: red;
`;
