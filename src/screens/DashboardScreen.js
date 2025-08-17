import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Pressable, Alert } from 'react-native';
import MobileHeader from '../components/MobileHeader';
import LikeSlider from '../components/LikeSlider';
import FavoriteSlider from '../components/FavoriteSlider';
import WatchlistSlider from '../components/WatchlistSlider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faHeart, faUser, faList, faStar, faEye } from '@fortawesome/free-solid-svg-icons';
import tw from 'tailwind-react-native-classnames'; 
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const [sliderType, setSliderType] = useState('likes');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigation.navigate('Home');
      console.log('logout success');
    });
  };

  const renderSlider = () => {
    switch (sliderType) {
      case 'likes':
        return <LikeSlider />;
      case 'favorites':
        return <FavoriteSlider />;
      case 'watchlist':
        return <WatchlistSlider />;
      default:
        return <LikeSlider />;
    }
  };

  return (
    <View style={tw`flex-1 bg-black`}>
      <MobileHeader />
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.content}>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/10.png')} style={styles.profileImage} />
          <Text style={styles.userName}>Charln</Text>
          <Text style={styles.changeAccount}>Edit Profile</Text>
          <Pressable style={styles.logOut} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </Pressable>
        </View>

        <View style={styles.adminButtons}>
          <Pressable style={styles.adminButton} onPress={() => navigation.navigate('AdminPage')}>
            <Text style={styles.buttonText}>Admin Page</Text>
          </Pressable>
          <Pressable style={styles.adminButton} onPress={() => navigation.navigate('ApplyAsCreator')}>
            <Text style={styles.buttonText}>Apply as a Creator</Text>
          </Pressable>
          <Pressable style={styles.adminButton} onPress={() => navigation.navigate('PostVideoForReview')}>
            <Text style={styles.buttonText}>Post a Video for Review</Text>
          </Pressable>
        </View>

        <View>
          <View style={styles.dashButton}>
            <Pressable style={styles.subButton} onPress={() => setSliderType('likes')}>
              <FontAwesomeIcon icon={faHeart} style={styles.icon} />
              <Text style={styles.buttonText}>Likes</Text>
            </Pressable>
            <Pressable style={styles.subButton} onPress={() => setSliderType('favorites')}>
              <FontAwesomeIcon icon={faStar} style={styles.icon} />
              <Text style={styles.buttonText}>Favorites</Text>
            </Pressable>
            <Pressable style={styles.subButton}>
              <FontAwesomeIcon icon={faUser} style={styles.icon} />
              <Text style={styles.buttonText}>For You</Text>
            </Pressable>
            <Pressable style={styles.subButton} onPress={() => setSliderType('watchlist')}>
              <FontAwesomeIcon icon={faEye} style={styles.icon} />
              <Text style={styles.buttonText}>Watchlist</Text>
            </Pressable>
          </View>

          <View style={styles.dashSlider}>
            {renderSlider()}
          </View>
        </View>

        <View>
          <View style={styles.dashButton}>
            <Text style={styles.slideText}>Donation | </Text>
            <Text style={styles.slideText}>Subscription | </Text>
            <Text style={styles.slideText}>Friends</Text>
          </View>
          {/* <FriendSlider data={Friendslider} /> */}
        </View>

        <View style={styles.boxHolder}>
          <View style={styles.boxText}>
            <Text style={styles.slideText}>Activities</Text>
          </View>
          <View style={styles.boxText}>
            <Text style={styles.slideText}>Manage Cookies</Text>
          </View>
          <View style={styles.boxText}>
            <Text style={styles.slideText}>Remove Cache</Text>
          </View>
        </View>

        <View style={styles.adminButtons}>
          <Pressable style={styles.adminButton} onPress={() => navigation.navigate('AdminPage')}>
            <Text style={styles.buttonText}>Admin Page</Text>
          </Pressable>
          <Pressable style={styles.adminButton} onPress={() => navigation.navigate('ApplyAsCreator')}>
            <Text style={styles.buttonText}>Apply as a Creator</Text>
          </Pressable>
          <Pressable style={styles.adminButton} onPress={() => navigation.navigate('PostVideoForReview')}>
            <Text style={styles.buttonText}>Post a Video for Review</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
  },
  content: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: 'black',
  },
  icon: {
    color: 'white',
    width: 5,
    height: 2,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
  },
  changeAccount: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
  },
  logOut: {
    marginVertical: 10,
    width: 70,
    height: 30,
    backgroundColor: '#541011',
    borderRadius: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'evenly',
    alignItems: 'center',
    paddingLeft: 35,
    marginTop: 35,
  },
  subButton: {
    width: 70,
    height: 40,
    backgroundColor: '#541011',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
  },
  dashSlider: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'evenly',
    alignItems: 'center',
    paddingLeft: 30,
    marginTop: 30,
  },
  slideText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  boxHolder: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    gap: 10,
  },
  boxText: {
    alignItems: 'center',
    width: 150,
    height: 70,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    justifyContent: 'center',
  },
  adminButtons: {
    marginTop: 20,
    alignItems: 'center',
  },
  adminButton: {
    width: 200,
    height: 40,
    backgroundColor: '#541011',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

