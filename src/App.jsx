import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ArtGallery from "./pages/ArtGallery";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import Favorites from "./components/Favorites";
import { store } from "./store/store";



function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/artwork"
                            element={
                                <>
                                    <Favorites />
                                    <ArtGallery />
                                </>
                            }
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
