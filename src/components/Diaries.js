import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import ContentKard from './ContentCardRound';

const { width: screenWidth } = Dimensions.get('window');

const Diaries = () => {
   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      const response = await fetch('https://playmoodserver-stg-0fb54b955e6b.herokuapp.com/api/users/creators', {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
      const jsonData = await response.json();
      if (Array.isArray(jsonData)) {
        setData(jsonData);
      } else {
        console.error('Response data is not an array:', jsonData);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching creators:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.headerText}>Channel</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <ContentKard item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
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
export default Diaries;
