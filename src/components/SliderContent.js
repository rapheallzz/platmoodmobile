import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';



const Slidercontent = React.memo(function Slidercontent({ img, title, movie, id, desc, customStyle }) {
  const [hover, setHover] = useState(false);
  if (isError) {
    return <Text>Error: {message}</Text>;
  }

  const handleHover = () => {
    setHover(true);
  };

  const handleHoverOut = () => {
    setHover(false);
  };

  const titleSpliced = title.slice(0, 30) + '...';
  const description = desc.slice(0, 100) + '...';


  return (
    <View style={styles.container}>
      <Pressable activeOpacity={0.8} onPress={handleHover} onPressOut={handleHoverOut}>
        {hover ? (
          <View style={styles.videoHovered}>
            <View style={styles.videoHoveredTop}></View>
            <Image source={{ uri: movie }} style={styles.movieSlider} />
            <View style={styles.videoHoveredBottom}>
              <View style={styles.movieActionIcons}>
                <Pressable onPress={handleLikeClick}>
                  <FaPaperPlane color="white" style={styles.sendIcon} />
                </Pressable>
              </View>
              <Text style={[styles.title, customStyle]}>{titleSpliced}</Text>
              <Text>{description}</Text>
            </View>
          </View>
        ) : (
          <Image source={{ uri: img }} style={styles.imgMovies} />
        )}
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoHovered: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoHoveredTop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  movieSlider: {
    flex: 1,
    resizeMode: 'cover',
  },
  videoHoveredBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  movieActionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sendIcon: {
    fontSize: 24,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imgMovies: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Slidercontent;
