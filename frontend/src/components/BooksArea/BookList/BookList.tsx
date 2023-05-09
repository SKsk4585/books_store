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
            {/* {genres && genres.map(g=><div>{g.jenreId}{g.genreName}</div>)} */}

            <select defaultValue="" >
                    <option disabled value={""}>select a genre name </option>

                    {genres && genres.map(g=> <option key={g.jenreId} value={g.jenreId}>{g.genreName}</option> )}
            </select>			
        </div>
    );
}

export default BookList;
