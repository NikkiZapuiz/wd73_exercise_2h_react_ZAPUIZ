import React from 'react';

function Arts(props) {
    const { title, image_id, artist_display, place_of_origin, medium_display, alt_text } = props;

    return (
        <div className="container">
            <div className="card flex-row flex-wrap" style={{ width: "18rem" }}>
                <div className="card-header border-0">
                    <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} className="card-img-top" alt={alt_text} />
                </div>
                <div className="card-block px-2">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{artist_display}</p>
                    <p className="card-text">{place_of_origin}</p>
                    <p className="card-text">{medium_display}</p>
                    <p className="card-text">{alt_text}</p>
                </div>
                <div className="w-100"></div>
                <div className="card-footer w-100 text-muted">
                    Footer stating cats are CUTE little animals
                </div>
            </div>
        </div>
    )
}

export default Arts;
