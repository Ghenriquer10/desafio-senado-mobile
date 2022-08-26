import React, { StyleSheet, Text, View } from 'react-native'

export default function Senator(){
    return(
        <View style={styles.container}>
            <View style={styles.search}>
                <Text>Dados abertos</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },

    search:{
        backgroundColor: '#0095DA'
    }
})