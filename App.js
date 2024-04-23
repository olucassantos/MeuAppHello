import { StyleSheet, Text, View } from 'react-native';
import BarraSuperior from './components/BarraSuperior'

export default function App() {
  return (
    <View style={styles.container}>
      <BarraSuperior />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
