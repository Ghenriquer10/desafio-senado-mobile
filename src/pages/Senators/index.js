import React, { Text, View, StyleSheet, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export default function Senators(){
    return(
        <View style={styles.container}>
            <View style={styles.search}>
                <View>
                    <Text style={styles.text}>Dados abertos</Text>
                </View>
                <View style={styles.searchView}>
                    <TextInput style={styles.searchField} placeholder={'Busque por sigla do estado ou partido'} placeholderTextColor={'gray'}/>
                    <EvilIcons name="search" size={24} color="white" />
                </View>
                <Text style={styles.text}>Senadores</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0095DA',
    },

    search:{
        padding: 10,
        justifyContent: 'center',
    },

    text:{
        color: '#fff',
    },

    searchView:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    searchField:{
        width: '90%',
        backgroundColor: '#005B9E',
        color: '#fff',
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 5,
    }
})