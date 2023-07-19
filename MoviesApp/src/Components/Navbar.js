import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
    const [input, setInput] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/FilmQuest">
                    <img className="mb-2" src="https://cdn-icons-png.flaticon.com/512/3658/3658959.png" alt="" width="30" height="30" />
                </Link>

                <Link className="navbar-brand" to="/FilmQuest">FilmQuest</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/FilmQuest">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button className="btn btn-outline-primary" type="submit" query={input}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


export default Navbar