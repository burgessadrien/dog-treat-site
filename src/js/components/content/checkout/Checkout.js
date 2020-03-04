import React from 'react';

import CheckoutTableCard from "./CheckoutTableCard";
import EmailCard from '../../decoration/card/EmailCard';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <p>Checkout Page</p>
                <CheckoutTableCard {...this.props} />
                <EmailCard title="Send Order" />
            </div>
        );
    }
}