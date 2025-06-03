import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";
import { axiosInstance } from "../api/movie-api";

export const upcomingAction = async () =>{
    try {
        const { data } = await axiosInstance.get('/upcoming');
        return data.results.map(MovieMapper.fromTheMovieDBToMovie);
    } catch (error) {
        throw error; // Re-throw the error for further handling if needed
    }
}