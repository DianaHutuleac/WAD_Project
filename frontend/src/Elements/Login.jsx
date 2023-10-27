import Button from "./Buttons";

export default function LoginElement() {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-48 ">
            <div className="h-full">
                <h1 className=" font-formulafont-bold text-formula-grey text-2xl">Login</h1>
                <div className="border-[6px] flex justify-center border-l-0 border-b-0 border-formula-red rounded-tr-2xl ">
                    <form className="mb-32" action="">
                        <div className="w-[35ewm] mt-20 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Email Address 
                        
                        </label>
                        <input placeholder="Enter your email address" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text"  />

                        </div>
                        
                        <div className="w-[35rem] mt-10">
                         <label className="flex flex-col px-2 font-titilium font-semibold">
                            Password 
                        </label>
                            <input placeholder="Enter your password" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="password"  />
                        

                        </div>

                        <div className="mt-10">
                        <Button
                         buttonHref={"/products"} 
                         buttonColor={"bg-formula-red"}
                         buttonLabel={"SIGN IN"}
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