import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductItem = ({ product, onAddToCart, onUpdateQuantity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.name} - ₱{product.price}</Text>
      {onAddToCart ? (
        <Button title="Add to Cart" onPress={() => onAddToCart(product)} />
      ) : (
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => onUpdateQuantity(product.id, 1)} />
          <Button title="-" onPress={() => onUpdateQuantity(product.id, -1)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ProductItem;
