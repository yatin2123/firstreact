import React, { useEffect, useState } from 'react';

function Quotes(props) {
    const [isloding, setIsLoding] = useState(true)
    const [qData, setQData] = useState([])
    const [search, setSearch] = useState([])
    const [filData, setFilData] = useState([])


    const getData = async () => {
        let response = await fetch('https://type.fit/api/quotes')

        let data = await response.json();
        // console.log(data);
        setQData(data)
        setIsLoding(false)
    }


    const handelChange = (val) => {
        setSearch(val)
        let fData = qData.filter((v) =>
            v.text.toLowerCase().includes(val.toLowerCase()) ||
            v.author.toLowerCase().includes(val.toLowerCase())
        );
        console.log(fData);
        setFilData(fData)
    }

    const finalData = filData.length > 0 ? filData : qData;

    useEffect(() => {
        getData();
    }, []);

    // const handlepre = () => {
    //     let new_index = index - 1
    //     if (index >= 0) {
    //         setIndex(new_index)
    //     }

    // }

    // const handlenext = () => {
    //     let new_index = index + 1
    //     if (index < qData.length) {
    //         setIndex(new_index)
    //     }

    // }
    return (
        <div>
            {
                isloding ? <p>Loding....</p> :
                    <>
                        <h1>Quotas</h1>
                        <div className='search'>
                            <input type='tex' name='name' placeholder='Type to search...' onChange={(e) => handelChange(e.target.value)}></input>
                            <button>search..</button>
                        </div>
                        <div className='row'>
                            {finalData.map((v) => {
                                return (
                                    <div>
                                        <div className='col-md-4 border'>
                                            <h2>{v.text}</h2>
                                            <h2>{v.author}</h2>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
            }
        </div>
    );
}

export default Quotes;