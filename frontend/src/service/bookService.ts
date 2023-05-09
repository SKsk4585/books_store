import axios from "axios"
import GenreModel from "../models/GenreModel"
import appConfig from "../utils/AppConfig"
import BookModel from "../models/BookModel"





async function getaAllGenre():Promise<GenreModel[]>{    
    const respons =  await axios.get<GenreModel[]>(appConfig.genreUrl)
      const genres = respons.data 
    return genres
}

async function addBook(book:BookModel):Promise<void>{
  await axios.post<BookModel>(appConfig.addBooks,book)
}



export default {
    getaAllGenre,
    addBook
}