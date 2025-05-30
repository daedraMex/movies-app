import { Image } from "expo-image";
import React from "react";
import { Pressable } from "react-native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}
const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
  const handlePress = () => {
    console.log("Movie ID:", id);
  };

  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
      onPress={handlePress}
    >
      <Image
        source={{ uri: poster }}
        className="shadow-lg  rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        contentFit="cover"
        transition={1000}
      />
    </Pressable>
  );
};

export default MoviePoster;
