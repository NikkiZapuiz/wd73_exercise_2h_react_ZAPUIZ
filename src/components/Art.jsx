import React from 'react';

function Arts(props) {
    const { title, image_id, artist_display, place_of_origin, medium_display, alt_text, alt_image_ids } = props;

    return (
        <>
            <div className="card m-2" style={{ width: "18rem", height: "105vh" }}>
                <div className="card-header border-0">
                    <img
                        src={`https://www.artic.edu/iiif/2/${image_id || alt_image_ids}/full/843,/0/default.jpg`}
                        onError={(e) =>
                            (e.target.onerror = null)(
                            (e.target.src = 
                                "/No-Image-Placeholder.svg.png")
                            )}

                        style={{ height: '40vh' }}
                        className="card-img-top"
                        alt={alt_text}
                            
                    />

                </div>
                <div className="card-block px-2">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text"><strong>Artist:</strong> {artist_display}</p>
                    <p className="card-text"><strong>Place of Origin:</strong> {place_of_origin}</p>
                    <p className="card-text"><strong>Medium:</strong> {medium_display}</p>
                    {/* <p className="card-text">{alt_text}</p> */}
                </div>
                <div className="w-100"></div>
            </div>
        </>
    )
}

export default Arts;
