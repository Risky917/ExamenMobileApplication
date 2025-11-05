// ItemCard
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const ItemCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: item.thumbnail }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>price: ${item.price}</Text>
      <Text style={styles.tags}>tags: {item.tags.join(', ')}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  image: { width: 60, height: 60, marginRight: 10 },
  info: { flex: 1, justifyContent: 'center' },
  title: { fontWeight: '700', color: '#ce0000' },
});

export default ItemCard;