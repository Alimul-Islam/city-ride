import React, { useState } from 'react';
import fakeData from '../../component/FakeData/fakeData.json'
import MainContent from '../MainContent/MainContent';
import MainData from '../MainData/MainData';
const Home = () => {
    
     const [mainData, setMainData] =useState([]); 
    

    const handleClick =(id)=>{
        const data = [id]
     setMainData(data)
    }
    return (
        <div className = "row">
           {/* <h1  className="text-center m-5">I am home</h1>  */}

         {
             mainData.map(data => <MainData data = {data}></MainData>)
         }

           {
               fakeData.map(data => <MainContent data ={data} handleClick={handleClick}></MainContent>)
           }
        </div>
    );
};

export default Home;