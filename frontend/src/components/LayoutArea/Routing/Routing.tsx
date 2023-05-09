import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import BookList from "../../BooksArea/BookList/BookList";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			routing
            <Routes>
                <Route path="/genres" element={<BookList/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
