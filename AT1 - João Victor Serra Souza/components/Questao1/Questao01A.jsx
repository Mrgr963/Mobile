import {View,Text,Button} from 'react-native'


const Questao01A = (props) => {
  return(
    <View>
    <Text>Nome:{props.nome}</Text> 
    <Text>Sobrenome: {props.sobrenome}</Text>
    <Text>Curso: {props.curso}</Text>
    {props.children}
    </View>
  )
}

export default Questao01A