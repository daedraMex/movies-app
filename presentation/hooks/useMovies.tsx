import { nowPlayingAction } from "@/core/actions/now-playing.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () =>{
    const nowPlayingData = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24
  })
 
  return {
    nowPlayingData
  }
}

