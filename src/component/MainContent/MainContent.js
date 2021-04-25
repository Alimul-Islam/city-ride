import React from 'react';
import'./MainContent.css'
import {Link} from "react-router-dom";



const MainContent = (props) => {  
    const fakeData = props.data;
    const {name,image} = fakeData;
    const handleClick = props.handleClick;
         const {id} =props.data;

    return (
        
            <div className = "col-md-3">
            <img className="main-image" onClick={ () => handleClick(fakeData )} src={image} alt='' ></img>
            <h4>{name}</h4>
            <Link to = {`destination/${id}`}>
              <button className='btn btn-primary'>Book Now</button>  
             </Link>

        </div>
        
    );
};

export default MainContent;