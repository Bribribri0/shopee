import React, { useContext } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function CheckoutScreen({ navigation }) {
  const { cart, clearCart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.name} - ₱{item.price} x {item.quantity}</Text>
        )}
      />
      <Text style={styles.total}>Total: ₱{totalPrice}</Text>
      <Button
        title="Checkout"
        onPress={() => {
          Alert.alert('Checkout Successful', '', [{ text: 'OK', onPress: () => {
            clearCart();
            navigation.navigate('Home');
          }}]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  text: { fontSize: 16 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
});
