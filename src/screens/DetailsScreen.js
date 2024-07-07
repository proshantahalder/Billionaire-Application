import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

function DetailsScreen({ route }) {
  const { billionaire } = route.params;

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.gradient}
        />
        <Image source={{ uri: billionaire.image }} style={styles.backgroundImage} />
        <View style={styles.headerContent}>
          <Text style={styles.name}>{billionaire.name}</Text>
          <Text style={styles.company}>{billionaire.company}</Text>
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.netWorthContainer}>
          <Text style={styles.netWorthLabel}>Net Worth</Text>
          <Text style={styles.netWorthValue}>${billionaire.netWorth} Billion</Text>
        </View>
        
        <View style={styles.separator} />
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Biography</Text>
          <Text style={styles.description}>{billionaire.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 300,
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    zIndex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    zIndex: 2,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  company: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.8,
  },
  contentContainer: {
    padding: 20,
  },
  netWorthContainer: {
    marginBottom: 10,
  },
  netWorthLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  netWorthValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  descriptionContainer: {
    marginTop: 10,
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
});

export default DetailsScreen;