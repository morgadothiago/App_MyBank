import { View } from 'react-native';
import { Container, LoadingIndicator } from './styles';
import { colors } from '../../themes/theme';

export default function Loading() {
  return (
    <Container>
      <LoadingIndicator />
    </Container>
  );
}