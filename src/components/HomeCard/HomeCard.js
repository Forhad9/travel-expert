import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeCard.css'
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router';

const HomeCard = (props) => {
    
    const history = useHistory()
    const handleDestination = (destinationId) => {
        history.push(`/destination/${destinationId}`);
    }
    const {vehicleType, img, id} = props.card;
    return (
        <div className="container">
            <div className="text-center cards card-img-top">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><Link onClick={() => handleDestination(vehicleType)} className="stretched-link">{vehicleType}</Link></Card.Title>   
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default HomeCard;