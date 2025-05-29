import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { nowPlayingAction } from "@/core/actions/now-playing.action";

import { useFonts } from "expo-font";


import "./../global.css";

const RootLayout = () => {
   const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("./../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Medium": require("./../assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Regular": require("./../assets/fonts/WorkSans-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

    nowPlayingAction()
    .then((response) => {
      console.log(response);
    })
  
  return (
    <View className="flex-1 items-center justify-center  bg-cyan-500">
      <Text className="text-white " style={{fontFamily: "WorkSans-Black"}}>Hola</Text>
    </View>
  )
}

export default RootLayout