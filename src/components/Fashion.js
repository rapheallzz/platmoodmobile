import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import ContentCard from './ContentCard';

const { width: screenWidth } = Dimensions.get('window');

const Fashion = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://playmoodserver-stg-0fb54b955e6b.herokuapp.com/api/content/');
      const jsonData = await response.json();
      const top10Data = jsonData.filter(item => item.category === 'Top 10').slice(0, 10);
      setData(top10Data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.headerText}>Fashion</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <ContentCard item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 350,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 12,
    marginBottom: 5,
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    height: 600,
  },
  scrollViewContainer: {
    paddingHorizontal: 15,
  },
});

export default Fashion;
