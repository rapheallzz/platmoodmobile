import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon from react-native-vector-icons
// import { GiHamburgerMenu } from 'react-icons/gi'; // This should be replaced with a suitable React Native icon library
import { useNavigation } from '@react-navigation/native';
import playmood from '../assets/PLAYMOOD_DEF.png';
import profile from '../assets/icon-profile.png';
import settings from '../assets/settings-icon.png';
import settings_red from '../assets/settings-red-icon.png';
import search from '../assets/search.png';
import recommended from '../assets/recommended.png';
import newp from '../assets/newp.png';
import snowflakes from '../assets/snowflakes.png';
import schedule from '../assets/schedule.png';
import favourite from '../assets/favourite.png';
import categories from '../assets/categories.png';
import home from '../assets/home.png';
import search_icon from '../assets/search_white.png';
import search_red from '../assets/search_red.png';
import thumbs from '../assets/thumbs.png';
import thumbs_red from '../assets/thumbs_red.png';
import location from '../assets/location_white.png';
import home_red from '../assets/home_red.png';
import newp_red from '../assets/newp_red.png';
import snowflakes_red from '../assets/snowflakes_red.png';
import location_red from '../assets/location.png';
import schedule_white from '../assets/schedule_white.png';
import schedule_red from '../assets/schedule_red.png';
import plus from '../assets/plus.png';
import plusbutton from '../assets/plus-button.png';
import favourite_red from '../assets/star_red.png';
import SidebarSlider from './SliderSidebar';



export default function MobileHarm({ channels, set_channels }) {
  const [dropbar, set_drop_bar] = useState(false);
  const [top, set_top] = useState(false);
  const [settings_hover, set_settings_hovered] = useState(true);
  const [search_hover, set_search_hover] = useState(true);
  const [home_hover, set_home_hover] = useState(true);
  const [thumbs_hover, set_thumbs_hover] = useState(true);
  const [new_hover, set_new_hover] = useState(true);
  const [snowflakes_hover, set_snow_flakes] = useState(true);
  const [location_hover, set_location_flakes] = useState(true);
  const [schedule_hover, setschedule_hover] = useState(true);
  const [favourites_hover, set_favourites_hover] = useState(true);
  const [categories_hover, set_categories_hover] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mountcategory, set_mountcategory] = useState(false);

  const navigation = useNavigation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const handle_hovered_settings = () => {
    set_settings_hovered(!settings_hover);
  };

  const handle_hovered_settings_out = () => {
    set_settings_hovered(!settings_hover);
  };

  const handle_search_hover = () => {
    set_search_hover(!search_hover);
  };

  const handle_search_hover_out = () => {
    set_search_hover(!search_hover);
  };

  const handle_home_hover = () => {
    set_home_hover(!home_hover);
  };

  const handle_home_hover_out = () => {
    set_home_hover(!home_hover);
  };

  const handle_thumbs_hover = () => {
    set_thumbs_hover(!thumbs_hover);
  };

  const handle_thumbs_hover_out = () => {
    set_thumbs_hover(!thumbs_hover);
  };

  const handle_newp_hover = () => {
    set_new_hover(!new_hover);
  };

  const handle_newp_hover_out = () => {
    set_new_hover(!new_hover);
  };

  const handle_snowflakes_hover = () => {
    set_snow_flakes(!snowflakes_hover);
  };

  const handle_snowflakes_hover_out = () => {
    set_snow_flakes(!snowflakes_hover);
  };

  const handle_location_hover = () => {
    set_location_flakes(!location_hover);
  };

  const handle_location_hover_out = () => {
    set_location_flakes(!location_hover);
  };

  const handle_schedule_hover = () => {
    setschedule_hover(!schedule_hover);
  };

  const handle_schedule_hover_out = () => {
    setschedule_hover(!schedule_hover);
  };

  const handle_favourites_hover = () => {
    set_favourites_hover(!favourites_hover);
  };

  const handle_favourites_hover_out = () => {
    set_favourites_hover(!favourites_hover);
  };

  const handle_category_hover_out = () => {
    set_categories_hover(!categories_hover);
  };

  const handle_category_hover = () => {
    set_categories_hover(!categories_hover);
  };

  const handle_mountcategory = () => {
    set_mountcategory(!mountcategory);
  };

  return (
    <View style={styles.mobileHeader}>
   {/* Container for Logo and Navigation */}
   <View style={styles.container}>

    </View>

  
  <View style={styles.sidebar}>
    <Pressable onPress={toggleSidebar}>
      <FontAwesome name="bars" size={30} color="white" />
    </Pressable>
  </View>


    </View>
  );
}

const styles = StyleSheet.create({
  mobileHeader: {
    height: 140,
    width: '10%',
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1001,
  },
  container: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-between',
    flex: 1, 
  },

  logoContainer: {
    width: '100%',
     height: 80,
     marginLeft:100,
     marginTop:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  logo: {
    width: 120,
    height: 30,
    paddingLeft:20,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom:20,
    paddingLeft:90,
  },
  link: {
    paddingHorizontal: 5,
  },
  linkText: {
    color: 'white',
    fontSize: 10,
  },
  sidebar: {
    height: 900,
    width: 50,
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    paddingTop:5,
    top: 380,
    left: -6,
    zIndex: 1001,
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
    marginTop:30,
  },
  sidebarClicked: {
    // Add styles when sidebar is closed
  },
});