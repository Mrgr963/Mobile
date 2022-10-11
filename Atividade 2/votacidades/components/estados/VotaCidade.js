import { View, Text, Button } from 'react-native'
import {useState} from 'react'

const VotaCidade = () => {
const [quixas, setQuixas] = useState(0)
const [quixera, setQuixera] = useState(0)
const [ibicuis, setIbicuis] = useState(0)
const [cidade, setCidade] = useState('')

const acaoQuixas = () => {
  setQuixas(quixas+1)
  console.log ("Quixas: "+ quixas)
}

const acaoQuixera = () => {
  setQuixera(quixera+1)
  console.log ("Quixera: "+ quixera)
}

const acaoIbicuis = () => {
  setIbicuis(ibicuis+1)
  console.log ("Ibicuis: "+ ibicuis)
}

const mostrarCidade = () => {
  let i = 0

  if (i < quixas) {
    i = quixas
    setCidade("Quixadá")
  }

  if (i < quixera) {
    i = quixera
    setCidade("Quixeramobim")
  }

  if (i < ibicuis) {
    i = ibicuis
    setCidade("Ibicuitinga")
  }

  console.log(i)
  console.log(cidade)
}

    return (
        <View>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixadá: {quixas} </Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixeramobim: {quixera} </Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Ibicuitinga: {ibicuis} </Text>
            </View>
            <View
                style={{
                    flex:1,
                    flexDirection:'row'
                }}
            >
                <View style={{margin:5}}>
                    <Button title='Quixadá' onPress={acaoQuixas}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Quixeramobim' onPress={acaoQuixera}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Ibicuitinga' onPress={acaoIbicuis}/>
                </View>
            </View>
            <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Cidade mais votada: {cidade}</Text>
                </View>
            <View style={{margin:5}}>
                    <Button title='Cidade mais votada' onPress={mostrarCidade}/>
                </View>
        </View>
    )
}
export default VotaCidade