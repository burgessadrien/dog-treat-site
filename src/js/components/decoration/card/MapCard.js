import React from 'react';

//local components
import Card from './Card';
import GoogleMap from '../GoogleMap';

export default class MapCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="card-map" component={(
                <div>
                    {this.props && (<h1>{this.props.title}</h1>)}
                    <div className="card-map__container">
                        <GoogleMap />
                    </div>
                </div>
            )} />
        );
    }
}