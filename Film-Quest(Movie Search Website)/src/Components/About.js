import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function About({ onSearch }) {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(input);
        navigate('/movies');
        setInput('');
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className="mb-2" src="https://cdn-icons-png.flaticon.com/512/3658/3658959.png" alt="" width="30" height="30" />
                    </Link>

                    <Link className="navbar-brand" to="/">FilmQuest</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
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
            <div className="container d-flex align-items-center justify-content-center align-center" style={{ top: '18%', left: '5%', right: '5%', position: 'absolute' }}>
                <h2 className='text-white text-center '>
                    FilmQuest is a revolutionary platform that brings the world of movies to your fingertips.
                    With FilmQuest, you can easily search for movie titles and instantly access a treasure trove of information.
                    From detailed descriptions and captivating plot summaries to user ratings and release dates,
                    FilmQuest provides a comprehensive database of films to satisfy your curiosity.
                    Discover the perfect movie for any occasion, explore intriguing storylines, and dive into a realm of cinematic wonders.
                    Whether you're seeking timeless classics or the latest releases, FilmQuest guides you on a captivating journey of movie exploration,
                    ensuring you never miss a captivating film again.
                    Embark on an immersive cinematic experience with FilmQuest, where the magic of movies awaits.
                </h2>
            </div>
        </>
    )
}
