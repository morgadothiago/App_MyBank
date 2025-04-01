import IconPixSVG from "../../../assets/svg/pix";
import { Container, Icon, IconContainer, MenuTitle } from "./styles";

type ButtonsMenuProps = {
  title?: string | undefined;
  icon?: React.ReactNode;
  onPress?: () => void;
};

export const ButtonMenu: React.FC<ButtonsMenuProps> = ({
  icon,
  onPress,
  title,
}: ButtonsMenuProps) => {
  return (
    <Container onPress={onPress}>
      <IconContainer>
        <Icon>{icon}</Icon>
      </IconContainer>

      <MenuTitle>{title}</MenuTitle>
    </Container>
  );
};
