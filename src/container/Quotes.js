import React, { useEffect, useState } from 'react';

function Quotes(props) {
    const [isloding, setIsLoding] = useState(true)
    const [qData, setQData] = useState([])
    const [index, setIndex] = useState(0)

    const getData = async () => {
        let response = await fetch('https://type.fit/api/quotes')

        let data = await response.json();
        console.log(data);
        setQData(data)
        setIsLoding(false)
    }

    useEffect(() => {
        getData();
    }, []);

    const handlepre = () => {
        let new_index = index - 1
        if(index >=0 ){
            setIndex(new_index)
        }
        
    }

    const handlenext = () => {
        let new_index = index + 1
        if(index < qData.length){
            setIndex(new_index)
        }
        
    }
    return (
        <div>
            {
                isloding ? <p>Loding....</p> :
                    <>
                        <p>{qData[index].text}</p>
                        <p>---{qData[index].author}</p>
                        <button 
                        onClick={handlepre}
                        // disable={}
                        >Preveus</button>
                        <button onClick={handlenext}>Next</button>
                    </>
            }
        </div>
    );
}

export default Quotes;