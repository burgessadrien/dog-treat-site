import React from 'react';

import Card from '../decoration/card/Card';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <p>Hello there</p>
                <Card title="Blog Page"/>
                <Card />
            </div>
        );
    }
}