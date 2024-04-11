const movieContainer = document.getElementById('movie-container');
const genreFilter = document.getElementById('genre-filter');
const favoritesList = document.getElementById('favorites-list');

let movies = []; // Array to store movie data
let favorites = []; // Array to store favorite movies

// Function to fetch movie data from an external API
async function fetchMovies() {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US'); // Replace with your API key
  const data = await response.json();
  movies = data.results;
  displayMovies();
}

// Function to display the list of movies
function displayMovies() {
  movieContainer.innerHTML = ''; // Clear previous content

  movies.forEach(movie => {
    const movieItem = document.createElement('li');
    movieItem.classList.add('movie-item');

    // Use template literal for string construction
    const movieHTML = `
      <h3>${movie.title}</h3>
      <p>Genre: <span class="math-inline">\{movie\.genre\_ids\.map\(genreId \=\> getGenreName\(genreId\)\)\.join\(', '\)\}</p\> 
<button data\-movie\-id\="</span>{movie.id}">Add to Favorites</button>
    `;
    movieItem.innerHTML = movieHTML;

    movieContainer.appendChild(movieItem);
  });

  // Add event listeners for adding favorites
  const movieItems = document.querySelectorAll('.movie-item button');
  movieItems.forEach(button => {
    button.addEventListener('click', function() {
      const movieId = parseInt(this.dataset.movieId);
      const movieToAdd = movies.find(movie => movie.id === movieId);
      addFavorite(movieToAdd);
    });
  });
}

// Function to get genre name from genre ID (optional with additional API call)
function getGenreName(genreId) {
  // Implement logic to fetch genre name from another API endpoint if needed
  // For simplicity, return a placeholder genre name here
  return `Genre ${genreId}`;
}

// Function to add movie to favorites list and update UI
function addFavorite(movie) {
  favorites.push(movie);
  updateFavoritesList();
}

// Function to update the favorites list UI
function updateFavoritesList() {
  favoritesList.innerHTML = '';
  favorites.forEach(movie => {
    const favoriteItem = document.createElement('li');
    favoriteItem.textContent = movie.title;
    favoritesList.appendChild(favoriteItem);
  });
}

// Function to handle genre filter selection (optional)
function handleGenreFilter(event) 
  const selectedGenre = event.target.value;
  if (selectedGenre === 'all') {
    movies = allMovies; // Display all movies
  } else {
    movies = allMovies.filter(movie)

}

