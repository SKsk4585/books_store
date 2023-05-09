import axios from "axios"
import GenreModel from "../models/GenreModel"
import appConfig from "../utils/AppConfig"





async function getaAllGenre():Promise<GenreModel[]>{    
    const respons =  await axios.get<GenreModel[]>(appConfig.genreUrl)
      const genres = respons.data 
    return genres
}

// async function addBook(bookstorproduct:BookModel):Promise<BookModel>{
//     const sql = `INERT INTO bookstorproduct
//                 VALUES (DEFAULT,
//                         ${bookstorproduct.genreId}
//                         ${bookstorproduct.bookName}
//                         ${bookstorproduct.summary}
//                         ${bookstorproduct.price}
//                         ${bookstorproduct.stock}                        ${bookstorproduct.genreId}
//                         )`
//     const info:OkPacket = await dal.execute(sql)
//     bookstorproduct.bookId = info.insertId
//     return bookstorproduct
// }



export default {
    getaAllGenre,
    // addBook
}