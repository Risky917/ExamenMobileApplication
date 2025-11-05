// ProfileScreen
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Developer.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Mathias Vanneste</Text>
      <Text style={styles.bio}>Developer</Text>
      <Text style={styles.contact}>Email: mathias.vanneste2@student.vives.be</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  avatar: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 20 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  bio: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 5, 
    textAlign: 'center'
  },
  contact: { 
    fontSize: 14, 
    color: '#888' 
  }
});

export default ProfileScreen;
