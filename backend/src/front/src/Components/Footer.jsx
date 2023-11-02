import FormulaLogo from "../SVG/formula1";


export default function Footer () {
    return (
        <div className="bg-formula-grey w-screen">
            <div className="max-w-7xl mx-auto ">
               <div className="grid grid-cols-4 items-center">
                    <div className=" py-20 flex items-center">
                        <FormulaLogo />
                        <h1 className=" font-formulafont text-formula-white">
                            MERCH
                        </h1>
                    </div>
                    <div className=" ">
                        <p className="text-formula-white font-titilium font-semibold">
                            15 Rue Grimaldi, 98000 Monaco
                        </p>
                        <p className="text-formula-white font-titilium font-semibold">
                            dia.hutuleac@gmail.com
                        </p>
                        <p className="text-formula-white font-titilium font-semibold">
                            +40 770 375 773
                        </p>
                    </div>
                    <div className="" id="Container">
                        <div id="nose-top"></div>
                        <div id="nose-bottom"></div>
                        <div id="nose"></div>
                        <div id="front-wing"></div>
                        <div id="top-front-wing-trim"></div>
                        <div id="bottom-front-wing-trim"></div>
                        <div id="top-front-wing-trim-2"></div>
                        <div id="bottom-front-wing-trim-2"></div>
                        <div id="top-front-wing"></div>
                        <div id="top-front-wing-tail"></div>
                        <div id="bottom-front-wing"></div>
                        <div id="bottom-front-wing-tail"></div>
                        <div id="bottom-front-wheel" class="wheel"></div>
                        <div id="bottom-back-wheel"></div>
                        <div id="top-front-wheel" class="wheel"></div>
                        <div id="top-back-wheel"></div>
                        <div id="rear-body"></div>
                        <div id="rear-wing-bg"></div>
                        <div id="rear-wing"></div>
                        <div id="top-body-curve"></div>
                        <div id="top-body-curve-cut"></div>
                        <div id="top-body-curve-straight"></div>
                        <div id="top-body-curve-straight-2"></div>
                        <div id="bottom-body-curve"></div>
                        <div id="bottom-body-curve-cut"></div>
                        <div id="bottom-body-curve-straight"></div>
                        <div id="bottom-body-curve-straight-2"></div>
                        <div id="back-body-curve"></div>
                        <div id="body-hood"></div>
                        <div id="back-body"></div>
                        <div id="back-body-top"></div>
                        <div id="back-body-bottom"></div>
                        <div id="back-body-2"></div>
                        <div id="top-spoke-1"></div>
                        <div id="top-spoke-2"></div>
                        <div id="top-spoke-3"></div>
                        <div id="top-spoke-4"></div>
                        <div id="bottom-spoke-1"></div>
                        <div id="bottom-spoke-2"></div>
                        <div id="bottom-spoke-3"></div>
                        <div id="bottom-spoke-4"></div>

                        <div id="back-spoke"></div>

                        <div id="mirror-top"></div>
                        <div id="mirror-bottom"></div>
                        <div id="driver-bg"></div>
                        <div id="driver-wheel"></div>
                        <div id="driver-helmet"></div>
                        <div id="bottom-body-spine"></div>
                        <div id="top-body-spine"></div>
                        <div id="end-body-spine"></div>
                        <div id="top-body-spine-2"></div>
                        <div id="bottom-body-spine-2"></div>
                    </div> 
                    <div className="py-20 place-self-end">
                    <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.873718642268!2d7.415831176699172!3d43.733950147203714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc28d1d0c9799%3A0xf9cea3f33646acac!2s15%20Rue%20Grimaldi%2C%2098000%20Monaco!5e0!3m2!1sen!2sro!4v1698083778857!5m2!1sen!2sro" width="200" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
               </div>
               <div>
                <p className=" pb-10 text-formula-white font-titilium font-semibold">
                    Copyright 2023 Diana Huțuleac
                </p>
               </div>
            </div>
        </div>
        
    )
}