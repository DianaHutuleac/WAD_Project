import Button from "./Buttons";

export default function RegisterElement() {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-48 ">
            <div className="h-full">
                <h1 className=" font-formulafont-bold text-formula-grey text-2xl">Register</h1>
                <div className="border-[6px] flex justify-center border-l-0 border-b-0 border-formula-red rounded-tr-2xl ">
                    <form className="mb-32" action="">
                        <div className="w-[35ewm] mt-20 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            First Name 
                        
                        </label>
                        <input placeholder="John" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text"  />

                        </div>

                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Last Name
                        
                        </label>
                        <input placeholder="Doe" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text"  />

                        </div>

                        
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Email
                        
                        </label>
                        <input placeholder="john@doe.com" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text"  />

                        </div>
                        
                        <div className="w-[35rem] mt-2">
                         <label className="flex flex-col px-2 font-titilium font-semibold">
                            Password 
                        </label>
                            <input placeholder="********" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="password"  />
                        

                        </div>

                        <div className="mt-10">
                        <Button
                         buttonHref={"/products"} 
                         buttonColor={"bg-formula-red"}
                         buttonLabel={"REGISTER"}
                         buttonPadding={"px-10 py-4"}
                         buttonRadius={"rounded-md"}
                         labelColor={"text-formula-white"}
                         labelSize={"text-md"}
                         />
                        </div>

                       
                        
                    </form>
                </div>
            </div>
        </div>
    )
}