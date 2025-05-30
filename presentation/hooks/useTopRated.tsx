import { topRatedAction } from "@/core/actions/top-rated.action";
import { useQuery } from "@tanstack/react-query";

export const useTopRatedMovies = () => {
  const topRatedData = useQuery({
    queryKey: ['movies', 'topRated'],
    queryFn: () => topRatedAction(), // Replace with actual top-rated action
    staleTime: 1000 * 60 * 60 * 24
  });

  return {
    topRatedData
  };
}