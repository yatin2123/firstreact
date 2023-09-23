import React, { useEffect, useState } from 'react';

function Product_cat(props) {
    const [loding, setLoding] = useState(true)
    const [product, setProduct] = useState([])

    const [button, setButton] = useState([])
    const [profilter, setprofilter] = useState([])

    const [input, setInput] = useState('')

    const [sort, setSort] = useState('')

    const [active, setActive] = useState(false)
    const [category, setCategory] =useState([])

    const [selectCat, setSelectCat] = useState('')

    const getproData = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        // console.log(data.products);
        let uniqueCat = [];
        product.map((p) => {
            if(!uniqueCat.includes(p.category)){
                uniqueCat.push(p.category)
            }
        })
        setCategory(uniqueCat);
       

        setProduct(data.products)
        setLoding(false)
    }


    const handlesearchsort = () => {
        console.log('ok');

        // setInput()
        // setButton(val)
        // setActive(!active)
   
        // // console.log(val);

        let Data = product.filter((v) =>(
            v.title.toLowerCase().includes(input.toLowerCase()) ||
            v.price.toString().includes(input.toString())
        ));

        if(!selectCat !== ''){
            Data= Data.filter((v) => v.category === selectCat)
        }
        console.log(Data);
        
        Data = Data.sort((a,b) => {
            console.log(Data, selectCat);
            if(sort === 'low'){
                return a.price - b.price;
            } else if(sort === 'high'){
                return b.price - a.price;
            } else if(sort === 'a'){
                return a.title.localeCompare(b.title)
            } else if(sort === 'z') {
                return b.title.localeCompare(a.title)
            }
        })

        return Data;
       
    }

    // const finalpro = profilter.length > 0 ? profilter : product;

    const finalpro = handlesearchsort();
    // const handlechange = () => {
    //     setSort(value)
    //     console.log(value);

    //     // let data = sort.filter((a,b) => a.smartphones)
    // }

    // const handledrop = (val) => {
    //     // setActive(profilter)
      

    //     const prosort = [...product].sort((a,b) => {
    //         // return a.brand > b.brand ? 1 : -1
    //         if(val === 'low'){
    //             return a.price > b.price ? 1 : -1
    //         } else if(val === 'high'){
    //             return a.price > b.price ? -1 : 1
    //         } else if(val === 'a'){
    //             return a.tital > b.tital ? 1 : -1
    //         } else if(val === 'z'){
    //             return a.tital > b.tital ? -1 : 1
    //         }
    //     })

    //     setprofilter(prosort)
    // }

    
    

    useEffect(() => {
        getproData()
    }, [])

    return (
        <div>
            {
                loding ? <p>Loding...</p> :
                    <>
                        {/* <div className='but_box'>
                            <button onClick={(e) => handalebut('smartphones')} style={{backgroundColor : active ? "green" : "white"}}>smartphones</button>
                            <button onClick={(e) => handalebut('laptops')} style={{backgroundColor : active ? "green" : "white"}}>laptops</button>
                            <button onClick={(e) => handalebut('fragrances')} style={{backgroundColor : active ? "green" : "white"}}>fragrances</button>
                            <button onClick={(e) => handalebut('skincare')} style={{backgroundColor : active ? "green" : "white"}}>skincare</button>
                            <button onClick={(e) => handalebut('groceries')} style={{backgroundColor : active ? "green" : "white"}}>groceries</button>
                            <button onClick={(e) => handalebut('home-decoration')} style={{backgroundColor : active ? "green" : "white"}}>home-decoration</button>
                        </div> */}

                       <input placeholder='Search' onChange={(e) => setInput(e.target.value)}></input>
                       <div>
                        {
                            category.map((c) => {
                                return(
                                    <button onClick={() => setSelectCat(c)} >{c}</button>
                                )
                                
                            })
                        }
                       </div>

                        <select onChange={(e) => setSort(e.target.value)}>
                            <option value='0'>--select--</option>
                            <option value='low'>Low price</option>
                            <option value='high'>high price</option>
                            <option value='a'>A to Z</option>
                            <option value='z'>Z to A</option>
                        </select>


                        <div className='main_box'>
                            {finalpro.map((v, i) => {
                                return (
                                    <div className='box'>
                                        <h3>{v.brand}</h3>
                                        <img src={v.images[0]}></img>
                                        <h4>{v.category}</h4>
                                        <h5>setSort: {v.setSort}</h5>
                                        <h4>{v.price}</h4>
                                        <h4>{v.tital}</h4>
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