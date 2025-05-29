
import axios from 'axios';

export const axiosInstance = axios.create({
     baseURL: process.env.EXPO_PUBLIC_MOVIE_API_URL,
     headers: {
        'Authorization': `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
        'Content-Type': 'application/json'
    },
    params: {
        'language': 'es-MX', 
        'page': 1
    }
    
})