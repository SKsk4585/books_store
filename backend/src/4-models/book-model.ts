class BookModel{
    public bookId:number
    public genreId:number
    public bookName:string
    public summary:string
    public price:string
    public stock:number

    public constructor(books:BookModel){
        this.bookId = books.bookId
        this.genreId = books.genreId
        this.bookName = books.bookName
        this.summary = books.summary
        this.price = books.price
        this.stock = books.stock
    }
}

export default BookModel