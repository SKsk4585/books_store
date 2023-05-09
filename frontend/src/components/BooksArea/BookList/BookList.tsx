import { useEffect, useState } from "react";
import bookService from "../../../service/bookService";
import "./BookList.css";
import GenreModel from "../../../models/GenreModel";
import { Console } from "console";

function BookList(): JSX.Element {
    const[genres,setGenres] = useState<GenreModel[]>()
    useEffect(()=>{
        bookService.getaAllGenre()
        .then((genres)=>{
            setGenres(genres)
            console.log(genres)
    
        })
        .catch((err)=>{
            console.log(err)    
        })
    })

    return (
        <div className="BookList">
            {genres && genres.map(g=><div>{g.jenreId}{g.genreName}</div>)}
            {/* {genres && 
            <>
          {  genres.map((g)=>{
                <div key={genres.}>{genres.genreName}</div>
            })}
            </>} */}

			
        </div>
    );
}

export default BookList;
