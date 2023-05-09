import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import BookModel from "../4-models/book-model";
import GenreModel from "../4-models/genre-model";
import { resonceNotFoundErrorModel } from "../4-models/error-model";




async function getaAllGenre():Promise<GenreModel[]>{
    const sql = `SELECT * FROM booksstorgenre `
    const genre = await dal.execute(sql)
    return genre
}


async function getaAllBooks():Promise<BookModel[]>{
    const sql = `SELECT * FROM booksstorproducts `
    const books = await dal.execute(sql)
    return books
}



async function addBook(bookstorproduct:BookModel):Promise<BookModel>{
    const sql = `INSERT INTO booksstorproducts
                VALUES(DEFAULT,
                        ${bookstorproduct.genreId},
                        "${bookstorproduct.bookName}",
                        "${bookstorproduct.summary}",
                        "${bookstorproduct.price}",
                        ${bookstorproduct.stock}                       
                        
                        )`
    const info:OkPacket = await dal.execute(sql)
    bookstorproduct.bookId = info.insertId
    return bookstorproduct
}


async function deleteBook(bookId: number):Promise<void>{
    const sql = `DELETE FROM booksstorproducts
                 WHERE bookId = ${bookId}`;
                                
    // const info:OkPacket = await dal.execute(sql)
    // if(info.affectedRows === 0) throw new resonceNotFoundErrorModel(bookId)
}



export default {
    getaAllGenre,
    getaAllBooks,
    addBook,
    deleteBook
}