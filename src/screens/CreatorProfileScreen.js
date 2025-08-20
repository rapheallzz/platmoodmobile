import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';
import CreatorContentList from '../components/CreatorContentList';

export default function CreatorProfileScreen({ route }) {
  const { creatorId } = route.params;
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('Videos');

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const response = await axios.get(`https://playmoodserver-stg-0fb54b955e6b.herokuapp.com/api/channel/${creatorId}`);
        setCreator(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCreator();
  }, [creatorId]);

  if (loading) {
    return (
      <View style={tw`flex-1 bg-black justify-center items-center`}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={tw`flex-1 bg-black justify-center items-center`}>
        <Text style={tw`text-white`}>Error fetching creator profile: {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={tw`flex-1 bg-black`}>
      {creator.bannerImage && (
        <Image source={{ uri: creator.bannerImage }} style={tw`w-full h-48`} />
      )}
      <View style={tw`p-4`}>
        <View style={tw`flex-row items-center`}>
          <Image source={{ uri: creator.profileImage }} style={tw`w-24 h-24 rounded-full`} />
          <View style={tw`ml-4`}>
            <Text style={tw`text-white text-2xl font-bold`}>{creator.name}</Text>
            <Text style={tw`text-gray-400`}>{creator.subscribers} subscribers</Text>
          </View>
        </View>
        <Text style={tw`text-white mt-4`}>{creator.about}</Text>
      </View>

      <View style={tw`flex-row justify-around my-4`}>
        <TouchableOpacity onPress={() => setActiveTab('Videos')}>
          <Text style={tw`text-white ${activeTab === 'Videos' ? 'font-bold border-b-2 border-white' : ''}`}>Videos</Text>
        </TouchableOpacity>
        {/* Add other tabs like Playlists, Community later */}
      </View>

      {activeTab === 'Videos' && (
        <CreatorContentList content={creator.content} />
      )}
    </ScrollView>
  );
}
