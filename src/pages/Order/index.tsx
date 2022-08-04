import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

type RouteDetailParams = {
    Order: {
        table: number | string;
        order_id: string;
    }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>

export default function Order() {

    const route = useRoute<OrderRouteProps>();

    return (
        <View style={styles.container}>
            <Text>Página Order</Text>
            <Text>{route.params.table}</Text>
            <Text>{route.params.order_id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})