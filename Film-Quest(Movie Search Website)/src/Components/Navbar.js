import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
    const [input, setInput] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    const location = useLocation();
    if (!location.pathname.endsWith('/movies')) {
        return null;
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="mb-2" src="https://cdn-icons-png.flaticon.com/512/3658/3658959.png" alt="" width="30" height="30" />
                </Link>

                <Link className="navbar-brand" to="/">FilmQuest</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  me-auto mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


export default Navbar