import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function CartScreen({ navigation }) {
  const { cart, updateQuantity } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.text}>{item.name} - ₱{item.price} x {item.quantity}</Text>
            <View style={styles.buttons}>
              <Button title="+" onPress={() => updateQuantity(item.id, 1)} />
              <Button title="-" onPress={() => updateQuantity(item.id, -1)} />
            </View>
          </View>
        )}
      />
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  product: { padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 5 },
  text: { fontSize: 16, fontWeight: 'bold' },
  buttons: { flexDirection: 'row', justifyContent: 'space-between' },
});
