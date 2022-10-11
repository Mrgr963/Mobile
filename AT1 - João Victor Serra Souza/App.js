import { Text, View, StyleSheet } from 'react-native';
import Questao01 from './components/Questao1/Questao01.jsx'
import Questao02 from './components/Questao2/Questao2.jsx'
import Questao03 from './components/Questao3/Questao03.jsx'
import Questao4_5 from './components/Questao4_5/Questao4_5.jsx'

export default function App() {
  return (
      <View style={styles.container}>
        <Questao01/>
        <Questao02/>
        <Questao03/>
        <Questao4_5/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


