import React from "react";
import { Text, View } from "react-native";


import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();

  const { nowPlayingData }= useMovies();

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text style={{ fontFamily: "WorkSans-Black", fontSize: 24 }}  className="text-slate-950">
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
