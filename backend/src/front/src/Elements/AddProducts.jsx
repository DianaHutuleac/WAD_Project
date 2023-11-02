import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const people = [
  'Wade Cooper',
  'Arlene McCoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
]

export default function AddProductsElement(){
    const [img, setImg] = useState('');
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
                <form className="mb-32" >
                    <div className="w-[35ewm] mt-20 ">
                    <label className="flex px-2 font-titilium font-semibold ">
                        Team
                    
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Redbull</option>
                        <option>Mercedes</option>
                        <option>Ferrari</option>
                        <option>Aston Martin</option>
                        <option>McLaren</option>
                        <option>Alpine</option>
                        <option>Williams</option>
                        <option>Alpha Tauri</option>
                        <option>Alfa Romeo</option>
                        <option>Haas</option>


                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>

                    <div className="w-[35ewm] mt-2 ">
                    <label className="flex flex-col px-2 font-titilium font-semibold">
                        Type
                    
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
                    
                    <div className="w-[35rem] mt-2">
                     <label className="flex flex-col px-2 font-titilium font-semibold">
                        Image
                    </label>
                    <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={event => setImg(event.target.value)}
                    value={img}
                    />
                    <button className="bg-transparent hover:bg-formula-red bg-formula-red font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Add Image
                    </button>

                    </div>
                    <div className="w-[35ewm] mt-2 ">
                    <label className="flex flex-col px-2 font-titilium font-semibold">
                        Price
                    
                    </label>
                    <input placeholder="€" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        />

                    </div>
                    <div className="w-[35ewm] mt-2 ">
                    <label className="flex flex-col px-2 font-titilium font-semibold">
                        Arrival
                    
                    </label>
                    <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        />

                    </div>

                    

                    <div className="mt-10">
                    <button type="submit" className="font-titilium font-semibold hover:-translate-y-0.5 hover:shadow-md duration-700 ease-out transition-all bg-formula-red px-10 py-4 rounded-md text-formula-white text-md">Add Product</button>
                    </div>

                   
                    
                </form>
            </div>
        </div>
    </div>
    )
}