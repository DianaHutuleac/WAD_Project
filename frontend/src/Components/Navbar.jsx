import Button from "../Elements/Buttons";
import FormulaLogo from "../SVG/formula1";


 /* TODO: Correctly add the href to corespond to each page */
const nav = {
    pages: [
        { id: 1, name: 'All Products', href: '/products' },
        { id: 2, name: 'Teams', href: '/teams' },
        { id: 3, name: 'Categories', href: '/categories' }
    ]
}

export default function NavbarComponent() {
    return(
        <div className="bg-formula-red fixed w-screen z-50">
            <header className="relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="h-24 flex items-center justify-between">
                        <a href="/">
                            {/* F1 Logo */}
                            <div className="flex items-center gap-x-3">
                                <FormulaLogo />
                                <div className="font-formulafont text-xl text-formula-white">
                                    MERCH
                                </div>
                            </div>
                        </a>
                        
                        <div className="flex items-center justify-center font-formulafont-regular text-formula-white h-full ">
                        {nav.pages.map((page) => (
                            <div key={page.id} className="hover:bg-red-800 ease-out transition-colors flex">
                                <a href={page.href} className="py-9 px-10"> {page.name} </a>
                            </div>
                        ))}
                        </div>

                        <div className="flex items-center justify-center gap-x-5 mx-13">
                            <Button
                            buttonHref={"/login"}
                            buttonColor={"bg-formula-grey"}
                            buttonLabel={"LOGIN"}
                            buttonPadding={"px-7 py-2"}
                            buttonRadius={"rounded-md"}
                            labelColor={"text-formula-white"}
                            labelSize={"text-xs"}
                            />
                            <Button
                            buttonHref={"/register"}
                            buttonColor={"bg-formula-white"}
                            buttonLabel={"REGISTER"}
                            buttonPadding={"px-7 py-2"}
                            buttonRadius={"rounded-md"}
                            labelColor={"text-formula-red"}
                            labelSize={"text-xs"}

                            />
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

