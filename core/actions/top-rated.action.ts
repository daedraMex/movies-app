import { Movie } from "@/infrastructure/interfaces/movie";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/movie-api-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";
import { axiosInstance } from "../api/movie-api";

interface Props{
    pageParam:  number
}
interface TopRatedProps{
    data: Movie[],
    page: number,
    total_pages:number
}
export const topRatedAction = async({pageParam=1}:Props) : Promise<TopRatedProps>=>{
    try{
        const { data } = await axiosInstance.get<MovieDBMoviesResponse>(`/top_rated?language=en-US&page=${pageParam}`)

        return {
            data: data.results.map(MovieMapper.fromTheMovieDBToMovie),
            page: data.page,
            total_pages : data.total_pages
        }

     }catch(error){
        throw new Error(`Error fetching page, ${error}`);

    }
}