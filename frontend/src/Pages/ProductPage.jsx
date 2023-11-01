import NavbarComponent from "../Components/Navbar";
import Footer from "../Components/Footer";
import Button from "../Elements/Buttons";
import DRS from "../SVG/drs";
export default function ProductPage() {
    return(
        <div>
        <NavbarComponent />
        <div className="max-w-7xl mx-auto py-40">
            <div className="grid grid-cols-3">
                <div className=" col-span-2">
                    <img className="max-h-[30rem] rounded-lg"src="../../redbull_beanie.jpg" />

                </div>

                <div className="flex flex-col gap-y-4">
                    <div className="">
                        <p className="font-titilium font-semibold text-xl opacity-50">Red Bull Racing</p>
                        <p className="font-titilium font-semibold text-md">Red Bull Essential Bobby Beanie</p>
                    </div>
                    <div>
                        <p className="font-titilium font-semibold text-formula-red text-md">EUR 130.00</p>
                    </div>
                    <div>
                        <p className="text-sm">Size: One Size</p>
                        <p className="text-sm">Colour: Navy</p>
                    </div>

                    <div className="font-titilium font-semibold">
                        <ul className="list-inside list-disc">
                        <li>Cuff beanie with bobble</li>
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