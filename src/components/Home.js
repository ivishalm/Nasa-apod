import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
        <div className="home_btn">
            <Link to="/nasaphoto" className="btn">See into the stars!</Link>
        </div>
        </>
    )
}

export default Home;
