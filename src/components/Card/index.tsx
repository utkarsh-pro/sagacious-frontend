import React from 'react'
import Classes from './index.module.css'

export interface ICard {
    img: string;
    text: string;
    link?: string;
}

function Card({ img, text, link }: ICard) {
    return (
        <div className={Classes.card}>
            <img src={require(img)} alt="text" className={Classes.img} />
            <div className={Classes.text}>{text}</div>

        </div>
    )
}

export default Card
