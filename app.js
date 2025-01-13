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
        <h3>${moviesArray[i].title}</h3>
        <p>${trimText(moviesArray[i].overview, 80)}</p>
        
      `;
      movieGrid.appendChild(movieCard);
      
    }
    

  } catch (error) {
    console.log(error);
    
  }


  
}
displayMovies();

function trimText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}


const openModalBtn = document.querySelector('.movie-grid');
const closeModalBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});