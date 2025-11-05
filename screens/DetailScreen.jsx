// DetailScreen
import { useState, useEffect } from 'react';
import { Text, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { fetchProductDetail } from '../api/api';

const DetailScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('DetailScreen mounted');
    fetchProductDetail(productId)
      .then(setProduct)
      .catch(() => setError('Failed to fetch detail'))
      .finally(() => setLoading(false));

    return () => console.log('DetailScreen unmounted');
  }, [productId]);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.tags}>Tags: {product.tags.join(', ')}</Text>
      <Text style={styles.desc}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 5,
  },
  category: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  tags: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  desc: {
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DetailScreen;
