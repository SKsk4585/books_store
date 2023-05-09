import { useForm } from "react-hook-form";
import "./AddBook.css";
import BookModel from "../../../models/BookModel";
import bookService from "../../../service/bookService";

function AddBook(): JSX.Element {
    const {register,handleSubmit} = useForm<BookModel>()
    const send = (bookInfo:BookModel)=>{
        bookService.addBook(bookInfo)
        .then(()=>{
            alert("yes!!!!! added book")
        })
        .catch((err)=>{
            console.log(err)

        })
        
    }
    return (
        <div className="AddBook">
			<form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="book name"{...register("bookName")}/>
                <input type="text" placeholder="price"{...register("price")}/>
                <input type="text" placeholder="stock"{...register("stock")}/>
                <input type="text" placeholder="summary"{...register("summary")}/>
                <input type="text" placeholder="genreId"{...register("genreId")}/>

                <button>ADD</button>

            
            </form>


        </div>
    );
}

export default AddBook;
