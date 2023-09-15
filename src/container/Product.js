import React, { useEffect, useState } from 'react';

function Product(props) {
    const [loding, setLoding] = useState(true);
    const [fake, setFake] = useState([]);

    const [input, setInput] =useState("");
    const [filData, setFilData] = useState([])

   

    const handelChange = (val) => {
        setInput(val)
        // console.log(val);
        // setInput(val)
        // console.log();
        let fData = fake.filter((v) => 
            v.title.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val.toString())
        );
        console.log(fData);
        setFilData(fData)
    }

    const finalData = filData.length > 0 ? filData : fake;
    
    const getData = async () => {
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json();
        
        setFake(data)
        setLoding(false)
    }

    useEffect(() => {
        getData();
    }, [])

    // console.log(fake,input);
    return (
        <div>
            {
                loding ? <p>Loding....</p> :
                    <>
                        <h2>Product</h2>

                        <div className='container'>
                            <div className='search'>
                                <input type='tex' name='name' placeholder='Type to search...' onChange={(e) => handelChange(e.target.value)}></input>
                                <button>search..</button>
                            </div>
                            <div className='prodect'>
                                {finalData.map((v) => {

                                    return (
                                        <div>
                                            {/* <input type='tex'></input> */}
                                            <div className='main_box'>

                                                <div className='box'>
                                                    <img src={v.image}></img>
                                                    <h5>Title: {v.title}</h5>
                                                    <h4>$ {v.price}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </>
            }
        </div>
    );
}

export default Product;