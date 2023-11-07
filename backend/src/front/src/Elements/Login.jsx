import {useSearchParams} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

export default function LoginElement() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();
    const msg = searchParams.get("message")

    const LOGON_URI = 'http://localhost:8080/api/login';

    const handleSubmit = event => {
        event.preventDefault();

        const params = new URLSearchParams();

        params.append('username', email);
        params.append('password' , password);

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }      

        axios.post (LOGON_URI, params, config)
                .then(response => {
                    console.log(response);
                    if (response.status == 302) {
                        window.location.href = "/";
                    }
                })
                .catch(window.location.href = "/")
    }

    return (
        <div className="max-w-7xl mx-auto px-4 pt-48 ">
            <div className="h-full">
                <h1 className=" font-formulafont-bold text-formula-grey text-2xl">Login</h1>
                <div className="border-[6px] flex justify-center border-l-0 border-b-0 border-formula-red rounded-tr-2xl ">
                    
                   
                    
                    <form className="mb-32" onSubmit={handleSubmit}>


                        {
                            msg === "success" ?

<div className="bg-blue-200 mt-10 p-4 text-blue-800 font-titilium font-semibold rounded-lg">
<p>
    Registration Succeded! Please Sign In with your credentials.
</p>
</div>

: <>
</>


                        }


                        
{
                            msg === "err" ?

<div className="bg-red-200 mt-10 p-4 text-red-700 font-titilium font-semibold rounded-lg">
<p>
    Invalid Email or Password! Please Try Again.
</p>
</div>

: <>
</>


                        }






                    
            

                        <div className="w-[35ewm] mt-10 ">


                            
                        <label className="flex flex-col px-2 font-titilium font-semibold">
                            Email Address 
                        
                        </label>
                        <input placeholder="Enter your email address" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="text" 
                        
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        
                        />

                        </div>
                        
                        <div className="w-[35rem] mt-10">
                         <label className="flex flex-col px-2 font-titilium font-semibold">
                            Password 
                        </label>
                            <input placeholder="Enter your password" className="border-[1px] rounded-lg px-1 py-2 transition-all ease-out border-black w-full" type="password" 
                            
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            
                            />
                        

                        </div>

                        <div className="mt-10">
                        <button type="submit" className="font-titilium font-semibold hover:-translate-y-0.5 hover:shadow-md duration-700 ease-out transition-all bg-formula-red px-10 py-4 rounded-md text-formula-white text-md">
                            SIGN IN
                        </button>
                       
                        </div>

                       
                        
                    </form>
                </div>
            </div>
        </div>
    )
}