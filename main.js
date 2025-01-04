// window.alert("Hello")
// const hello = confirm("Are you here?");

// const answer = prompt("How old are you?", "20");
// console.log(typeof(answer));

// const arrUser = [];
// arrUser[0] = prompt('Name');
// arrUser[1] = prompt('Sername');
// arrUser[2] = prompt('Age');

// document.write(arrUser);


// const name = 'Tania';

// alert(`Hello, ${name}`);

const numberOfFilms = +prompt("Скільки фільмів Ви подивились?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const film = prompt("Який  останній фільм Ви дивились?");
const bal = prompt("На скільки Ви його оцінюєте?");
const film2 = prompt("Який  останній фільм Ви дивились?");
const bal2 = prompt("На скільки Ви його оцінюєте?");

personalMovieDB.movies[film] = bal;
personalMovieDB.movies[film2] = bal;

console.log(personalMovieDB);