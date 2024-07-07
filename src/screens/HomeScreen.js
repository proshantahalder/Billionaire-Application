import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BillionaireCard from '../components/BillionaireCard';
import billionairesData from '../data/billionaires';

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <BillionaireCard
      billionaire={item}
      onPress={() => navigation.navigate('Details', { billionaire: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={billionairesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  listContent: {
    paddingHorizontal: 5,
    paddingTop: 15,
  },
});

export default HomeScreen;