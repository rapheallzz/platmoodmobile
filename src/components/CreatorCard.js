import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

export default function CreatorCard({ creator }) {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to CreatorProfileScreen, passing the creator id
    navigation.navigate('CreatorProfile', { creatorId: creator.id });
  };

  return (
    <Pressable onPress={handlePress} style={tw`w-48 m-2`}>
      <Image
        source={{ uri: creator.profile_image_url || 'https://via.placeholder.com/150' }}
        style={tw`w-48 h-48 rounded-full`}
      />
      <Text style={tw`text-white text-center mt-2 text-lg`}>{creator.name}</Text>
    </Pressable>
  );
}
