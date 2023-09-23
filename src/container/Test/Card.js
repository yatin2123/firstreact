import React from 'react';
import { BaseCard, Heading, Subtitle } from './Card.style';

function Card({...rest}) {
    return (
        <div>
            <BaseCard {...rest}>
            <Subtitle></Subtitle>
            </BaseCard>
        </div>
    );
}

export default Card;