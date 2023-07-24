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
    }, []);

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center mt-5">
                {arts.map((data) => (
                    <Arts
                        key={data.id}
                        title={data.title}
                        image_id={data.image_id}
                        artist_display={data.artist_display}
                        id={data.id}
                        place_of_origin={data.place_of_origin}
                        medium_display={data.medium_display}
                        alt_text={data.alt_text}
                    />
                ))}
            </div>
        </>
    );
}

export default ArtGallery;
