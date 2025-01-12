//  import axios from '/axios';
import axios from "https://cdn.skypack.dev/axios";
import { getToken } from "./token.js";









 export async function getMovies() {
  
  try {


    const api_key = '8a5b4e56bd1380f3a36a6c6dcb419bf7'
    const request = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',{
      headers: {
        Authorization: getToken()
      }
    })
    const response = request.data
    
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
}
