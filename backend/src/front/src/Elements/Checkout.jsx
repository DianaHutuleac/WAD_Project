export default function CheckoutElement(){
    return(
        <div className="max-w-7xl mx-auto px-4 pt-48 ">
            <div className="h-full">
                <h1 className=" font-formulafont-bold text-formula-grey text-2xl">Checkout</h1>
                <div className="border-[6px] flex justify-center border-l-0 border-b-0 border-formula-red rounded-tr-2xl ">
                    <form className="mb-32" >
                        <div className="w-[35ewm] mt-20 ">
                        <label className="flex px-2 font-titilium font-semibold ">
                            First Name 
                        
                        </label>
                        <input placeholder="John" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text"  
                        

                        
                        />

                        </div>

                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Last Name
                        
                        </label>
                        <input placeholder="Doe" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 
                        

                        
                        />

                        </div>

                        
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Email
                        
                        </label>
                        <input placeholder="john@doe.com" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Address
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            City
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Country
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            State/Province
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Postal Code
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Phone
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                    <div className="w-[35ewm] mt-2 ">
                    <label className="flex flex-col px-2 font-titilium font-semibold">
                        Delivery Method
                    
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Standard: 4-10 business days, $5</option>
                        <option>Express: 2-5 business days, $10</option>

                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                    </div>
                    <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Card Number
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                    </div>
                    <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Name on Card
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                        Expiration date (MM/YY)
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            CVC
                        
                        </label>
                        <input placeholder="" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 

                        
                        />

                        </div>
                        
                        <div className="w-[35rem] mt-2">
                         <label className="flex flex-col px-2 font-titilium font-semibold">
                            
                        </label>
                           
                        

                        </div>

                        <div className="mt-10">
                        <button type="submit" className="font-titilium font-semibold hover:-translate-y-0.5 hover:shadow-md duration-700 ease-out transition-all bg-formula-red px-10 py-4 rounded-md text-formula-white text-md">Place Order</button>
                        </div>

                       
                        
                    </form>
                </div>
            </div>
        </div>
    )
}