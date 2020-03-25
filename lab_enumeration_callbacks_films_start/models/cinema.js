const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAllFilmTitles = function(){
 return this.films.map((film) => {
  return film.title;
  });
};

Cinema.prototype.getFilmByTitle = function(title){
  return this.films.find((film) => {
    return film.title === title;
  });
};

Cinema.prototype.filterFilmsByGenre = function(genre){
  return this.films.filter((film) => {
    return film.genre === genre;
  });
}

Cinema.prototype.filterFilmsByYear = function(year){
  // check if the year matches any films
  return this.films.filter((film) => {
    // return the films that match the year
    
    // if no films match the year
    // return false
    return film.year === year

  });
}





module.exports = Cinema;
