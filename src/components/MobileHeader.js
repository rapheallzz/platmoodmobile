import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import playmood from '../../assets/PLAYMOOD_DEF.png';
import profile from '../../assets/icon-profile.png';
import settings from '../../assets/settings-icon.png';
import settings_red from '../../assets/settings-red-icon.png';
import search from '../../assets/search.png';
import recommended from '../../assets/recommended.png';
import newp from '../../assets/newp.png';
import snowflakes from '../../assets/snowflakes.png';
import schedule from '../../assets/schedule.png';
import favourite from '../../assets/favourite.png';
import categories from '../../assets/categories.png';
import home from '../../assets/home.png';
import search_icon from '../../assets/search_white.png';
import search_red from '../../assets/search_red.png';
import thumbs from '../../assets/thumbs.png';
import thumbs_red from '../../assets/thumbs_red.png';
import location from '../../assets/location_white.png';
import home_red from '../../assets/home_red.png';
import newp_red from '../../assets/newp_red.png';
import snowflakes_red from '../../assets/snowflakes_red.png';
import location_red from '../../assets/location.png';
import schedule_white from '../../assets/schedule_white.png';
import schedule_red from '../../assets/schedule_red.png';
import plus from '../../assets/plus.png';
import plusbutton from '../../assets/plus-button.png';
import favourite_red from '../../assets/star_red.png';

export default function MobileHeader({ channels, set_channels }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleIconClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.mobileHeader}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={playmood} style={styles.logo} />
          </Pressable>
          {user && user._id && (
            <Pressable onPress={() => navigation.navigate('Dashboard')}>
              <Image source={profile} style={styles.profileIcon} />
            </Pressable>
          )}
          <Pressable onPress={toggleSidebar}>
            <FontAwesome name="bars" size={30} color="white" />
          </Pressable>
        </View>

        {/* Horizontal Navigation Links */}
        <View style={styles.navigation}>
          <Pressable style={styles.link} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.linkText}>HOME</Text>
          </Pressable>
          <Pressable style={styles.link}>
            <Text style={styles.linkText}>CHANNELS</Text>
          </Pressable>
          <Pressable style={styles.link}>
            <Text style={styles.linkText}>SCHEDULE</Text>
          </Pressable>
          <Pressable style={styles.link}>
            <Text style={styles.linkText}>SPACES</Text>
          </Pressable>
          <Pressable style={styles.link}>
            <Text style={styles.linkText}>STORIES</Text>
          </Pressable>
          <Pressable style={styles.link}>
            <Text style={styles.linkText}>DIARIES</Text>
          </Pressable>
        </View>
      </View>

      {/* Sidebar */}
      {sidebarOpen && (
        <View style={styles.sidebar}>
          <View style={styles.dropdownArea}>

            <Pressable onPress={handleIconClick}>
              <Image source={search_icon} style={styles.icon} />
            </Pressable>
            <Pressable onPress={handleIconClick}>
              <Image source={home} style={styles.icon} />
            </Pressable>
            <Pressable onPress={handleIconClick}>
              <Image source={thumbs} style={styles.icon} />
            </Pressable>
            <Pressable onPress={handleIconClick}>
              <Image source={newp} style={styles.icon} />
            </Pressable>
            <Pressable onPress={handleIconClick}>
              <Image source={snowflakes} style={styles.icon} />
            </Pressable>
            <Pressable onPress={handleIconClick}>
              <Image source={location} style={styles.icon} />
            </Pressable>
            <Pressable onPress={handleIconClick}>
              <Image source={schedule_white} style={styles.icon} />
            </Pressable>
            <Pressable onPress={handleIconClick}>
              <Image source={favourite} style={styles.icon} />
            </Pressable>
            <Pressable onPress={handleIconClick}>
              <Image source={categories} style={styles.icon} />
            </Pressable>
          </View>
        </View>
      )}

      {/* Modal for "Coming soon" message */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Coming soon on playmood App</Text>
            <Pressable style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mobileHeader: {
    height: 140,
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    position: 'relative',
    zIndex: 1001,
  },
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    width: '100%',
    height: 80,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 120,
    height: 30,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  link: {
    paddingHorizontal: 5,
  },
  linkText: {
    color: 'white',
    fontSize: 10,
  },
  sidebar: {
    position: 'absolute',
    top: 140, // Adjust based on header height
    left: 0,
    height: '100%',
    width: 200,
    zIndex: 1000,
    paddingVertical: 20,
  },
  dropdownArea: {
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    paddingHorizontal: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#541011',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
