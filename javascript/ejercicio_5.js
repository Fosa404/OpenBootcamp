let compra = ["manteca", "yogurt", "pan", "fideos", "sal"];

compra.push("aceite de girasol");

compra.pop();

const favouritesMovies = [{título: "Kimi no nowa", director: "Makoto Shinkai", fecha: new Date(2016,07,26)},
                          {título: "Prisioners", director: "Denis Villeneuve", fecha: new Date(2013, 10, 28)},
                          {título: "Trainspotting", director: "Danny Boyle", fecha: new Date(1997, 01, 01)}];


const post2010 = favouritesMovies.filter(movie => movie.fecha > new Date(2010, 0, 01));

const directors = favouritesMovies.map(movies => movies.director);

const titles = favouritesMovies.map(movies => movies.título)


const dirTitles = directors.concat(titles);

const dirTitlesProp = [ ...directors, ...titles];

