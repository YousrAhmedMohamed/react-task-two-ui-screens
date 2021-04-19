import React from "react";
import Card from '../../components/Card';

export default function CardsContanier() {
    var Cards = [];

    for (let i = 0; i < 21; i++) {
        Cards.push(<Card width="30%" />)
    }

    return (<div className="cards-container">
        {Cards}
    </div>)
}