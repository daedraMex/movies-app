
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/movie-api-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mappers';
import { axiosInstance } from '../api/movie-api';

export const nowPlayingAction = async () => {
    try {
       const {data}= await axiosInstance.get<MovieDBMoviesResponse> ('/now_playing')
        
       //const response =  data.results.map( movie => MovieMapper.fromTheMovieDBToMovie(movie))
       //return response;
       // We can use the prev line , both are valid
       // but the next one is more readable
       return data.results.map( MovieMapper.fromTheMovieDBToMovie)

    } catch (error) {
        console.log(error)
    }
}
