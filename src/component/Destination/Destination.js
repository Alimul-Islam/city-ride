import React from 'react';
import './Destination.css'
import map from '../Image/Map.png'
import { useParams } from 'react-router-dom';
import fakeData from '../../component/FakeData/fakeData.json'
import { Link } from "react-router-dom";



const Destination = () => {
    const { id } = useParams();

    const data = fakeData.find(data => data.id == id)
    console.log(data)

    return (
        <div className="container ms-5 row">
            <div className="left-section mt-5 ">

                <div className="search-ride form-control  mt-5">
                    <h6>Pick From</h6>
                    <input placeholder="Search from" ></input>
                    <br />
                    <h6>Pick To</h6>
                    <input placeholder="Search to"  ></input>

                    <br />
                    <Link to={`/booking/${data.id}`} >
                        <button className="btn btn-danger mt-2 search"> Search</button>
                    </Link>
                </div>


            </div>
            <div className="right-section mt-5 ">
                <img className="map-img " src={map} alt="" />
            </div>
        </div>
    );
};

export default Destination;