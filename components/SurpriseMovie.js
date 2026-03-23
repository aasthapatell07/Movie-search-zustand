import { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

export default function SurpriseMovie(){

const [movie,setMovie] = useState(null);

const getMovie = () => {

const keywords = ["batman","marvel","love","war","space"];

const random = keywords[Math.floor(Math.random()*keywords.length)];

fetch(`https://www.omdbapi.com/?s=${random}&apikey=d467653e`)
.then(res=>res.json())
.then(data=>{
if(data.Search) setMovie(data.Search[0]);
});

}

return(
<View style={styles.container}>

<Text style={styles.heading}>🎲 Surprise Movie</Text>

<Button title="Pick Random Movie" onPress={getMovie}/>

{movie && (
<View style={styles.card}>
<Image source={{uri:movie.Poster}} style={styles.poster}/>
<Text>{movie.Title}</Text>
</View>
)}

</View>
)
}

const styles = StyleSheet.create({
container:{marginVertical:15,alignItems:"center"},
heading:{fontSize:20,fontWeight:"bold"},
poster:{width:200,height:300,marginTop:10,borderRadius:10},
card:{alignItems:"center"}
});