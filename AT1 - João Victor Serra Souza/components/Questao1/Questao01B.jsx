import {View,Text,Button} from 'react-native'

const Questao01B = () => {
  const lista = ["Mobile, Projeto 4, Design & Inovação"]

  return(
    <View>
    {lista.map((disciplina) => (
      <ul>{disciplina}</ul>
    ))}
    </View>
  )
}

export default Questao01B