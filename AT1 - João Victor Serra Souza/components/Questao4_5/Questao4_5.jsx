import { View, Text, Image, Button, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

const Questao04_5 = ()=> {

    const [res,setRes] = useState([])
    const [paises,setPaises] = useState([])

    function calcular(){
      
      var pop = 0
      var i = 0

      for(var i=0;i<paises.length;i++){
        if( pop< paises[i].population){
          pop = paises[i].population
          posicao = i
          setRes(paises[i].name)
        }
      }
    }

    useEffect(
        ()=>{
           fetch(`https://restcountries.com/v2/region/africa?fields=name,population`)
           .then((result)=>result.json())
           .then(
              (res) =>{
                setPaises(res)
              }
           )
        }
    )

    return (
        <View style={{backgroundColor:'white', marginTop:200}}>
          <Text style={{
            fontSize:20,display:"flex" ,alignContent:'center', justifyContent:'center'}}  
          >Paises:</Text>
            {paises.map((number) => <Text style={{
            fontSize:15,display:"flex" ,alignContent:'center', justifyContent:'center'}}
            >{number.name} {number.pop}</Text>)}
            <Button title={'MAIOR PAÍS'} onPress={calcular}></Button>
            <Text style={{fontWeight:'bold', fontSize:20}}>Resultado:{res}</Text>
        </View>
    )
}

export default Questao04_5