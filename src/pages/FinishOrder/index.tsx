import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function FinishOrder() {
    return (
        <View style={styles.container}>
            <Text style={styles.alert}>Deseja finalizar esse pedido?</Text>
            <Text style={styles.title}>Mesa 30</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Finalizar Pedido</Text>
                <Feather size={20} color={"#1d1d2e"} name="shopping-cart" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d2e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '5%',
        paddingHorizontal: '4%'
    },

    alert: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 12
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },

    button: {
        backgroundColor: '#3fffa3',
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    textButton: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 8
    }
})