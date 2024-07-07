import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function BillionaireCard({ billionaire, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#1e3c72', '#2a5298']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.card}
      >
        <Image source={{ uri: billionaire.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{billionaire.name}</Text>
          <Text style={styles.netWorth}>${billionaire.netWorth}B</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 200,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  netWorth: {
    fontSize: 14,
    color: '#ffd700',
    marginTop: 5,
  },
});

export default BillionaireCard;