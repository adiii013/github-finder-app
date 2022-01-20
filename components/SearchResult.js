import React from "react";
import { View , TextInput , StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

function SearchResult({term,newTermChange}){
    
    return(
        <View style = {styles.container}>
           <Feather name="search" style={styles.iconSearch}></Feather>
            <TextInput 
            style={styles.searchInputBar} 
            placeholder="Username"
            onChangeText={newTerm=>newTermChange(newTerm)}
            defaultValue={term}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:15,
        borderRadius:15,
        backgroundColor:'#F0EEEE',
        height:45,
        marginTop:20,
        marginBottom:10
    },
    iconSearch:{
        alignSelf:'center',
        fontSize:25,
        marginLeft:5
    },
    searchInputBar:{
        marginLeft:5,
        padding:5,
        fontSize:18,
        flex:1
    }
})

export default SearchResult;