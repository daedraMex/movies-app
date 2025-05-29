import React from 'react';
import { Text, View } from 'react-native';
import "./../global.css";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center  bg-cyan-500">
      <Text className="text-white">Hola</Text>
    </View>
  )
}

export default RootLayout