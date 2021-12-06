import './App.css';
import Home from './components/Home';
import Results from './components/Results';
import { BrowserRouter, Route, Routes } from "../node_modules/react-router-dom";

const App = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;
