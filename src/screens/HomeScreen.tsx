import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const products = [
  { id: 1, name: 'Shoes', price: 500 },
  { id: 2, name: 'Shirt', price: 250 },
  { id: 3, name: 'Bag', price: 750 },
];

export default function HomeScreen({ navigation }) {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.text}>{item.name} - ₱{item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  product: { padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 5 },
  text: { fontSize: 16, fontWeight: 'bold' },
});
