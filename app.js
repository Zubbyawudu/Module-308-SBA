import { getMovies } from "./axios.js";

getMovies();

const movieGrid = document.getElementById('movie-grid');

async function displayMovies(){
  try {
    const movies = await getMovies();
    // console.log(movies.data.results);
    const moviesArray = movies.data.results;
    for(let i = 0; i < moviesArray.length; i++){
      console.log(moviesArray[i]);
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${moviesArray[i].poster_path}" alt="${moviesArray[i].title}">
        <h2>${moviesArray[i].title}</h2>
        <p>${moviesArray[i].overview}</p>
      `;
      movieGrid.appendChild(movieCard);
      
    }
    

  } catch (error) {
    console.log(error);
    
  }


  
}
displayMovies();