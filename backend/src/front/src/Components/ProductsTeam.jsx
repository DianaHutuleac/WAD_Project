import ProductContent from "../Elements/ProductContent";
import ArrowIcon from "../SVG/arrow";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import React from "react";
import { useState } from "react";

export default function ProductsTeam () {


    const location = useLocation();
    const [pathName, setPathName] = useState(null) ;
    



    const [total, setTotal] = useState( 0);
    const [current, setCurrent ] = useState(0);
    const [products, setProducts ] = useState([]);

    React.useEffect(() => {
        if(location) {
            let tmp = location.pathname.slice(location.pathname.lastIndexOf("/") , location.pathname.length) ;
            setPathName(tmp.split("/").pop()) ;
            axios.get(`http://localhost:8080/api/v1/teams?team=${tmp.split("/").pop()}`).then(response => {setProducts(response.data.products) }).catch( err => console.log(err));
        }

   
    }, [location])

    console.log(products)

    

    return(
        <div  className="max-w-7xl mx-auto px-4 py-32">
            <div className="text-center  mb-10">
                <h1 className="font-formulafont-bold text-2xl">ALL F1 {pathName?.toUpperCase()} MERCHANDISE</h1>
                <p className=" font-titilium font-semibold opacity-75">The officially licensed F1™ merchandise collection from Redbull to Alpha Tauri.</p>
            </div>

            <div className="font-titilium font-semibold text-sm flex gap-2 items-center mb-5">
                Home <ArrowIcon className=""/> {pathName?.toUpperCase()}
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