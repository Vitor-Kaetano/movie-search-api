//imprimir no terminal uma lista de filmes

export function displayMovies(movies){
    movies.forEach(movie => {
        console.log(movie.name);
    })
}

export function displayTvShows(tvShows){
    tvShows.forEach(tvShow => {
        console.log(tvShow.name);
})
}