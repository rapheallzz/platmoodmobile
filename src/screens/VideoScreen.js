import React, { useState }  from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import play from '../../assets/play-button2.png';
import Recommended from '../components/Recommended';
import Watching from '../components/Watching';
import playmood from '../../assets/PLAYMOOD_DEF.png';
import profile from '../../assets/icon-profile.png';
import { Video } from 'expo-av';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faHeart, faUser, faList, faStar, faEye, faBell, faDollarSign, faLink, faPlay  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { likeContent, addToFavorites } from '../features/contentSlice';

const VideoScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { title, credits, desc, movie, _id } = route.params;
  const user = useSelector((state) => state.user);
  const userId = user ? user._id : null;

  console.log('User state in video:', user);

  const handleNextPress = () => {
    navigation.navigate('NextVideoPage');
  };

  const handleTop10Press = () => {
    navigation.navigate('ContentDetails');
  };

  const handleLikePress = () => {
    if (userId) {
      dispatch(likeContent({ contentId: _id, userId }));
      console.log('pushed SUCCESSFULLY');
    } else {
      // Handle not logged in scenario
      console.log('User not logged in');
    }
  };

  const handleFavoritePress = () => {
    if (userId) {
      dispatch(addToFavorites({ contentId: id, userId }));
      console.log('pushed SUCCESSFULLY');
    } else {
      // Handle not logged in scenario
      console.log('User not logged in');
    }
  };



  return (
    <View style={styles.container}>
       
       <View style={styles.videoHeader}>
                     
                        
{/*                   
               <View style={styles.buggerHolder}>
               <Pressable>
                 <FontAwesome name="bars" size={30} color="white" />
               </Pressable>
               <MobileHarm/>
               </View> */}

      
             <View style={styles.titleHolder}>
              <Text style={styles.redTitle}> {title} </Text>
              </View>
             <View style={styles.imageHolder}>
              <Pressable  onPress={() => navigation.navigate('Home')}>
              <Image source={playmood} style={styles.logo} /> 
              </Pressable>
                    
                    {user && user._id && (

<                     Pressable  onPress={() => navigation.navigate('Dashboard')}>
                       <Image source={profile} style={styles.profileIcon} /> 
                       </Pressable>
                    )}



             </View>

         
       </View>

<ScrollView showsHorizontalScrollIndicator={false} style={styles.content}>
       
<View style={styles.videoContainer}>
  <Video
    style={styles.video}
    source={{
      uri: movie,
    }}
    useNativeControls
    resizeMode="contain"
    isLooping
    shouldPlay
  />
</View>


      <View style={styles.contentData}>
       
      <View style={styles.titleContainer}>
             
             <View>
                   
                    <Text style={styles.infoTitle}>Title: {title}</Text>  

                    <View style={styles.iconHolder}>
                       <View style={styles.flexIt}>
                       <FontAwesomeIcon icon={faEye} style={styles.icon} />
                       <Text style={styles.infobuttonText}>0</Text>
                       </View>
                       <View style={styles.flexIt}>
                       <FontAwesomeIcon icon={faHeart} style={styles.icon} />
                         <Text style={styles.infobuttonText}>0</Text>
                       </View>

                       <View>
                       <FontAwesomeIcon icon={faLink} style={styles.icon} />
                       </View>
                      </View>       
             </View>

          <View style={styles.buttonHolder}>
          <Pressable style={styles.subButton} onPress={handleNextPress}>
          <FontAwesomeIcon icon={faPlay} style={styles.icon} />
          <Text style={styles.buttonText}>Play Again</Text>
          </Pressable>
          <Pressable style={styles.subButton} onPress={handleNextPress}>
          <Text style={styles.buttonText}>NEXT VIDEO</Text>
          </Pressable>
          </View>



          <View style={styles.buttonHolder}>

          </View>

          <View style={styles.buttonHolder}>
          <Pressable style={styles.subButton} onPress={handleNextPress}>
          <Text style={styles.buttonText}>By: {credits}</Text>
          </Pressable>
          <Pressable style={styles.subButton} onPress={handleNextPress}>
          <FontAwesomeIcon icon={faDollarSign} style={styles.icon} />
          <Text style={styles.buttonText}>Donate</Text>
          </Pressable>
          <Pressable style={styles.subButton} onPress={handleNextPress}>
          <FontAwesomeIcon icon={faBell} style={styles.icon} />
          <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
          </View>


      </View>

      <View style={styles.titleContainer}>
          <View style={styles.navButton}>
              
          
          <Text style={styles.infobuttonText}>Information</Text>
      
           
          <Pressable style={styles.switchButton} onPress={handleNextPress}>
          <Text style={styles.nextbuttonText}>Production ~ Credits</Text>
         </Pressable>


          </View>

          <View style={styles.infoNav}>         
        <Text style={styles.credits}>{credits}</Text>
        <Text style={styles.description}>{desc}</Text>
          </View>
      </View>

      </View>

      {/* Title and Credits */}

      {/* Buttons */}
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.watchButton}>
          <Text style={styles.buttonText}>Watch From Beginning</Text>
        </TouchableOpacity>
      </View> */}
        <Pressable onPress={handleTop10Press}>
          <Recommended/> 
        </Pressable>
        <Pressable onPress={handleTop10Press}>
          <Watching/> 
        </Pressable>
        {/* <NewOnPlaymood data={newonplaymood} />
        <Channels data={channel} />
        <Diaries data={diaries} />
        <Spaces data={spaces} />
        <Recommended data={recommended} />
        <Interview data={interviews} /> */}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  videoHeader:{
   width: '100%',
   height: 90,
   flexDirection:'row',
   alignItems: 'center',
  },

  flexIt: {
    flexDirection:'row',
    gap: 5,
  },
  // buggerHolder : {
  // width:50,
  // height: 50,
  // paddingRight: 20,

  // },

  iconHolder: {
     flexDirection:'row',
      justifyContent:'space-evenly'
  },


  titleHolder:{
    width: 145,
    height: 40,
    backgroundColor: 'red',
    borderBottomRightRadius: 25,
    padding:6,
    marginHorizontal:20,

  } ,
  redTitle: {
      fontSize: 7.5,
      color:'white'
  },
  
  imageHolder : {
    width: 40,
    flexDirection:'row',
    alignItems: 'center',
    paddingLeft:10,
  },
  logo: {
    width: 110,
    height: 25,
  },
  profileIcon: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  
  },
  contentData:{
  
    width: '90%',
    height: 'auto', 
    flexDirection:'column',
    justifyContent:'center',
    marginVertical:20,
   
   
  },

  navButton:{
    width:200,
    height: 30, // Adjust height as needed
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:50,
  },

  nextButton: {
    width: 100,
    height: 30,
    backgroundColor: '#541011',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subButton: {
    width: 95,
    height: 30,
    flexDirection: 'row',
    backgroundColor: '#541011',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop:10,
    marginRight:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color:'white',
    fontSize: 5,
  },
  switchButton: {
    width: 120,
    height: 30,
    backgroundColor: '#541011',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop:10,
  },
  
  
  duration: {
    color: 'white',
    paddingVertical: 5,
    fontSize: 13,
  },
  playButton:{
    paddingVertical: 5,
  },

  playIcon: {
    width: 15,
    height: 15,
    borderRadius: 15,
  },
  playText: {
    color: 'white',
    fontSize: 13,
  },

  info:{
   color:'white',
   fontSize:20,
   marginBottom:15,
   marginTop:10,
  },
  infoTitle: {
    color: 'white',
    fontSize: 13,
  },

  titleContainer: {
   alignItems:'center',
  },
   
  infoNav :{
    marginTop: 50,
    marginHorizontal: 10,
  },

  buttonHolder: {
    flexDirection:'row'
  },

  title: {
    marginTop:50,
    color: 'white',
    fontSize: 13,
  },
  credits: {
    color: 'white',
    fontSize: 13,
  },
  description: {
    color: 'white',
    fontSize: 12,
    marginTop: 10,
    overflow: 'scroll',
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  watchButton: {
    backgroundColor: '#541011',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },


  buttonText: {
    color: 'white',
    fontSize: 9,
  },
  nextbuttonText: {
    color: 'white',
    fontSize: 9,
  },
  infobuttonText: {
    color: 'white',
    fontSize: 12,
  },
  content: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: 'black',
  },
});

export default VideoScreen;
