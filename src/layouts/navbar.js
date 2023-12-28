import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <div className="alert user_alert">Hello, {props.user.username}! Don't forget to update your daily changes and check out our support network.</div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://i.ibb.co/85KW2T9/ttlogo2.png" alt="Logo" width="110" height="50" className="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <form className="container-fluid justify-content-center">
                            <Link to="/" className="btn me-2 nav-btn" type="button">Dashboard</Link>
                            <button className="btn me-2 nav-btn" type="button">My Progress</button>
                            <button className="btn me-2 nav-btn" type="button">Resources</button>
                            <button className="btn me-2 nav-btn" type="button">Community</button>
                            <button className="btn me-2 nav-btn" type="button">Profile</button>
                            <button className="btn me-2 nav-btn" type="button">FAQ</button>
                            <button className="btn nav-btn" type="button"onClick={props.signOut}>Sign Out</button>
                        </form>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;