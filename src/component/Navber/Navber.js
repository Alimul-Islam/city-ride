import React from 'react';
import { useContext } from 'react';
import fakeData from '../../component/FakeData/fakeData.json'
import { userContext } from './../../App';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const Navber = () => {
    const handleLogin = () =>{
        console.log('login clicked')
    }
 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">City-Ride</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link active" href="/">Destination</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link active" href="/">Blog</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link active" href="/">Contact</a>
                            </li>
                            <li className="nav-item me-3">
                           <button  className="btn btn-info">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>   
                
            </nav>
        </div>

    );
};

export default Navber;