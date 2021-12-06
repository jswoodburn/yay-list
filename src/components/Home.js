import React from 'react';
import { Link, Router } from "react-router-dom";

const Home = () => {
    return <>
    <Link to="/" >Home</Link>
    <Link to="/results">Results</Link>
</>
};

export default Home;