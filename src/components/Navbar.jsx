import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginSuccess } from "../store/authActions";
import { logoutSuccess } from "../store/authActions";


function Navbar() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    // const [showLoginForm, setShowLoginForm] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginSuccess(username));
        setShowLoginForm(false);
    }

    const handleLogout = () => {
        dispatch(logoutSuccess());
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "rgba(255, 255, 255, 0.8", padding: "10px", borderRadius: "4px" }}>
            <div className="container-fluid">
                <a className="navbar-brand " href="#" style={{ fontFamily: 'cursive', fontWeight: 600, fontSize: '2.5vw' }}>Artify</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}><strong>Home</strong></Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/artwork" style={{ textDecoration: 'none', color: 'black' }}><strong>Art Gallery</strong></Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/fav" style={{ textDecoration: 'none', color: 'black' }}><strong>Favorites</strong></Link></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{ marginLeft: "30vw" }}>
                {user ? (
                    <>
                        <p><strong>Welcome, {user}!</strong></p>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Name"
                        />
                        <button type="submit">Login</button>
                    </form>
                )}
            </div>
        </nav>
    )
}

export default Navbar