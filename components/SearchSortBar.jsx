// SearchSortBar
import { View, TextInput, Button, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SearchSortBar = ({
  search,
  onSearch,
  onSortPrice,
  onSortTitle,
  sortAsc,
  sortBy,
  tags,
  selectedTag,
  onSelectTag
}) => (
  <View>
    {/* Search + Sort buttons */}
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={search}
        onChangeText={onSearch}
      />
      <Button
        title={sortBy === 'price' ? (sortAsc ? "Price ↑" : "Price ↓") : "Price"}
        onPress={onSortPrice}
      />
      <Button
        title={sortBy === 'title' ? (sortAsc ? "Title ↑" : "Title ↓") : "Title"}
        onPress={onSortTitle}
      />
    </View>

    {/* Tag filter */}
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tagContainer}
    >
      <TouchableOpacity
        style={[styles.tag, selectedTag === null && styles.tagSelected]}
        onPress={() => onSelectTag(null)}
      >
        <Text style={selectedTag === null ? styles.tagTextSelected : styles.tagText}>All</Text>
      </TouchableOpacity>
      {tags.map(tag => (
        <TouchableOpacity
          key={tag}
          style={[styles.tag, selectedTag === tag && styles.tagSelected]}
          onPress={() => onSelectTag(tag)}
        >
          <Text style={selectedTag === tag ? styles.tagTextSelected : styles.tagText}>{tag}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginBottom: 10, alignItems: 'center' },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 5,
  },
  tagContainer: { paddingLeft: 5, paddingVertical: 5 },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginRight: 8,
    alignSelf: 'flex-start',
  },
  tagSelected: {
    backgroundColor: '#ce0000',
  },
  tagText: { color: '#333', fontSize: 14 },
  tagTextSelected: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});

export default SearchSortBar;
