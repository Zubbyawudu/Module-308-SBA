import { getMovies, getMovieDetails } from "./axios.js";

getMovies();

const movieGrid = document.getElementById('movie-grid');
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('movie-grid');
const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.getElementById('modal-content');

// To Display Movies in Gridcards
async function displayMovies(){
  try {
    const movies = await getMovies();
    // console.log(movies.data.results);
    const moviesArray = movies.data.results;
    for(let i = 0; i < moviesArray.length; i++){
      console.log(moviesArray[i]);
      const movieCard = document.createElement('div');
      movieCard.addEventListener('click', () => {
        openModal(moviesArray[i]);
      })
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

function openModal(data){
  
  console.log(data);
  modalOverlay.style.display = 'flex';
  getMovieDetails(data.id);
  modalContent.innerHTML = `
  <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
  <div>
    <h1>${data.title}</h1>
    <p style="font-size: 17px">${data.overview}</p>
  </div>
  `;
  
  
}




function trimText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

// Modal Display Function

const closeModalBtn = document.querySelector('.close-btn');


// openModalBtn.addEventListener('click', () => {
//     modalOverlay.style.display = 'flex';
// });

closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});