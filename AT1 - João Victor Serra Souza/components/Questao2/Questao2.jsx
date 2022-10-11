import {View,Text,Button,TextInput} from 'react-native'
import { useState } from 'react'

const Questao02 = () => {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [res,setRes] = useState(0)

  function somar() {
    let x1 = parseInt(n1)
    let x2 = parseInt(n2)
    setRes(x1+x2)
  }

  function subtrair() {
    let x1 = parseInt(n1)
    let x2 = parseInt(n2)
    setRes(x1-x2)
  }

  function multiplicar() {
    let x1 = parseInt(n1)
    let x2 = parseInt(n2)
    setRes(x1*x2)
  }

  function dividir() {
    let x1 = parseInt(n1)
    let x2 = parseInt(n2)
    setRes(x1/x2)
  }

  return(
    <View>

    <View style={{flex:1, flexDirection:'row', alignContent:'center', justifyContent:'center', marginTop:200 }}>
    <View style={{margin:5}}>
      <TextInput style={{backgroundColor:'white'}}
        placeholder={"N1"}
        onChangeText= {(txt)=> setN1(txt)}
      />
    </View>

    <View style={{margin:5}}>
    <TextInput style={{backgroundColor:'white'}}
        placeholder={"N2"}
        onChangeText= {(txt)=> setN2(txt)}
      />
    </View>
    </View>

    <View style={{
      flex:1, flexDirection:'row', alignContent:'center', justifyContent:'center'
      }}>

      <View style={{margin:5}}>
        <Button title = "+" onPress={somar}/>
      </View>
      <View style={{margin:5}}>
        <Button title = "-" onPress={subtrair}/>
      </View>
      <View style={{margin:5}}>
        <Button title = "*" onPress={multiplicar}/>
      </View>
      <View style={{margin:5}}>
        <Button title = "/" onPress={dividir}/>
      </View>
      </View>

      <View>
      <Text>Resultado: {res}</Text>
      </View>
    
    </View>
  )
}

export default Questao02