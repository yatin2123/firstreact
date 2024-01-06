
// import { BaseCard, Heading, Subtitle, Price, Subtitle1 } from './Card.style';

import React from 'react';

import {BaseCard, Heading, Subtitle, Subtitle1} from './Card.style';

function Card({ id = '', title = '', subtitle = '', }) {
    console.log(title);
    return (
        <div>
            <BaseCard className='box'>
                {/* <img src={img}></img> */}
                {/* {id} */}
                <Heading>{title}</Heading>
                <Subtitle>{subtitle}</Subtitle>
                <Subtitle1>{subtitle}</Subtitle1>
               
            </BaseCard>
           
        </div>
    );
}

export default Card;


// function Card(Data, { ...rest }) {
//     console.log(Data);
//     return (
//         <div>
//             <BaseCard {...rest}>
//                 <Subtitle></Subtitle>
//             </BaseCard>

//             {Data.map((v) => {
//                 return (
//                     <>
// <Heading>{v.name}</Heading>
// <Subtitle>{v.description}</Subtitle>
// <h2>{v.category}</h2>
// <p>{v.price}</p>
//                     </>
//                 )
//             })}
//         </div>
//     );
// }

// export default Card;