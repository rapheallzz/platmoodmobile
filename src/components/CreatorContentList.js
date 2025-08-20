import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import ContentCard from './ContentCard'; // Assuming ContentCard can be reused

export default function CreatorContentList({ content }) {
  if (!content || content.length === 0) {
    return (
      <View style={tw`p-4`}>
        <Text style={tw`text-white text-center`}>No videos available.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={content}
      renderItem={({ item }) => (
        <View style={tw`w-1/2 p-1`}>
            <ContentCard item={item} />
        </View>
      )}
      keyExtractor={(item) => item._id}
      numColumns={2}
      style={tw`px-2`}
    />
  );
}
