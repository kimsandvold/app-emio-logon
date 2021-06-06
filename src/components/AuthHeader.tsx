import React, { useContext, useState } from "react";
import { authContext } from '../App';

const AuthHeader = () => {
    const conmtext = useContext(authContext)
    return conmtext.user ? (
        <div id="auth-header" className="">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="#"><strong>Emio</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="{{ url('/login') }}">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="{{ url('/register') }}">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    ) : (<></>);
}

export default AuthHeader;