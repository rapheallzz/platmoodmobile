import React, { useState } from 'react';
import { Modal, View, Text, Image, Button, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { addToWatchlist, likeContent } from '../features/contentSlice';
import ShareModal from './ShareModal';

const ContentDetailsModal = ({ visible, onClose, content }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [shareModalVisible, setShareModalVisible] = useState(false);

  if (!content) {
    return null;
  }

  const handlePlay = () => {
    onClose(); // Close this modal before navigating
    navigation.navigate('Video', { videoUrl: content.video, title: content.title });
  };

  const handleAddToWatchlist = () => {
    dispatch(addToWatchlist(content._id));
    // Optionally, provide feedback to the user
  };

  const handleLike = () => {
    dispatch(likeContent(content._id));
    // Optionally, provide feedback to the user
  };

  const handleShare = () => {
    setShareModalVisible(true);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView>
            <Image source={{ uri: content.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.description}>{content.description}</Text>

            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={handlePlay}><Text style={styles.buttonText}>Play</Text></Pressable>
              <Pressable style={styles.button} onPress={handleAddToWatchlist}><Text style={styles.buttonText}>+ Watchlist</Text></Pressable>
              <Pressable style={styles.button} onPress={handleLike}><Text style={styles.buttonText}>Like</Text></Pressable>
              <Pressable style={styles.button} onPress={handleShare}><Text style={styles.buttonText}>Share</Text></Pressable>
            </View>

             <Pressable style={[styles.button, styles.closeButton]} onPress={onClose}>
                <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </ScrollView>

          <ShareModal
            visible={shareModalVisible}
            onClose={() => setShareModalVisible(false)}
            contentTitle={content.title}
            contentUrl={content.video} // Assuming content.video is the shareable URL
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    maxHeight: '80%',
  },
  thumbnail: {
    width: 300,
    height: 170,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: 'white',
    textAlign: 'justify',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  button: {
      backgroundColor: '#541011',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginHorizontal: 5,
  },
  buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  },
  closeButton: {
      marginTop: 10,
      backgroundColor: '#2196F3',
  }
});

export default ContentDetailsModal;
