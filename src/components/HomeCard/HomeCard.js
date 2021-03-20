import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeCard.css'
import { Link, useHistory, useParams } from 'react-router-dom';

const HomeCard = (props) => {
    const {name, img, id} = props.card;
    return (
        <div className="container">
            <div className="text-center cards card-img-top">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><Link to={`/destination/${id}`} className="stretched-link">{name}</Link></Card.Title>   
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default HomeCard;