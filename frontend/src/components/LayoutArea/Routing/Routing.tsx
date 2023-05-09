import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import BookList from "../../BooksArea/BookList/BookList";
import AddBook from "../../BooksArea/AddBook/AddBook";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			routing
            <Routes>
                <Route path="/genres" element={<BookList/>}/>
                <Route path="/addBooks" element={<AddBook/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
