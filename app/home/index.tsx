import React from "react";

import { ActivityIndicator, Text, View } from "react-native";

import MainSlideshow from "@/components/movie/MainSlideshow";
import MovieHorizontalList from "@/components/movie/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();

  const {  topRatedQuery, nowPlayingData , upcomingMovies }= useMovies();

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
    <ScrollView >
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text style={{ fontFamily: "WorkSans-Black" }}  className="text-3xl font-bold px-4 mb-2 text-slate-950">
        Now Playing Movies
      </Text>
      <View>
        <MainSlideshow movies={nowPlayingData.data ?? []} />

      </View>
      <View  className='mt-8 mb-8 '>
        {/* <MovieHorizontalList
          title="Top Rated Movies"
          movies={[]}
        /> */}
      </View>

      <View  className='mt-8 mb-8 '>
        <MovieHorizontalList
          title="Upcoming Movies"
          movies={upcomingMovies.data ?? []}
          
        />
      </View>

       <View  className='mt-8 mb-8 '>
        <MovieHorizontalList
          title="Top Rated Movies"
          movies={ (topRatedQuery?.data?.pages ?? []).map(group => group?.data).flatMap(page => (page ? page : [])) }
         loadNextPage= { topRatedQuery.fetchNextPage}
       />
      </View>

    </View>
    </ScrollView>
  );
};

export default HomeScreen;
