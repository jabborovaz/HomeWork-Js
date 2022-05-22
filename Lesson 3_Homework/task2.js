let film = {
    name: "Titanic",
    year: "1997",
    ganre: "Drama",
    actor: "DiCaprio",
   rate: {
       kinopoisk: "9.6",
       fees: "Most grossing film!"
   }
};

let {rate} = film;
let {kinopoisk, fees} = rate;
console.log(kinopoisk);