import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import MobileHeader from '../components/MobileHeader';
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';
import ContentCard from '../components/ContentCard';

export default function WatchlistScreen() {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const { user, userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchWatchlist = async () => {
      if (!user || !userToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://playmoodserver-stg-0fb54b955e6b.herokuapp.com/api/content/watchlist/all', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setWatchlist(response.data.watchList || []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, [user, userToken]);

  if (loading) {
    return (
      <View style={tw`flex-1 bg-black justify-center items-center`}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={tw`flex-1 bg-black justify-center items-center`}>
        <Text style={tw`text-white text-lg mb-4`}>Please log in to see your watchlist.</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} color="#541011" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={tw`flex-1 bg-black justify-center items-center`}>
        <Text style={tw`text-white`}>Error fetching watchlist: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-black`}>
      <MobileHeader />
      <View style={tw`flex-1 px-4`}>
        <Text style={tw`text-white text-2xl font-bold my-4 ml-6`}>My Watchlist</Text>
        {watchlist.length > 0 ? (
          <FlatList
            data={watchlist}
            renderItem={({ item }) => <ContentCard item={item} />}
            keyExtractor={(item) => item._id}
            numColumns={2}
            columnWrapperStyle={tw`justify-around`}
          />
        ) : (
            <Text style={tw`text-white text-center mt-10`}>Your watchlist is empty.</Text>
        )}
      </View>
    </View>
  );
}
