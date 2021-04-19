import React from "react";
import Card from '../../components/Card';
import SingleCard from '../../components/SingleCard';

export default function CardDetails() {
    const Cards = [];

    for (let i = 0; i < 21; i++) {
        Cards.push(<Card />)
    }
    return (<div className="container-body">
        <div className="cards-div">
            {Cards}
        </div>
        <SingleCard />
    </div>
    )
}