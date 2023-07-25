import React, { useEffect, useState } from "react";
import Arts from "../components/Art";

function ArtGallery() {
    const [arts, setArts] = useState([]);

    useEffect(() => {
        document.title = "Arts";

        fetch("https://api.artic.edu/api/v1/artworks")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data.data);
                setArts(data.data);
            })
            .catch((error) => {
                console.error("Error fetching artworks:", error);
            });
    }, [setArts]);

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center mt-5">
                {
                    arts.map(
                        art => <Arts
                            key={art.id}
                            title={art.title}
                            image_id={art.image_id}
                            artist_display={art.artist_display}
                            id={art.id}
                            place_of_origin={art.place_of_origin}
                            medium_display={art.medium_display}
                            alt_text={art.alt_text}
                            alt_image_ids={art.alt_text}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ArtGallery;
