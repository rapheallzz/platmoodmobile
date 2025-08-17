import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton } from 'react-share';

export default function CreatorChannel() {
    const navigation = useNavigation();
    const route = useRoute();
    
    const { creatorId, name, profileImage, bannerImage, subscribers } = route.params || {};
    
    const [subscribed, setSubscribed] = useState(false);
    const [spank, setSpank] = useState(false);
    const [data, setData] = useState([]);
  
    const handleSubscribeClick = () => {
      setSubscribed(!subscribed);
      setSpank(true);
      setTimeout(() => {
        setSpank(false);
      }, 1000);
    };
  
    useEffect(() => {
      if (!creatorId) {
        Alert.alert('Error', 'No creator information available');
        return;
      }
  
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://playmoodserver-stg-0fb54b955e6b.herokuapp.com/api/content`);
          const filteredData = response.data.filter(content => content.creatorId === creatorId);
          setData(filteredData);
        } catch (error) {
          Alert.alert('Error fetching data', error.message);
        }
      };
  
      fetchData();
    }, [creatorId]); 
  
    if (!creatorId) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>No creator data available.</Text>
        </View>
      );
    }
  
    return (
  
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: state.bannerImage }} style={styles.bannerImage} />
        <View style={styles.shareIcons}>
          <Pressable>
            <FontAwesome name="facebook" size={24} color="white" />
          </Pressable>
          <Pressable>
            <FontAwesome name="twitter" size={24} color="white" />
          </Pressable>
          <Pressable>
            <FontAwesome name="whatsapp" size={24} color="white" />
          </Pressable>
          <Pressable>
            <FontAwesome name="instagram" size={24} color="white" />
          </Pressable>
          <Pressable>
            <FontAwesome name="linkedin" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      <View style={styles.profileContainer}>
        <Image source={{ uri: state.profileImage }} style={styles.profileImage} />
        <View>
          <Text style={styles.creatorName}>{state.name}</Text>
          <Text style={styles.subscriberCount}>{state.subscribers} subscribers</Text>
        </View>
        <Pressable style={styles.subscribeButton} onPress={handleSubscribeClick}>
          <Text style={styles.subscribeText}>{subscribed ? 'Unsubscribe' : 'Subscribe'}</Text>
        </Pressable>
        <FontAwesome name="bell" size={24} color="white" />
      </View>

      <View style={styles.navLinks}>
        <Text style={styles.navLink}>HOME</Text>
        <Text style={styles.navLink}>VIDEOS</Text>
        <Text style={styles.navLink}>PLAYLIST</Text>
        <Text style={styles.navLink}>COMMUNITY</Text>
        <Text style={styles.navLink}>ABOUT</Text>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.contentTitle}>Contents</Text>
        <View style={styles.contentContainer}>
          {data.map((content) => (
            <Pressable key={content.id} onPress={() => handleCardClick(content)} style={styles.contentCard}>
              <Image source={{ uri: content.thumbnail }} style={styles.contentThumbnail} />
              <Text style={styles.contentTitle}>{content.title}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
  },
  bannerContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  shareIcons: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  creatorName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subscriberCount: {
    color: 'white',
    fontSize: 14,
  },
  subscribeButton: {
    backgroundColor: '#541011',
    padding: 10,
    borderRadius: 5,
  },
  subscribeText: {
    color: '#f3f3f3',
    fontSize: 12,
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  navLink: {
    color: 'white',
    fontSize: 14,
  },
  contentSection: {
    paddingHorizontal: 20,
  },
  contentTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contentCard: {
    width: 150,
    marginBottom: 20,
  },
  contentThumbnail: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
});
