import {View,Text,Button,TextInput} from "react-native"
import {useState, useEffect} from "react"

const Questao03 = ()=> {

    const [id,setId] = useState(0)
    const [pokemon,setPokemon] = useState([])

    function aumentar(){
      setId(id + 20)
    }

    useEffect(
        ()=>{
           fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${id}`)
           .then((res)=>res.json())
           .then(
              (resultado) =>{
                setPokemon(resultado.results)
              }
           )
        }
    )

    return (
        <View style={{backgroundColor:'white', marginTop:200}}>
          <Text style={{
            fontSize:20,display:"flex" ,alignContent:'center', justifyContent:'center'}}  >Pokemons:</Text>
            { pokemon.map((number) => <Text style={{
            fontSize:15,display:"flex" ,alignContent:'center', justifyContent:'center'}} >{number.name}</Text>)}
            <Button title={'+10 pokemons'} onPress={aumentar}></Button>
        </View>
    )
}

export default Questao03