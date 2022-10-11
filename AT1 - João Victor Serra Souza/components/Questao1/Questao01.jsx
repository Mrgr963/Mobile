import React from 'react';
import {View,Text,Button} from 'react-native'
import Questao01A from './Questao01A.jsx'
import Questao01B from './Questao01B.jsx'

const Questao01 = () => {
  return(
    <View style={{backgroundColor:'white'}}>
      <Questao01A nome = ' João Victor' sobrenome = 'Serra Souza' curso = 'DD'/>
      <Questao01B/>
    </View>
  )
}

export default Questao01