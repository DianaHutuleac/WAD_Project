import { useState } from 'react'
import { Combobox } from '@headlessui/react'

import { useEffect } from 'react';
import axios from 'axios';

const people = [
  'Wade Cooper',
  'Arlene McCoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
]

export default function AddProductsElement(){

    // BEGIN IMG UPLOAD


    const [img, setImg] = useState(null);
    const [imgUri, setImgUri] = useState("");
    const [team, setTeam] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [arrival, setArrival] = useState("");

    const [disableUpload, setDisableUpload] = useState(false);

    const [disableForm, setDisableForm] = useState (false);

    const [showError, setShowError] = useState(false);

    const [errText, setErrText] = useState("")

    useEffect(() => {
        if(img){
              console.log("File has been set.")
              setShowError(false);
      }
    },[img]);
    
    const handleSubmit = event => {
        setShowError(false);
        console.log(img);
        event.preventDefault();

        if(img === null){
            setErrText("Image must not be null!");
            setShowError(true);
            return
        }

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        var bodyFormData = new FormData();
        bodyFormData.append('file', img);

        axios.post ("http://localhost:8080/images/upload", bodyFormData, config)
                .then(response => {
                    console.log(response);

                    if (response.status === 200) {
                       console.log("OK")
                       setImgUri(response.data);
                       setDisableUpload(true);
                    }
                })
                .catch(err => {console.log(err)
                    setErrText("There was an error uploading your image!");
                    setShowError(true);
                }
                    )
    }

    // END IMG UPLOAD

    // START PRODUCT UPLOAD

    const handleProduct = event => {
        event.preventDefault();


        if(team === "" || size === "" || price === "" || type === ""  || imgUri === ""){
            setErrText("All fields are required!");
            setShowError(true);
            return;
        }

        const payload = {
            d_image: imgUri,
            a_team: team,
            c_size: size,
            e_price: price,
            b_clothestype: type,
            f_arrival: arrival
        }

        axios.post ("http://localhost:8080/api/v1/addItem", payload)
                .then(response => {
                    console.log(response);
                    if (response.status == 200) {
                        setDisableForm(true);
                    }
                })
                .catch(err => {console.log(err)
                }
                )
    }


    const handleReset = event => {
        setArrival("")
        setImg(null)
        setPrice("")
        setSize("")
        setTeam("")
        setImgUri("")
        setType("")
        setDisableUpload(false)
        setDisableForm(false)

    }




    const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })
    return(
        <div className="max-w-7xl mx-auto px-4 pt-48 ">
        <div className="h-full">
            <h1 className=" font-formulafont-bold text-formula-grey text-2xl">Add Products</h1>
            <div className="border-[6px] flex justify-center border-l-0 border-b-0 border-formula-red rounded-tr-2xl ">
                <form className={disableForm ? "hidden" : "mb-32"} onSubmit={handleProduct} >
                    <div className="w-[35ewm] mt-20 ">
                    <label className="flex px-2 font-titilium font-semibold ">
                        Team
                    
                    </label>
                    <div class="relative">
                        <select onChange={event => setTeam(event.target.value)}
                        value={team} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                         <option selected >Select...</option>
                        <option>REDBULL</option>
                        <option>MERCEDES</option>
                        <option>FERRARI</option>
                        <option>ASTONMARTIN</option>
                        <option>MCLAREN</option>
                        <option>ALPINE</option>
                        <option>WILLIAMS</option>
                        <option>ALPHATAURI</option>
                        <option>ALFAROMEO</option>
                        <option>HAAS</option>


                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>

                    <div className="w-[35rem]  mt-2 ">
                    <label className="flex flex-col px-2 font-titilium font-semibold">
                        Type
                    
                    </label>
                    <div class="relative">
                        <select onChange={event => setType(event.target.value)}
                        value={type} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                         <option selected >Select...</option>
                        <option>Tshirt</option>
                        <option>Pollo</option>
                        <option>Hoodie</option>
                        <option>Cap</option>
                        

                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                    </div>

                    
                    <div className="w-[35ewm] mt-2 ">
                    <label className="flex flex-col px-2 font-titilium font-semibold">
                        Size
                    
                    </label>
                    <div class="relative">
                        <select onChange={event => setSize(event.target.value)}
                        value={size} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option selected >Select...</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>ONE SIZE</option>

                        

                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                    </div>
                    
                    <div className={disableUpload ? "hidden" : " mt-2"}>

                        
                                <label className="flex flex-col px-2 font-titilium font-semibold">
                                Image
                            </label>
                            <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={event => setImg(event.target.files[0])}
                            value={""}
                            />
                            <button  onClick={handleSubmit} className="bg-transparent hover:bg-formula-red bg-formula-red font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Add Image
                            </button>
                        
                     

                    </div>

                    <div className={!disableUpload & !disableForm ? "hidden" : " bg-blue-300 p-4 mt-2 rounded-md"}>

                        <p className=' font-titilium font-semibold text-center text-blue-700'>
                            Image {imgUri} uploaded successfully!
                        </p>



                        </div>

                        <div className={!showError ? "hidden" : " bg-red-300 p-4 mt-2 rounded-md"}>

                        <p className=' font-titilium font-semibold text-center text-red-700'>
                            {errText}
                        </p>
                    </div>
                    <div className="w-[35ewm] mt-2 ">
                    <label className="flex flex-col px-2 font-titilium font-semibold">
                        Price
                    
                    </label>
                    <input placeholder="€" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 
                            onChange={event => setPrice(event.target.value)}
                            value={price}
                        />

                    </div>
                    <div className="w-[35ewm] mt-2 ">
                    <label className="flex flex-col px-2 font-titilium font-semibold">
                        Arrival
                    
                    </label>
                    <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 
                            onChange={event => setArrival(event.target.value)}
                            value={arrival}
                        />

                    </div>

                    

                    <div className="mt-10">
                    <button type="submit" className="font-titilium font-semibold hover:-translate-y-0.5 hover:shadow-md duration-700 ease-out transition-all bg-formula-red px-10 py-4 rounded-md text-formula-white text-md">Add Product</button>
                    </div>

                   
                    
                </form>

                <div className={!disableForm ? "hidden" : "my-12 p-24  bg-blue-300 flex flex-col gap-80 rounded-lg"}>
                    <p className='font-titilium font-semibold text-center text-blue-700'>
                        Product {team} {type} added successfully!
                    </p>
                    <div className='flex flex-col gap-2'>
                    <span className='font-titilium font-semibold text-center text-blue-700 text-sm'>
                        Want to add another product?
                    </span>
                    <button onClick={handleReset} className="font-titilium font-semibold hover:-translate-y-0.5 hover:shadow-md duration-700 ease-out transition-all bg-formula-red px-10 py-4 rounded-md text-formula-white text-md">Add Product</button>
                   
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}