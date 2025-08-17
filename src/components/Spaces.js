import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ContentKard from './ContentCardRound';

const { width: screenWidth } = Dimensions.get('window');

const Spaces = () => {
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
      <Text style={styles.headerText}>Spaces</Text>
      <Carousel
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <ContentKard item={item} />
          </View>
        )}
        width={screenWidth}
        height={500}
        loop={true}
        autoPlay={true}
        autoPlayInterval={3000}
        style={styles.carousel}
      />
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
    marginBottom:5,

  },
  itemContainer: {
    alignItems: 'center',
    height:600,
  },
  numberingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 25,
    marginBottom: 5,
  },
  numberingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  carousel: {
    paddingLeft: 15,
  },
});

export default Spaces;
