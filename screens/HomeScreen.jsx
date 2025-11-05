// HomeScreen
import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { fetchProducts } from '../api/api';
import ItemCard from '../components/ItemCard';
import SearchSortBar from '../components/SearchSortBar';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [sortBy, setSortBy] = useState('price');
  const [selectedTag, setSelectedTag] = useState(null);
  const [allTags, setAllTags] = useState([]);

  // Fetch products and tags
  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setFilteredProducts(data);
      setAllTags([...new Set(data.flatMap(p => p.tags))]);
    });
  }, []);

  // Filter and sort
  useEffect(() => {
    let filtered = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedTag) filtered = filtered.filter(p => p.tags.includes(selectedTag));

    filtered.sort((a, b) =>
      sortBy === 'price'
        ? (sortAsc ? a.price - b.price : b.price - a.price)
        : (sortAsc
            ? a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            : b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
    );

    setFilteredProducts(filtered);
  }, [products, search, selectedTag, sortBy, sortAsc]);

  const handleSort = type => {
    if (sortBy === type) setSortAsc(!sortAsc);
    else {
      setSortBy(type);
      setSortAsc(true);
    }
  };

  return (
    <View style={styles.container}>
      <SearchSortBar
        search={search}
        onSearch={setSearch}
        onSortPrice={() => handleSort('price')}
        onSortTitle={() => handleSort('title')}
        sortAsc={sortAsc}
        sortBy={sortBy}
        tags={allTags}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />

      <FlashList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onPress={() => navigation.navigate('Detail', { productId: item.id })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default HomeScreen;
