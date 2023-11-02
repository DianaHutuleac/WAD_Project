import { useState } from "react";
import axios from 'axios';

export default function RegisterElement() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const REGISTER_URI = 'http://localhost:8080/api/register';

    const handleSubmit = event => {
        event.preventDefault();

        const payload = {
            firstName,
            lastName,
            email,
            userName : email,
            password
        }

        axios.post (REGISTER_URI, payload)
                .then(response => {
                    console.log(response);
                    if (response.status == 200) {
                        window.location.href = "/login?message=success";
                    }
                })
                .catch(err => console.log(err))
    }

    return (
        <div className="max-w-7xl mx-auto px-4 pt-48 ">
            <div className="h-full">
                <h1 className=" font-formulafont-bold text-formula-grey text-2xl">Register</h1>
                <div className="border-[6px] flex justify-center border-l-0 border-b-0 border-formula-red rounded-tr-2xl ">
                    <form className="mb-32" onSubmit={handleSubmit}>
                        <div className="w-[35ewm] mt-20 ">
                        <label className="flex px-2 font-titilium font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
                            First Name 
                        
                        </label>
                        <input placeholder="John" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text"  
                        
                        onChange={event => setFirstName(event.target.value)}
                        value={firstName}
                        
                        />

                        </div>

                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Last Name
                        
                        </label>
                        <input placeholder="Doe" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 
                        
                        onChange={event => setLastName(event.target.value)}
                        value={lastName}
                        
                        />

                        </div>

                        
                        <div className="w-[35ewm] mt-2 ">
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Email
                        
                        </label>
                        <input placeholder="john@doe.com" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 
                        
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        
                        />

                        </div>
                        
                        <div className="w-[35rem] mt-2">
                         <label className="flex flex-col px-2 font-titilium font-semibold">
                            Password 
                        </label>
                            <input placeholder="********" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="password" 
                            
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            
                            />
                        

                        </div>

                        <div className="mt-10">
                        <button type="submit" className="font-titilium font-semibold hover:-translate-y-0.5 hover:shadow-md duration-700 ease-out transition-all bg-formula-red px-10 py-4 rounded-md text-formula-white text-md">REGISTER</button>
                        </div>

                       
                        
                    </form>
                </div>
            </div>
        </div>
    )
}