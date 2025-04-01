import { Text, View } from "react-native";
import {
  Container,
  Header,
  Content,
  IconArea,
  UserWapper,
  IconServices,
  Button,
  UserName,
  ContainerHeader,
} from "./styles";
import IconUserSVG from "../../../assets/svg/icon-user";
import IconQUestionSVG from "../../../assets/svg/question";
import IconOcultSVG from "../../../assets/svg/ocult";
import IconEmailSVG from "../../../assets/svg/email";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Thiago do nascimento morgado");
  return (
    <Container>
      <Header>
        <ContainerHeader>
          <IconArea>
            <UserWapper>
              <IconUserSVG width={32} height={32} />
            </UserWapper>

            <IconServices>
              <Button>
                <IconOcultSVG />
              </Button>
              <Button>
                <IconQUestionSVG />
              </Button>
              <Button>
                <IconEmailSVG />
              </Button>
            </IconServices>
          </IconArea>

          <UserName>Ola, {name}</UserName>
        </ContainerHeader>
      </Header>

      <Content></Content>
    </Container>
  );
}
