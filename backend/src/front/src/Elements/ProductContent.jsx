import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import {Buffer} from "buffer";
export default function ProductContent(props) {


    const [img, setImg] = useState()

    React.useEffect(() => {

        axios.get(`http://localhost:8080/images/${props.data.d_image}`, {responseType: "arraybuffer"}).then(response => {setImg(Buffer.from(response.data, 'binary').toString('base64')) }).catch( err => console.log(err));
        }, [])
    
        
       
    return(
        <a href={`/product/${props.data.id}`}>
            <div className="bg-slate-100 w-[19rem] h-[19rem] mb-5 overflow-hidden rounded-md">
                {
                    img ? <img className="hover:scale-105 object-contain ease-out transition-all duration-500" src={`data:image/*;base64,${img}`} />
                     : <></>
                    }
                
            </div>
            <p className="text-md font-titilium font-semibold opacity-50">
                {props.data.a_team}
            </p>
            <p className="text-md font-titilium font-semibold ">
                {props.data.b_clothestype}
            </p>
            <p className="text-md font-titilium text-formula-red font-semibold ">
                EUR {props.data.e_price}
            </p>
        </a>
    )
}