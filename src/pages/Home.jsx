import React, { useState, useEffect } from "react";

function Home() {
    const artWork = [
        "/public/guardian.webp",
        "/public/Christmast charity.webp",
        "/public/artwork brows.webp",
        "/public/man.webp",
        "/public/cave.jpeg",
        "/public/outsider.jpeg",
        "/public/surf.webp",
    ];

    useEffect(() => {
        document.title = "Home";
    }, []);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artWork.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNextClick, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div style={{ position: "relative", width: "100%", height: "50vh" }}>
                <video src="/public/pexels-juancarlos-córdova-7492690 (1080p).mp4" style={{ width: "100%", height: "85vh", objectFit: "cover" }} autoPlay muted loop />
                <div style={{ position: "absolute", top: "95%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <h1 style={{ color: "white", fontSize: "3rem", fontFamily: "cursive", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Welcome to Artify</h1>
                    <p style={{ color: "white", fontFamily: "cursive", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>"Where Masterpieces Await: Explore Art's Timeless Beauty."</p>
                </div>
            </div>
            <br />
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ maxWidth: "100%", overflow: "hidden" }}
            >
                <div className="carousel-inner" style={{ marginTop: "40vh"}}>
                <p className="text-center mb-5" style={{fontSize: "1.5rem", fontFamily: "cursive", textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.93", padding: "10px", borderRadius: "4px"  }}>
                At Artify, we believe that art has the power to inspire, transform, and connect people from all walks of life. Our platform is dedicated to curating an exceptional collection of artworks that showcase the talent and creativity of artists from around the world. Whether you're an avid art collector, an aspiring enthusiast, or simply seeking to add beauty to your living space, Artify is here to make your art journey an unforgettable one.
                ry and immerse yourself in a world of captivating masterpieces. We handpick each artwork to ensure that it speaks to your soul and sparks joy within you. From stunning paintings that evoke emotions to mesmerizing sculptures that tell profound stories, our carefully curated selection covers a wide spectrum of artistic expressions, ensuring there's something for every art lover.
                </p>
                <h3 className="text-center mb-5" style={{fontSize: "2.5rem", fontFamily: "cursive", textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.93", padding: "10px", borderRadius: "4px"  }}>Fascinating Artworks</h3>
                    {artWork.map((art, index) => (
                        <div key={index} className={`carousel-item ${index === currentImageIndex ? "active" : ""}`}>
                            <img src={art} className="d-block mx-auto img-fluid w-75" style={{ borderRadius: "3%", maxHeight: "80vh"}} alt={`Artwork ${index}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon text-dark" style={{ filter: "invert(100%)", marginTop: "90vh", backgroundColor: "rgba(255, 255, 255, 0.1" }} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" onClick={handleNextClick}>
                    <span className="carousel-control-next-icon text-dark" style={{ filter: "invert(100%)", marginTop: "90vh", backgroundColor: "rgba(255, 255, 255, 0.1" }} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Home;
