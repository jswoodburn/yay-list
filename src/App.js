import './App.css';
import Home from './components/Home';
import Results from './components/Results';
import { Link, Route, Routes } from "react-router-dom";

const App = () => (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/results">Results</Link>
        </nav>
        <Routes>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/results">
                <Results />
            </Route>
        </Routes>
    </div>
);

export default App;
