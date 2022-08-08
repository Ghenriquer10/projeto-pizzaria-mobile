import React, { useState, useEffect } from 'react'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Modal,
    FlatList,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { api } from '../../services/api';
import { ModalPicker } from '../../components/ModalPicker';
import { ListItem } from '../../components/ListItem';

type RouteDetailParams = {
    Order: {
        table: number | string;
        order_id: string;
    }
}

export type CategoryProps = {
    id: string
    name: string
}

type ProductProps = {
    id: string
    name: string
}

type ItemProps = {
    id: string;
    product_id: string;
    name: string;
    amount: number | string
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>
export default function Order() {
    const navigation = useNavigation()
    const route = useRoute<OrderRouteProps>();
    const [category, setCategory] = useState<CategoryProps[] | []>([])
    const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>()
    const [qtdAmount, setQtdAmount] = useState('1');
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false)
    const [products, setProducts] = useState<ProductProps[] | []>([])
    const [productSelected, setProductSelected] = useState<ProductProps | undefined>()
    const [modalProductVisible, setModalProductVisible] = useState(false)
    const [items, setItem] = useState<ItemProps[]>([])
    useEffect(() => {
        async function loadCategory() {
            const response = await api.get('/category')
            setCategory(response.data)
            setCategorySelected(response.data[0])
        }

        loadCategory()
    }, [])

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/category/product', {
                params: {
                    category_id: categorySelected?.id
                }
            })
            setProducts(response.data)
            setProductSelected(response.data[0])
        }

        loadProducts()
    }, [categorySelected])

    async function handleDeleteTable() {
        try {
            await api.delete('/order', {
                params: {
                    order_id: route.params?.order_id
                }
            })

            navigation.goBack();

        } catch (err) {
            console.log('Algo deu errado' + err)
        }
    }

    function handleChangeCategory(item: CategoryProps) {
        setCategorySelected(item)
    }

    function handleChangeProduct(item: ProductProps) {
        setProductSelected(item)
    }

    // Adicionando produtos da mesa
    async function handleAdd() {
        const response = api.post('/order/item', {
            order_id: route?.params.order_id,
            product_id: productSelected?.id,
            amount: Number(qtdAmount)
        })

        let data = {
            id: (await response).data.id,
            product_id: productSelected?.id as string,
            name: productSelected?.name as string,
            amount: qtdAmount
        }
        setItem(oldArray => [...oldArray, data])
        setQtdAmount('1')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Mesa {route.params.table}</Text>
                {items.length === 0 && (
                    <TouchableOpacity onPress={handleDeleteTable}>
                        <Feather name='trash-2' size={35} color='red' />
                    </TouchableOpacity>
                )}
            </View>

            {category.length !== 0 && (
                <TouchableOpacity onPress={() => setModalCategoryVisible(true)} style={styles.input}>
                    <Text style={{ color: '#fff' }}>
                        {categorySelected?.name}
                    </Text>
                </TouchableOpacity>
            )}

            {products.length !== 0 && (
                <TouchableOpacity style={styles.input} onPress={() => setModalProductVisible(true)}>
                    <Text style={{ color: '#fff' }}>
                        {productSelected?.name}
                    </Text>
                </TouchableOpacity>
            )}

            <View style={styles.qtdContainer}>
                <Text style={styles.qtdText}>Quantidade:</Text>
                <TextInput
                    style={[styles.input, { width: '60%', textAlign: 'center', color: '#fff' }]}
                    placeholderTextColor={'#f0f0f0'}
                    keyboardType={'numeric'}
                    value={qtdAmount}
                    onChangeText={setQtdAmount}
                />
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonNext, { opacity: items.length === 0 ? 0.3 : 1 }]}
                    disabled={items.length === 0}
                >
                    <Text style={styles.text}>Avançar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginTop: 25 }}
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ListItem data={item} />}
            />

            <Modal
                transparent={true}
                visible={modalCategoryVisible}
                animationType={'fade'}
            >
                <ModalPicker
                    handleModalPicker={() => setModalCategoryVisible(false)}
                    options={category}
                    selectedItem={handleChangeCategory}
                />
            </Modal>

            <Modal
                transparent={true}
                visible={modalProductVisible}
                animationType={'fade'}
            >
                <ModalPicker
                    handleModalPicker={() => setModalProductVisible(false)}
                    options={products}
                    selectedItem={handleChangeProduct}
                />
            </Modal>
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