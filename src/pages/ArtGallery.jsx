import React, { useEffect, useState } from "react";
import Arts from "../components/Art";
import Categories from "../components/Category";

function ArtGallery() {
    const [arts, setArts] = useState([]);
    const [categories, setCategories] = useState([]);

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
                setArts(data.data);
                setCategories(data.data);
            })
            .catch((error) => {
                console.error("Error fetching artworks:", error);
            });
    }, []);

    // Filter out duplicate category titles
    const uniqueCategories = Array.from(new Set(categories.map((category) => category.classification_title)));

    return (
        <>
            <div className="d-flex">
                <div className="w-75 pt-5">
                    <h4 className="text-center mb-4">Category</h4>
                    {
                        uniqueCategories.map((categoryTitle, index) => (
                            <Categories 
                            key={`categoryTitle-${index}`} 
                            categoryOfArt={categoryTitle} />
                        )
                    )}
                </div>
                <div className="d-flex flex-wrap justify-content-center mt-5">
                    {
                        arts.map((art) => (
                            <Arts
                                key={art.id}
                                title={art.title}
                                thumbnail={`https://www.artic.edu/iiif/2/${art.image_id || art.alt_image_ids}/full/843,/0/default.jpg`}
                                artist_display={art.artist_display}
                                id={art.id}
                                place_of_origin={art.place_of_origin}
                                medium_display={art.medium_display}
                                alt_text={art.alt_text}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default ArtGallery;
