import { nowPlayingAction } from "@/core/actions/now-playing.action";
import { topRatedAction } from "@/core/actions/top-rated.action";
import { upcomingAction } from "@/core/actions/upcoming.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () =>{
    const nowPlayingData = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24
  })
  
   const topRatedData = useQuery({
      queryKey: ['movies', 'topRated'],
      queryFn: () => topRatedAction(), // Replace with actual top-rated action
      staleTime: 1000 * 60 * 60 * 24
    });
    
     const upcomingMovies = useQuery({
            queryKey: ['movies', 'upcoming'],
            queryFn: upcomingAction,
            staleTime : 1000 * 60 * 60 * 24, // 24 hours
        });
  return {
    nowPlayingData,
    topRatedData,
    upcomingMovies
  }
}

