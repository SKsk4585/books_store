class GenreModel{
    public jenreId:number
    public genreName:string

    public constructor (genre: GenreModel){
        this.jenreId = genre.jenreId
        this.genreName = genre.genreName
    }
}

export default GenreModel