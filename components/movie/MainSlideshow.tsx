import React from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";


import { Movie } from "@/infrastructure/interfaces/movie";
import MoviePoster from "./MoviePoster";

interface MainSlideshowProps {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: MainSlideshowProps) => {
    const width = useWindowDimensions().width;
  return (
    
    <View className="h-[250px] w-full">
      <Carousel
      loop
        data={movies}
        width={200}
        height={350}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} />}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};

export default MainSlideshow;
