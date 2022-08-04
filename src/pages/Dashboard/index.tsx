import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext'

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de pedido</Text>
            <TextInput keyboardType={'numeric'} style={styles.textInput} placeholderTextColor={'#fff'} placeholder={'Numero da mesa'} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Adicionar mesa</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d1d2e'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0cf110',
        marginVertical: 10,
        fontFamily: 'monospace'
    },

    textInput: {
        height: 40,
        width: '95%',
        backgroundColor: '#000',
        paddingHorizontal: 10,
        marginVertical: 10,
        textAlign: 'center',
    },

    button: {
        width: '95%',
        height: 40,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 10
    },

    textButton: {
        color: '#ffffff',
        fontSize: 20
    }
})