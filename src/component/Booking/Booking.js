import React from 'react';
import { useContext } from 'react';
import './Booking.css'
import map from '../Image/Map.png'

import fakeData from '../../component/FakeData/fakeData.json'
import { useParams } from 'react-router-dom';

import { userContext } from './../../App';
import Destination from './../Destination/Destination';


const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const { id } = useParams();
    const data = fakeData.find(data => data.id == id)
    return (
        <div>
           
          
            <p className="text-center"> User Name: {loggedInUser.name ||loggedInUser.username}</p>


            <div className="left-details">
                <h3> {data.name} </h3>
                <h4>Destination</h4>

                <div className="map details">
                <img className="map-img" src={map} alt="" />

                </div>
            </div>
        </div>

    );
};

export default Booking;