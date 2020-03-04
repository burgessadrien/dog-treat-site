import React from 'react';

import Card from '../decoration/card/Card';
import MapCard from '../decoration/card/MapCard';
import EmailCard from '../decoration/card/EmailCard';
import ListCard from '../decoration/card/ListCard';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <ListCard />
                <MapCard title="Location" />
                <EmailCard />
                <p>Contact Page</p>
                <Card />
                <Card />
            </div>
        );
    }
}