function Footer() {
    return (
        <div className="container-fluid">
            <footer className="text-center text-white container-fluid shadow">
                <div className="container">
                    <section className="mt-5">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="nav-link active text-black" aria-current="page" href="#"><strong>Home</strong></a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                <a className="nav-link active text-black" aria-current="page" href="#"><strong>Art Gallery</strong></a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="nav-link active text-black" aria-current="page" href="#"></a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="nav-link active text-black" aria-current="page" href="#"></a>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <hr className="my-3" />
                    <section className="text-center mb-5">
                        <a href="" className="text-black me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>

                <div className="text-center p-3" style={{color:'black'}}>
                    © {new Date().getFullYear()} Artify. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Footer;
