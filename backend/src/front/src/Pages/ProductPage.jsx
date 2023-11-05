import NavbarComponent from "../Components/Navbar";
import Footer from "../Components/Footer";
import Button from "../Elements/Buttons";
import DRS from "../SVG/drs";
import ProductContent from "../Elements/ProductContent";
import ArrowIcon from "../SVG/arrow";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {Buffer} from "buffer";
import React from "react";
import { useState } from "react";
export default function ProductPage() {
    const location = useLocation();
    const [pathName, setPathName] = useState(null) ;
    

    const [img, setImg] = useState()

    const [total, setTotal] = useState( 0);
    const [current, setCurrent ] = useState(0);
    const [products, setProducts ] = useState([]);

    React.useEffect(() => {

        function timeout(delay){
            return new Promise(res => setTimeout(res, delay));
        }

        if(location) {
            let tmp = location.pathname.slice(location.pathname.lastIndexOf("/") , location.pathname.length) ;
            setPathName(tmp.split("/").pop()) ;

            
               axios.get(`http://localhost:8080/api/v1/product/${tmp.split("/").pop()}`).then(response => {setProducts(response.data) 
               axios.get(`http://localhost:8080/images/${response.data.d_image}`, {responseType: "arraybuffer"}).then(response => {setImg(Buffer.from(response.data, 'binary').toString('base64')) }).catch( err => console.log(err));
          
       
       
            }).catch( err => console.log(err))
            
           
                


                
           
        }

   
    }, [location])

    console.log(img)


    return(
        <div>
        <NavbarComponent />
        <div className="max-w-7xl mx-auto py-40">
            <div className="grid grid-cols-3">
                <div className=" col-span-2">
                    <img className="max-h-[30rem] rounded-lg" src={`data:image/*;base64,${img}`} />

                </div>

                <div className="flex flex-col gap-y-4">
                    <div className="">
                        <p className="font-titilium font-semibold text-xl opacity-50">{products.a_team}</p>
                        <p className="font-titilium font-semibold text-md">{products.b_clothestype}</p>
                    </div>
                    <div>
                        <p className="font-titilium font-semibold text-formula-red text-md">EUR {products.e_price}.00</p>
                    </div>
                    <div>
                        <p className="text-sm">Size: {products.c_size}</p>
                        
                    </div>

                    <div className="font-titilium font-semibold">
                        <ul className="list-inside list-disc">
                        <li>High Quality {products.a_team} {products.b_clothestype}</li>
                        <li>Team logo badge embroidered on the front</li>
                        <li>Material: 100% Acrylic</li>
                        </ul>
                       
                    </div>
                    <Button
                    buttonHref={"/cart"} 
                    buttonColor={"bg-formula-red"}
                    buttonLabel={"Add To Cart"}
                    buttonPadding={"px-32 py-3"}
                    buttonRadius={"rounded-md"}
                    labelColor={"text-formula-white"}
                    labelSize={"text-md"}
                    />

                    <div className="w-[21rem]">

                    
                    <div className="flex gap-10 items-center px-2 py-3 rounded-md w-full border-formula-red border-2 mb-4">
                    <div className="flex w-10 h-10"><DRS/></div> 
                    <p className=" font-titilium font-semibold">
                        72-hour Fast Delivery Guaranteed!
                    </p>
                    </div>

                    <div className="flex gap-16 items-center px-2 py-3 text-center rounded-md w-full bg-yellow-100 text-yellow-600 border-yellow-600 border-2">
                     
                    <p className=" font-titilium  font-semibold">Official licensed product!</p>
                    </div>

                    </div>
                    
                </div>


            </div>
        </div>
        <Footer />   
        </div>
    )
}