async function searchMovies(){
    try{
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODI4YTU3YjAwNzdmOTdhYjdhZDBmY2I3NTBlYzBlNiIsIm5iZiI6MTc3NzkxOTczNi4xNDQsInN1YiI6IjY5ZjhlNmY4MjMxOGNhMWNkYWRlNGVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sp-OkixO_-lxQOYGGxpXb9lXIge0IltbxUQ9fjSEAtQ'
            }
        };
    const response = await fetch(url, options);

    if(!response.ok){
        throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();

    return data.results;
    
    }catch (error) {
        console.error('Erro ao buscar filmes:',error);
    }
}

async function searchTvShows(){
    try{
        const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODI4YTU3YjAwNzdmOTdhYjdhZDBmY2I3NTBlYzBlNiIsIm5iZiI6MTc3NzkxOTczNi4xNDQsInN1YiI6IjY5ZjhlNmY4MjMxOGNhMWNkYWRlNGVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sp-OkixO_-lxQOYGGxpXb9lXIge0IltbxUQ9fjSEAtQ'
            }
        };
    const response = await fetch(url, options);

    if(!response.ok){
        throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();

    return data.results;
    
    }catch (error) {
        console.error('Erro ao buscar filmes:',error);
    }
}

