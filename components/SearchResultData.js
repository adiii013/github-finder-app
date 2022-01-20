import React, { useState } from "react";
import { View, Image, StyleSheet, Button, Text, ScrollView } from "react-native";
import SearchResult from "./SearchResult";
import config from '../congif';

function SearchResultData() {

    const [initialArray, finalArray] = useState({
        public_repos: '0',
        public_gists: '0',
        followers: '0',
        following: '0',
        img_url: ''
    });
    const [initialName, finalName] = useState('');

    async function getData() {
        let url = `https://api.github.com/users/${initialName}?client_id=${config.API_KEY}&client_secret=${config.CLIENT_SECRET}`
        let data = await fetch(url);
        let changeData = await data.json();
        finalArray({
            "public_repos": changeData.public_repos,
            "public_gists": changeData.public_gists,
            "followers": changeData.followers,
            "following": changeData.following,
            "img_url": changeData.avatar_url
        });
    }

    return (
        <ScrollView style={{backgroundColor:'white' , flex:1}}>

            <View>
            <SearchResult
                    initialName={initialName}
                    newTermChange={newTerm => finalName(newTerm)}
                ></SearchResult>
                <View style={{ width: 100, alignSelf: 'center' }}>
                    <Button title="Search" onPress={getData} ></Button>
                </View>
            </View>
           
            <View style={styles.mainConatiner}>
                

                
                <View style={styles.container}>
                    <Image source={{ uri: initialArray.img_url }}
                        style={styles.imgContainer}
                    ></Image>

                    <View style={styles.infoData}>
                        <Text style={styles.infoDataText}>Public Repos:{initialArray.public_repos}</Text>
                        <Text style={styles.infoDataText}>Public Gists:{initialArray.public_gists}</Text>
                        <Text style={styles.infoDataText}>Followers:{initialArray.followers}</Text>
                        <Text style={styles.infoDataText}>Following:{initialArray.following}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainConatiner: {
        alignSelf: 'center',
        marginTop: 38
    },

    container: {
        flexDirection: 'row',
    },

    imgContainer: {
        width: 150,
        height: 150,
        borderRadius: 20
    },
    infoData: {
        justifyContent: 'space-evenly',
        marginLeft: 30,
    },

    infoDataText: {
        fontSize: 18
    }
})

export default SearchResultData;