import React, { useEffect, useState } from 'react';

function Product_cat(props) {
    const [loding, setLoding] = useState(true)
    const [product, setProduct] = useState([])

    const [button, setButton] = useState([])
    const [profilter, setprofilter] =useState([])

    const getproData = async () => {
        let response = await fetch('https://dummyjson.com/products')
        let data = await response.json();
        console.log(data.products);
        setProduct(data.products)
        setLoding(false)
    }

    const handalebut = (val) => {
        setButton(val)
        console.log(val);

        let Data = product.filter((v) =>
            v.category 
        );
        console.log(Data);
        setprofilter(Data)
}

    const finalpro = profilter.length > 0 ? profilter : product;

useEffect(() => {
    getproData()
}, [])

return (
    <div>
        {
            loding ? <p>Loding...</p> :
                <>
                    <div className='but_box'>
                        <button onClick={(e) => handalebut('smartphones')}>smartphones</button>
                        <button onClick={(e) => handalebut('laptops')}>laptops</button>
                        <button onClick={(e) => handalebut('fragrances')}>fragrances</button>
                        <button onClick={(e) => handalebut('skincare')}>skincare</button>
                        <button onClick={(e) => handalebut('groceries')}>groceries</button>
                        <button onClick={(e) => handalebut('home-decoration')}>home-decoration</button>
                    </div>

                    <div className='main_box'>
                        {product.map((v, i) => {
                            return (
                                <div className='box'>
                                    <h3>{v.brand}</h3>
                                    <img src={v.images[0]}></img>
                                    <h4>{v.category}</h4>
                                </div>
                            )

                        })}

                    </div>
                </>
        }
    </div>
);
}

export default Product_cat;