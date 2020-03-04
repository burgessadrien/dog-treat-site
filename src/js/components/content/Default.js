import React from 'react';

import Card from '../decoration/card/Card';
import ImageCard from '../decoration/card/ImageCard';
import ItemCard from '../decoration/card/ItemCard';

import Dog from '../../../assets/images/dog-done.jpg';

const item = {
    name: "item test",
    price: 125,
    image: Dog,
    description: "This is a test to check the performance of an item card",
};

export default class DefaultContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ItemCard item={item} addItemHandler={this.props.addItemHandler}/>
                <Card title="Blog Page"/>
                <Card title="Blog Page"/>
                <Card title="Blog Page"/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card title="Blog Page"/>
                <Card title="Blog Page"/>
                <Card />
                <Card />
                <Card />
                <Card title="Blog Page"/>
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
            </div>
        );
    }
}