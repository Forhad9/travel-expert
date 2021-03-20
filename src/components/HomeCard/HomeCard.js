import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeCard.css'

const HomeCard = (props) => {
    const {name, img} = props.card;
    return (
        <div className="container">
            <div className="text-center cards card-img-top">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><a href="/destination" className="stretched-link">{name}</a></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default HomeCard;