const bars = document.getElementById("humbuger");
const lists = document.getElementById("nav");
const navLinks = document.querySelectorAll("#nav a"); // Select all anchor tags inside the nav

bars.addEventListener("click", () => {
    lists.classList.toggle("active");
});


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        lists.classList.remove("active"); 
 });
});

// fetch Movies
// display Movies func 
// search Movies func

const moviesCard = document.getElementById("movies-card");
const searchInput = document.getElementById("search-input").value;
const searchBtn = document.getElementById("btn");

let filteredMovies;
// movieDetails.computedStyleMap.color = "red";

let movieArr = [];

// function to fetch movies 
async function fetchMovies() {
    try{
     const response = await fetch('https://freetestapi.com/api/v1/movies');
     movieArr = await response.json();
     displayMovies(movieArr);
    }
    catch(error){
        console.log('error fetchin data',error);
    }
}
fetchMovies();

// function to display movies
function displayMovies(movies) { 
    moviesCard.innerHTML = "";
    movies.forEach((movie)=>{
        const title = movie.title;
        const year = movie.year;
        const  genre= movie.genre;
        const language = movie.language;
        const country = movie.country;
        const rating = movie.rating;
        const poster = movie.poster;
        const plot = movie.plot;
        
        const allMovies = `<div class="movie-card">
        <div class="img">
            <img src="${poster}" alt="">
        </div>
        <div class="movie-details">
            <h3 class="movie-title">${title}(${year})</h3>
            <p class="movie-genre">${genre}</p>
            <p class="movie-country">${country} (${language})</p>        
            <p class="movie-rating">Ratings: ${rating}</p>
            <p class="movie-plot">${plot}</p>
        </div>
    </div>`;
        moviesCard.innerHTML += allMovies;
   
    })
 }

function searchMovies() {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); 
        const movieName = document.getElementById('search-input').value;
        filteredMovies = movieArr.filter((movie) =>
            movie.title.toLowerCase().includes(movieName.toLowerCase())
        ); 
        displayMovies(filteredMovies)   
    });
}
searchMovies();



// document.getElementById('search-input').addEventListener('input', function() {
//     const inputVlue = this.value;
//     if (inputVlue.trim() === '') {
//         displayMovies(movieArr);
//     } else {
//         searchMovies();
//     }
// });

// onscroll
window.addEventListener("scroll",()=>{
    if(this.window.scrollY>0){
        document.getElementById("header").style.background = "black"
    }
    else{
         document.getElementById("header").style.background = "unset"
    }
})