import styled from "styled-components";


export const BaseCard = styled.div`
    border-radius: 4px;
    width: 345px;
    height: 280px;
    padding: 6px;
    background-color:gray;
    margin: 10px;
    border-redius: 10px;

    &:hover{
        background: orange;
    }
}
`

export const Heading = styled.h2`
    color: white;
    &:hover{
        background: black;
    }
`
export const Subtitle = styled.h3`
    color: blue;
    &:hover{
        background: #fff;
    }
`

export const Subtitle1 = styled.h3`
    color: black;
    &:hover{
        background: #fff;
    }
`


export const Price = styled.p`
font-weight:bold;
// color:orange;
&:hover{
    background: #fff;
}
`
