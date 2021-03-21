import React from 'react';
import { useParams } from 'react-router';
import Map from '../GoogleMap/Map';
import './Destination.css';

const Destination = () => {

    const { destinationId } = useParams();

    return (
        <div>
            
            <div >
                <fieldset>
                    <div>
                        <label htmlFor="pickfrom">Pick From</label>
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="pickto">Pick To</label>
                        <input type="text" />
                    </div>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </fieldset>
            </div>
            <div className="map-position">
                <Map />
            </div>
        </div>
    );
};

export default Destination;