import React from 'react';
import './HomePage.css';
import { useEffect } from 'react';
import fakeData from '../../FakeData/data.json';
import { useState } from 'react';
import HomeCard from '../HomeCard/HomeCard';
import bg from '../../images/Bg.png'


const HomePage = () => {
    const [cards, setCard] = useState([]);
    useEffect(() => {
        setCard(fakeData);
    }, [])
    return (
        <div className="container"  styles={{ backgroundImage:`url(${bg})` }}>
            <div className="text-center">
                <div className="row mr-3">
                    {   
                        cards.map(card => <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" >
                        <HomeCard card={card}></HomeCard> 
                        </div>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;