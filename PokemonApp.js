import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPokemon from "./AllPokemon";
import Individual from "./IndividualPokemon";

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/pokemon" element={<AllPokemon />} />
                <Route path="/pokemon/:id" element= {<Individual />} />
            </Routes>
        </Router>
    );
}

export default App;