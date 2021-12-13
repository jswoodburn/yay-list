import './App.css';
import Form from './components/Form'
import Home from './components/Home';
import Results from './components/Results';
import LoggedIn from './components/LoggedIn';
import { BrowserRouter, Route, Routes } from "../node_modules/react-router-dom";
import {useState} from 'react';

const App = () => {
    const [token, setToken] = useState();
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/results" element={<Results />} />
                    <Route path='/logged-in' element={<LoggedIn setToken={setToken} />} />
                    <Route path='/form' element={<Form token={token}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
