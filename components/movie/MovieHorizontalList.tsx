import { Movie } from "@/infrastructure/interfaces/movie";
import React from "react";
import { FlatList, Text } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
}
const MovieHorizontalList = ({ title, movies }: Props) => {
 
  const renterItem = ({ item }: { item: Movie }) => {
    return <MoviePoster id={item.id} poster={item.poster} smallPoster />;
  };

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
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default MovieHorizontalList;
