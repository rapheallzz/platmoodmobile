import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

const ContentCard = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the VideoScreen and pass the content ID, title, etc.
    navigation.navigate('VideoScreen', {
      _id: item._id,  // Content ID
      title: item.title,
      credits: item.credit,
      desc: item.description,
      movie: item.video,
    });
  };

  return (
    <Pressable onPress={handlePress} style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{item.title}</Text>
      {/* Like and favorite buttons remain the same */}
      <View style={styles.actions}>
        <Pressable style={styles.actionButton}>
          <FontAwesomeIcon icon={faHeart} style={styles.icon} />
        </Pressable>
        <Pressable style={styles.actionButton}>
          <FontAwesomeIcon icon={faStar} style={styles.icon} />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  thumbnail: {
    width: 120,
    height: 180,
  },
  title: {
    width: 100,
    color: 'white',
    fontSize: 10,
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  actionButton: {
    marginHorizontal: 10,
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
});

export default ContentCard;
