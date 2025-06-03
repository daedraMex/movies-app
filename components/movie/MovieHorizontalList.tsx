import { Movie } from "@/infrastructure/interfaces/movie";
import React, { useEffect, useRef } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[] ;
  loadNextPage ?: () => void 
}
const MovieHorizontalList = ({ title, movies, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  const renterItem = ({ item }: { item: Movie }) => {
    return <MoviePoster id={item.id} poster={item.poster} smallPoster />;
  };
  const onScroll =(event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if ( isLoading.current ) return;

    const {contentOffset , layoutMeasurement, contentSize} = event.nativeEvent;

    const isCloseToEnd = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isCloseToEnd) return ;

    isLoading.current = true
    loadNextPage && loadNextPage()

  }
  
  useEffect(()=>{
    setTimeout(()=>{
      isLoading.current = false
    },1000)
  },[movies])

  return (
    <>
      {title && (
        <Text
          className="text-3xl font-bold px-4 mb-4 text-slate-950"
          style={{ fontFamily: "WorkSans-Black" }}
        >
          {title}
        </Text>
      )}

      <FlatList 
        horizontal 
        data={movies} 
        renderItem={renterItem}
         
        keyExtractor={(item,index) => `${index}-${item.id.toString()}`}
        onScroll={onScroll}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </>
  );
};

export default MovieHorizontalList;
