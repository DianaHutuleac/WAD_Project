import ProductContent from "../Elements/ProductContent";
import ArrowIcon from "../SVG/arrow";
import axios from "axios";

import React from "react";
import { useState } from "react";

export default function Products () {




    const [total, setTotal] = useState( 0);
    const [current, setCurrent ] = useState(0);
    const [products, setProducts ] = useState([]);

    React.useEffect(() => {

    axios.get("http://localhost:8080/api/v1/getAllProducts").then(response => {setProducts(response.data.products) }).catch( err => console.log(err));
    }, [])

    console.log(products)

    return(
        <div  className="max-w-7xl mx-auto px-4 py-32">
            <div className="text-center  mb-10">
                <h1 className="font-formulafont-bold text-2xl">ALL F1 MERCHANDISE</h1>
                <p className=" font-titilium font-semibold opacity-75">The officially licensed F1™ merchandise collection from Redbull to Alpha Tauri.</p>
            </div>

            <div className="font-titilium font-semibold text-sm flex gap-2 items-center mb-5">
                Home <ArrowIcon className=""/> All Products
            </div>
            
            <div className="grid grid-cols-4 gap-10">
            {products.map((data) =>(
            <ProductContent data = {data} />
            )
            )}
            </div>

        </div>
    )
}