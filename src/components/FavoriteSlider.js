import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ContentCard from './ContentCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikedContent } from '../features/contentSlice';


const { width: screenWidth } = Dimensions.get('window');

const LikeSlider = () => {
  const dispatch = useDispatch();
  const { likes, isLoading, isError, message } = useSelector(state => state.content);
  const { user } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && user._id) {
      dispatch(fetchLikedContent(user._id));
    }
  }, [dispatch, user]);

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }


  return (
    <View style={styles.sliderContainer}>
      {isLoading ? (
        <Text style={styles.message}>Loading...</Text>
      ) : isError ? (
        <Text style={styles.message}>Error: {message}</Text>
      ) : (
        <Carousel
        data={likes}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <ContentCard item={item} />
          </View>
        )}
        width={screenWidth}
        height={500}
        loop={true}
        autoPlay={true}
        autoPlayInterval={3000}
        style={styles.carousel}
      />
      )}
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
  message: {
    color: 'white',
    fontSize: 20,
    marginLeft: 40,
    marginTop: 12,
    marginBottom: 15,
  },
});

export default LikeSlider;
