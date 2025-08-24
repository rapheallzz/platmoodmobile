import React, { useState, useEffect } from 'react';
import { View, ScrollView, Pressable, Text, Dimensions } from 'react-native';
import MobileHeader from '../components/MobileHeader';
import { useNavigation } from '@react-navigation/native'; 
import LikeCard from '../components/LikeCard';
import NewOn from '../components/NewOn';
import Channel from '../components/Channel';
import Recommended from '../components/Recommended';
import Interview from '../components/Interviews';
import Diaries from '../components/Diaries';
import Spaces from '../components/Spaces';
import Top10Slider from '../components/TopSlider';
import Fashion from '../components/Fashion';
import Social from '../components/Social';
import Report from '../components/Report';
import Teen from '../components/Teen';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import Behind from '../components/Behind';

const { width } = Dimensions.get('window');
const isTV = width >= 1024;

export default function HomeScreen() {
  const navigation = useNavigation(); 
  const [likecard, setLikeCard] = useState([1]);
  const user = useSelector((state) => state.user);

  const handleTop10Press = () => {
    navigation.navigate('ContentDetails'); 
  };

  useEffect(() => {
    if (!user.id) {
      navigation.navigate('Login');
    }
  }, [user.id, navigation]);

  return (
    <View style={tw`flex-1 bg-black`}>
      <MobileHeader />
      <ScrollView showsHorizontalScrollIndicator={false} style={tw`flex-1 ml-10`}>
        <LikeCard data={likecard} />
        <View style={tw`flex mt-10`}> 
          {[Top10Slider, NewOn, Channel, Diaries, Spaces, Recommended, Interview, Fashion, Social, Report, Behind, Teen].map((Component, index) => (
            <Pressable 
              key={index} 
              onPress={handleTop10Press} 
              style={tw`mr-4 ${isTV ? 'p-4' : 'p-2'}`}> 
              <Component /> 
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
 