import express, { NextFunction, Request, Response, response } from "express"
import booksLogic from "../5-logic/books-logic"
import { request } from "http"
import BookModel from "../4-models/book-model"

const router = express.Router()

//get all genre
router.get("/genre", async(request:Request, response:Response,next:NextFunction)=>{
    try {
        const genre = await booksLogic.getaAllGenre()
        response.json(genre)
        
    } 
    catch (error) {
        next(error)
        
    }
})

//get all books
router.get("/get-all-books", async(request:Request, response:Response,next:NextFunction)=>{
    try {
        const books = await booksLogic.getaAllBooks()
        response.json(books)
        
    } 
    catch (error) {
        next(error)
        
    }
})

//add book
router.post("/books", async(request:Request,response:Response,next:NextFunction)=>{
    try {
       const bookstorproduct = new BookModel(request.body)
       const addedBook = await booksLogic.addBook(bookstorproduct)
       response.status(201).json(addedBook)
    } 
    catch (error) {
        next(error)
        
    }
})


//delete
router.delete("/delete-books/:bookId", async(request:Request,response:Response,next:NextFunction)=>{
    try {
       const bookId = +request.params.bookId
       await booksLogic.deleteBook(bookId)
       response.sendStatus(204)
    } 
    catch (error: any) {
        next(error)
        
    }
})




export default router