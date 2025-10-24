import { icons } from '@/constants/icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View className = "bg-primary flex-1 px-10">
      <View className="flex-1 justify-center items-center flex-col gap-5">
        <Image
          source={icons.person}
          className='size-24 rounded-full'
          resizeMode='contain'
        />
        <Text className='text-white text-2xl font-bold'>John Doe</Text>
        <Text className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

      </View>
    </View>
  )
}

export default Profile;