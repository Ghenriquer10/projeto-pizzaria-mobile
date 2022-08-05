import { useRoute, RouteProp } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

type RouteDetailParams = {
    Order: {
        table: number | string;
        order_id: string;
    }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>

export default function Order() {

    const [qtdOrder, setQtdOrder] = useState();

    const route = useRoute<OrderRouteProps>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Mesa {route.params.table}</Text>
                <Feather name='trash-2' size={35} color='red' />
            </View>
            <TouchableOpacity style={styles.input}>
                <Text style={{ color: '#fff' }}>Pizzas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.input}>
                <Text style={{ color: '#fff' }}>Pizzas de calabresa</Text>
            </TouchableOpacity>
            <View style={styles.qtdContainer}>
                <Text style={styles.qtdText}>Quantidade:</Text>
                <TextInput
                    style={[styles.input, { width: '60%', textAlign: 'center' }]}
                    placeholderTextColor={'#f0f0f0'}
                    keyboardType={'numeric'}
                    placeholder={'0'}
                    value={qtdOrder}
                    onChangeText={setQtdOrder}
                />
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonNext}>
                    <Text style={styles.text}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d2e',
        paddingVertical: 30,
        paddingHorizontal: 22
    },

    header: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 40
    },

    headerTitle: {
        color: '#fff',
        fontSize: 30,
        marginRight: 15
    },

    input: {
        backgroundColor: '#101026',
        height: 50,
        marginVertical: 10,
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    qtdContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },

    qtdText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },

    qtdInput: {

    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    buttonAdd: {
        height: 50,
        backgroundColor: '#33C4FF',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },

    buttonNext: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%'
    }
})