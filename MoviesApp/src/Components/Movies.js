import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = (props) => {

    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [noOfPages, setNoOfPages] = useState(0)
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
    const capitalQuery = props.query.charAt(0).toUpperCase() + props.query.slice(1);
    document.title = `FilmQuest - ${capitalQuery}`;

    const updateresults = async () => {
        console.log('ur called');
        props.setProgress(10);
        let url = `https://api.themoviedb.org/3/search/movie?query=${props.query}&api_key=adab0d8586bdb75d52369f97e2e441b6&page=${page}`
        setLoading({ loading: true })
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(60);
        setResults(parsedData.results);
        setNoOfPages(parsedData.total_pages);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateresults();
    }, [props.query])

    const fetchMoreData = async () => {
        let nextPage = page + 1
        let url = `https://api.themoviedb.org/3/search/movie?query=${props.query}&api_key=adab0d8586bdb75d52369f97e2e441b6&page=${nextPage}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setResults((prevResults) => prevResults.concat(parsedData.results));
        setPage(nextPage)
        setNoOfPages(parsedData.total_pages)
    }

    return (
        <>
            <a className='container' href={`https://www.google.com/search?q=${capitalQuery}+Movie`}>
                <h2 className='text-center border-bottom border-light pb-2' id="nameSearch" >
                    {`Search Results for ${capitalQuery}`}</h2>
            </a>
            {loading && <Spinner />}
            <InfiniteScroll dataLength={results.length} next={fetchMoreData} hasMore={page < noOfPages}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row my-3">
                        {!loading && results.map((elements) => {
                            return <div className="col-md-3" key={elements.id}>
                                <MovieItem title={elements.original_title} description={elements.overview ? elements.overview : ''}
                                    imageUrl={elements.poster_path ? imageBaseUrl + elements.poster_path : 'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg'}
                                    date={elements.release_date} vote={elements.vote_average} />
                            </div>
                        }
                        )}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

// Movies.defaultProps = {
//     query: 'Avatar'
// }

//  Movies.propTypes = {

//  }

export default Movies

{/* <div className="container d-flex justify-content-between">
                <button type="button" disabled={page <= 1} className="btn btn-primary" onClick={handlePrevClick}>&larr; Previous</button>
                <button type="button" disabled={page + 1 > Math.ceil(noOfPages / 18)} className="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}


    // const handleNextClick = async () => {
    //     if (page + 1 > Math.ceil(noOfPages / 18)) {

    //     }
    //     else {
    //         setPage(page + 1)
    //         updateresults();
    //     }
    // }

    // const handlePrevClick = async () => {
    //     setPage(page - 1)
    //     updateresults();
    // }

    //You could also use elements.imageUrl, elements.title etc. instead of imageUrl