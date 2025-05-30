import React from "react";
import { ActivityIndicator, Text, View } from "react-native";


import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();

  const { nowPlayingData }= useMovies();
  if( nowPlayingData.isLoading){
    return(
      <View className="flex-1 items-center justify-center">
       <ActivityIndicator
         size={ 40}
         color="purple" 
        />
      </View>
    )
  }
  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text style={{ fontFamily: "WorkSans-Black" }}  className="text-3xl font-bold px-4 mb-2 text-slate-950">
        Now Playing Movies
      </Text>
      <Text style={{ fontFamily: "WorkSans-Regular", fontSize: 16 }} className="text-slate-950">
        {
          JSON.stringify(nowPlayingData.data)
        }
      </Text>
    </View>
  );
};

export default HomeScreen;
