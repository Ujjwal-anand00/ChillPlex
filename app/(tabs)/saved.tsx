import { icons } from '@/constants/icons';
import React from 'react';
import { Image, View } from 'react-native';

const Saved = () => {
  return (
    <View className = "bg-primary flex-1 px-10">
          <View className="flex-1 justify-center items-center flex-col gap-5">
            <Image
              source={icons.save}
              className='size-24 rounded-full'
              resizeMode='contain'
            />
    
          </View>
        </View>
  )
}

export default Saved;