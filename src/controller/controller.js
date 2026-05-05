import {list,search} from '../models/apiClient.js'
import {displayMovies, displayTvShows} from '../view/UI.js'

//Definir qual função chamar de model
//receber o array de objetos de model
//chamar uma função de view para imprimir os dados na tela

//receber parametros de filtragem e passar os parâmetros para o model

function filters({language, with_genres, vote_average,year}){
    const params ={}
    
    if(language) params.language = language;
    if(with_genres) params.with_genres = with_genres;
    if(vote_average) params.vote_average = vote_average;
    if(year) params.year = year;
    
    return params;
    }




async function main(){
    const collectedFilters = {
        language: 'en-US'
    }
    const type = 'tv'
    const query = "pluribus"
    //displayMovies(await list(type, filters(collectedFilters)))
    //displayMovies(await search(type,query,filters(collectedFilters)))
    displayTvShows(await list(type, filters(collectedFilters)));
    displayTvShows(await search(type, query,filters(collectedFilters)));
}
main()


