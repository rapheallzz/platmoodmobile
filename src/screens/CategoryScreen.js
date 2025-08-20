import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import MobileHeader from '../components/MobileHeader';
import tw from 'tailwind-react-native-classnames';
import axios from 'axios';
import ContentCard from '../components/ContentCard';

export default function CategoryScreen({ route }) {
  const { categoryName } = route.params;
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`https://playmoodserver-stg-0fb54b955e6b.herokuapp.com/api/content/category/${categoryName}`);
        setContent(response.data);
        setLoading(false);
      } catch (err) {
        // Fallback to fetching all content and filtering, in case the assumed endpoint is wrong
        try {
            const allContentResponse = await axios.get('https://playmoodserver-stg-0fb54b955e6b.herokuapp.com/api/content/');
            const filteredData = allContentResponse.data.filter(item => item.category === categoryName);
            setContent(filteredData);
        } catch (fallbackError) {
             setError(fallbackError);
        }
        setLoading(false);
      }
    };

    fetchContent();
  }, [categoryName]);

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
        <Text style={tw`text-white`}>Error fetching content: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-black`}>
      <MobileHeader />
      <View style={tw`flex-1 px-4`}>
        <Text style={tw`text-white text-2xl font-bold my-4 ml-6`}>{categoryName}</Text>
        <FlatList
          data={content}
          renderItem={({ item }) => <ContentCard item={item} />}
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={tw`justify-around`}
        />
      </View>
    </View>
  );
}
