import { nowPlayingAction } from "@/core/actions/now-playing.action";
import { topRatedAction } from "@/core/actions/top-rated.action";
import { upcomingAction } from "@/core/actions/upcoming.actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingData = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedQuery = useInfiniteQuery({
    queryKey: ["movies", "topRated"],
    queryFn: topRatedAction,
    initialPageParam: 1,
    getNextPageParam: (lastPage, a, b) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1; // next page number
      }
      return undefined; // no more pages
    },
  });

  const upcomingMovies = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
  return {
    nowPlayingData,
    topRatedQuery,
    upcomingMovies,
  };
};
