import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import BookModel from "../4-models/book-model";
import GenreModel from "../4-models/genre-model";




async function getaAllGenre():Promise<GenreModel[]>{
    const sql = `SELECT * FROM booksstorgenre `
    const genre = await dal.execute(sql)
    return genre
}

async function addBook(bookstorproduct:BookModel):Promise<BookModel>{
    const sql = `INERT INTO bookstorproduct
                VALUES (DEFAULT,
                        ${bookstorproduct.genreId}
                        ${bookstorproduct.bookName}
                        ${bookstorproduct.summary}
                        ${bookstorproduct.price}
                        ${bookstorproduct.stock}                        ${bookstorproduct.genreId}
                        )`
    const info:OkPacket = await dal.execute(sql)
    bookstorproduct.bookId = info.insertId
    return bookstorproduct
}



export default {
    getaAllGenre,
    addBook
}