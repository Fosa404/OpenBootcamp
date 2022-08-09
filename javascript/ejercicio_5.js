let compra = ["manteca", "yogurt", "pan", "fideos", "sal"];

compra.push("aceite de girasol");

compra.pop();

const favouritesMovies = [{título: "Kimi no nowa", director: "Makoto Shinkai", fecha: new Date(26,08, 2016)},
                          {título: "Prisioners", director: "Denis Villeneuve", fecha: new Date(11,28,2013)},
                          {título: "Trainspotting", director: "Danny Boyle", fecha: new Date(01,01,1997)}];


const post2010 = favouritesMovies.filter(movie => movie.fecha > new Date(01,01,2010));

console.log(post2010)