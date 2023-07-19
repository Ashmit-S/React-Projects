import React, { useState } from 'react'

const MovieItem = (props) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    }
    let { title, description, imageUrl, date, vote } = props
    return (
        <div className="my-3 ">
            <div className="card d-flex justify-content-center align-items-center text-light" style={{ background: '#080202', cursor: 'pointer' }} >
                <span className="text-bg-danger" id='rating-badge' >{vote ? vote.toFixed(1) + '/10' : 'NA'}</span>
                <img src={imageUrl} alt='' className="card-img-top img-fluid justify-content-center p-1"
                    onClick={toggleExpanded} />
                <div className="card-body">
                    <h5 className="card-title">{title + ' (' + (date ? date.slice(0, 4) : '') + ')'}</h5>
                    <p className="card-text ">{!expanded ? '' : description}</p>

                </div>
            </div >
        </div >
    )

}

export default MovieItem

{/* <div className="d-flex justify-content-center">
                        <a href='#' className="btn btn-warning" onClick={toggleExpanded}>Read More</a>
</div> */}

// We destructured props and extracted title and description prop form it

//We used target = "_blank" here so that when we click on Read More, the page opens in new tab.