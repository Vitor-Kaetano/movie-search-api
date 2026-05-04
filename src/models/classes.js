class Movie {
    constructor(name, genre, year, director, sinopse, nota){
        this.name = name;
        this.genre = genre;
        this.year = year;
        this.director = director;
        this.sinopse = sinopse;
        this.nota = nota;
    };
    get(){
        return this.name, this.genre, this.year,
         this.director, this.sinopse, this.nota
    };
}

class Series {
    constructor(name, genre, year, director, sinopse, nota, temporadas){
        this.name = name;
        this.genre = genre;
        this.year = year;
        this.director = director;
        this.sinopse = sinopse;
        this.nota = nota;
        this.temporadas = temporadas;
    }
    get(){
        return this.name, this.genre, this.year,
         this.director, this.sinopse, this.nota, this.temporadas
    }
}
/*Model: Recebe os dados da API e
 instancia objetos a partir das classes
 que organizam os dados

 Controller: recebe entrada do usuário e decide 
 qual ação será tomada, também recebe dados do model que serão usados pelo view, atuandio como ponte
 
 View:Organiza funções que definem oque será impresso no terminal
 
 
 
 
 */