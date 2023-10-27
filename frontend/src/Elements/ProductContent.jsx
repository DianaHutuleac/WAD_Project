export default function ProductContent() {
    return(
        <a href="/product/1">
            <div className="bg-slate-100 w-[19rem] h-[19rem] mb-5 overflow-hidden rounded-md">
                <img className="hover:scale-105 object-contain ease-out transition-all duration-500" src="../../redbull_beanie.jpg" />
            </div>
            <p className="text-md font-titilium font-semibold opacity-50">
                Red Bull Racing
            </p>
            <p className="text-md font-titilium font-semibold ">
                Red Bull Essential Bobbie Beanie
            </p>
            <p className="text-md font-titilium text-formula-red font-semibold ">
                RON 130.00
            </p>
        </a>
    )
}