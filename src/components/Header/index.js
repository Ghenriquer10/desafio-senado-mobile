import React, { Image, View, StyleSheet, Text } from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/Logo/senadoLogo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#005B9E',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
        
    },

    logo:{
        height: 20,
        width: 151
    }
})