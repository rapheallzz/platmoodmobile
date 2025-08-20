import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, FlatList, ActivityIndicator } from 'react-native';
import MobileHeader from '../components/MobileHeader';
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';
import CreatorCard from '../components/CreatorCard';

export default function CreatorsScreen() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await axios.get('https://playmoodserver-stg-0fb54b955e6b.herokuapp.com/api/channels');
        setCreators(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

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
        <Text style={tw`text-white`}>Error fetching creators: {error.message}</Text>
        <Text style={tw`text-white`}>Assumed endpoint /api/channels might be incorrect.</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-black`}>
      <MobileHeader />
      <View style={tw`flex-1 px-4`}>
        <Text style={tw`text-white text-2xl font-bold my-4 ml-6`}>Creators</Text>
        <FlatList
          data={creators}
          renderItem={({ item }) => <CreatorCard creator={item} />}
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={tw`justify-around`}
        />
      </View>
    </View>
  );
}
