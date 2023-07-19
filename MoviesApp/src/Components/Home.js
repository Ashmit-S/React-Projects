import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Home({ onSearch }) {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(input);
        navigate('/movies');
        setInput('')
    };
    return (
        <><div className='container-1'>
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
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
            <div className='cotainer-2' style={{
                top: '50%', position: 'absolute', color: 'white', textAlign: 'center', transform: 'translateY(-50%)'
            }}>
                < h1 className='h1 home-heading' > FilmQuest: Unveiling the world of movies with comprehensive information at your fingertips.</h1 >
                <form className='form d-flex flex-column align-items-center' onSubmit={handleSearch}>
                    <input className='form-control my-3' type="search" id='home-input' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search Movies' />
                    <button className='btn btn-outline-primary mx-3' query={input}>Search</button>
                </form>
            </div >
        </>
    )
}
