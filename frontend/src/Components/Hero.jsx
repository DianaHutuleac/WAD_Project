import Button from "../Elements/Buttons";

export default function Hero() {
    return(
        <div className="pt-24 h-[698px] w-screen bg-hero bg-no-repeat">
            <div className="max-w-7xl h-full mx-auto px-4 py-20">
                <div className="h-full grid grid-cols-1 gap-4 content-between ">
                    <div>
                        <h1 className="font-formulafont-bold text-formula-white text-3xl">FORMULA 1 CLOTHES FOR ALL THE FANS</h1>
                        <h3 className="font-formulafont-regular text-formula-white ">Here you can find any merch from all the teams.</h3>
                    </div>
                    <div>
                        <Button 
                        buttonColor={"bg-formula-red"}
                        buttonLabel={"SHOP NOW"}
                        buttonPadding={"px-10 py-4"}
                        buttonRadius={"rounded-md"}
                        labelColor={"text-formula-white"}
                        labelSize={"text-md"}
                        />
                    </div>
                   
                </div>
                
            </div>
            
        </div>
        
    )
}