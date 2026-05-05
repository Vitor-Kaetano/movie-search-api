export class Movie {
  constructor(data) {           // recebe o objeto JSON inteiro
    this.name = data.title;
    this.genre = data.genre_ids;
    this.year = data.release_date;
    this.sinopse = data.overview;
    this.nota = data.vote_average;
  }
}

export class TvShow {
  constructor(data) {
    this.name = data.name;
    this.genre = data.genre_ids;
    this.year = data.first_air_date;
    this.sinopse = data.overview;
    this.nota = data.vote_average;
    this.temporadas = data.number_of_seasons;
  }
}