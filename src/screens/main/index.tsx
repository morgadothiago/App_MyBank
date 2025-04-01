import { Alert, FlatList, Text, View } from "react-native";
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
  ContainerMoney,
  MoneyTitle,
  MoneyAmount,
  ContainerMenuList,
  MoneyBlur,
} from "./styles";
import IconUserSVG from "../../../assets/svg/icon-user";
import IconQUestionSVG from "../../../assets/svg/question";
import IconOcultSVG from "../../../assets/svg/ocult";
import IconEmailSVG from "../../../assets/svg/email";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../themes/theme";
import { ButtonMenu } from "../../components/ButtonMenu";
import IconPixSVG from "../../../assets/svg/pix";
import IconPagarSVG from "../../../assets/svg/pagar";
import IconTranferenciaSVG from "../../../assets/svg/transferencia";
import IconDepositarSVG from "../../../assets/svg/depositar";
import IconRecargaSVG from "../../../assets/svg/recarga";

export default function Home() {
  const [name, setName] = useState("Thiago do nascimento morgado");
  const [showAmount, setShowAmount] = useState(true);

  const itemMenu = [
    {
      id: 1,
      name: "Area pix",
      icon: <IconPixSVG />,
    },
    {
      id: 2,
      name: "Pagar",
      icon: <IconPagarSVG />,
    },
    {
      id: 3,
      name: "Transferir",
      icon: <IconTranferenciaSVG />,
    },
    {
      id: 4,
      name: "Depositar",
      icon: <IconDepositarSVG />,
    },
    {
      id: 5,
      name: "Recaregar",
      icon: <IconRecargaSVG />,
    },
  ];

  function handleShowAmount() {
    setShowAmount(!showAmount);
  }
  return (
    <Container>
      <Header>
        <ContainerHeader>
          <IconArea>
            <UserWapper>
              <IconUserSVG width={32} height={32} />
            </UserWapper>

            <IconServices>
              <Button onPress={handleShowAmount}>
                {showAmount ? (
                  <IconOcultSVG />
                ) : (
                  <Feather name="eye" size={32} color={colors.secondary} />
                )}
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

      <Content>
        <ContainerMoney>
          <MoneyTitle>Conta</MoneyTitle>
          {!showAmount ? <MoneyAmount>R$ 3,000.00</MoneyAmount> : <MoneyBlur />}
        </ContainerMoney>

        <ContainerMenuList>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={itemMenu}
            renderItem={({ item }) => (
              <ButtonMenu
                title={item.name}
                icon={item.icon}
                onPress={() => Alert.alert("Esta clicando no item", item.name)}
              />
            )}
          />
        </ContainerMenuList>
      </Content>
    </Container>
  );
}
