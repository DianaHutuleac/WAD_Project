import Button from "../Elements/Buttons";
import FormulaLogo from "../SVG/formula1";
import { Link, withRouter  } from 'react-router-dom';

 /* TODO: Correctly add the href to corespond to each page */
const nav = {
    pages: [
        { id: 1, name: 'All Products', href: '/admin/products' },
        { id: 2, name: 'Orders', href: '/admin/orders' },
        { id: 3, name: 'Add Products', href: '/admin/addproducts' }
    ]
}

export default function AdminNavbarComponent() {
    return(
        <div className="bg-formula-red fixed w-screen z-50">
            <header className="relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="h-24 flex items-center justify-between">
                        
                            {/* F1 Logo */}
                            <div className="flex items-center gap-x-3">
                                <FormulaLogo />
                                <div className="font-formulafont text-xl text-formula-white">
                                    ADMIN
                                </div>
                            </div>
                        
                        
                        <div className="flex items-center justify-center font-formulafont-regular text-formula-white h-full ">
                        {nav.pages.map((page) => (
                            <div key={page.id} className="hover:bg-formula-grey ease-out transition-colors flex">
                                <Link to={page.href} className="py-9 px-10"> {page.name} </Link>
                            </div>
                        ))}
                        </div>

                        <div className="flex items-center justify-center gap-x-5 mx-13">
                            <Button
                            buttonHref={"/"}
                            buttonColor={"bg-formula-grey"}
                            buttonLabel={"LOGOUT"}
                            buttonPadding={"px-7 py-2"}
                            buttonRadius={"rounded-md"}
                            labelColor={"text-formula-white"}
                            labelSize={"text-xs"}
                            />
                            <Button
                            buttonHref={"/"}
                            buttonColor={"bg-formula-white"}
                            buttonLabel={"GO TO WEBSITE"}
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

