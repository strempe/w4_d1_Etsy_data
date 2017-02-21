var list = new Array(1,2,3);
var list = [1, 2, 3];

var object = new Object();
var object = {};

function drink() {
    return 'drank';
}

var waterBottle = {
    isFull: flase,
    oz: 16,
    drink: drink
};

waterBottle.oz
waterBottle.isFull
waterBottle.drink

// JSON - JavaScript Object Notation 
//  properties === object var
//  methods === object functions 

// NAME ARRAY VAR AS PLURAL 

var movies = [ 
    'Pulp Fiction',
    'Frozen',
    'Ex Machina',
    'The Goonies'
];

console.log(movies);
console.log(movies.length);

console.log(movies[0].toUpperCase());

movies[1] = 'Wall-E';
// changes that array

console.log(movies.pop());
// returns the last array AND takes it out - changes the array
// commonly use for loops 

var emailAddress = 'sara@gmail.com';
var domainName = emailAddress.split('@').pop();
console.log(domainName);

console.log(movies.slice(1, 3));

var movies = [
    {
        title: 'Pulp Fiction',
        year: 1996
    },
    {
        title: 'Frozen',
        year: 2014
    },
    {
        title: 'Ex Machina',
        year: 2015
    },
    {
        title: 'The Goonies',
        year: 1986
    }
];

// FOR LOOP
for (var i = 0; i < movies.length; i++) {
    var movieTitle = movies[i].title;
    console.log(movieTitle);
}

// FOR EACH LOOP
movies.forEach(function(movie) {
    console.log(movie);
    console.log(movie.title);
    console.log(movie.year);
});

movies.forEach(logMovie);
function logMovie(movie) {
    console.log(movie);
    console.log(movie.title);
    console.log(movie.year);
}

var prices = [12.54, 12.68, 12.78, 12.00];
var total = 0;
prices.forEach(showPrices);
// FOR EACH DOESNOT RUTRUN ANYTHING

function showPrices(price){
    total += price;
}
console.log(total);

// REDUCE
var prices = [12.54, 12.68, 12.78, 12.00];
var total = prices.reduce(function(prev,next) {
    return prev + next;
}, 0);

var movies = [
    {
        title: 'Pulp Fiction',
        year: 1996
    },
    {
        title: 'Frozen',
        year: 2014
    },
    {
        title: 'Ex Machina',
        year: 2015
    },
    {
        title: 'The Goonies',
        year: 1986
    }
];

// PUSH - ADDS SOMETHING TO THE END OF AN ARRAY
// not pure
var movieTitles = [];

movies.forEach(function(movie){
    movieTitles.push(movie.title);
});

// pure
var movieTitles = [];
var movieTitles = movies.map(getMovieTitle);
function getMovieTitle(movie) {
    return movie.title;
}


//  *** MAP *** //
var movieYears = getmovieYears(movies);

function getmovieYears(listOfMovies) {
    return listOfMovies.map(function(movie){
        return {
            movieTitle: movie.title.toUpperCase(),
            movieYear: movie.year
        };
    });
}

var names = ['Bart', 'Homer', 'Morty'];
var searchTerm = 'Bart';

var matches = names.filter(function(name){
    // return name.toLowerCase() === searchTerm.toLowerCase();
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    return name.toLowerCase().includes(searchTerm.toLowerCase());
});