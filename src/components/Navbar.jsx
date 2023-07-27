import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginSuccess } from "../store/authReducer";
import { logoutSuccess } from "../store/authReducer";


function Navbar() {
    const user = useSelector((state) => state.user);
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
                            <Link to="/" style={{ textDecoration: 'none', color: 'black' }} className="nav-link active" aria-current="page"><strong>Home</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/artwork" style={{ textDecoration: 'none', color: 'black' }} className="nav-link"><strong>Art Gallery</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/fav" style={{ textDecoration: 'none', color: 'black' }} className="nav-link"><strong>Favorites</strong></Link>
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