import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/movie-api-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";
import { axiosInstance } from "../api/movie-api";

export const topRatedAction = async() =>{
    try{
    const { data } = await axiosInstance.get<MovieDBMoviesResponse>('/top_rated')
        return data.results.map(MovieMapper.fromTheMovieDBToMovie)
    }
    catch(error){
        console.log(error)
    }
}