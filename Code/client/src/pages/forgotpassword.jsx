import React from 'react'
import LoginImg from '../assets/Forgot password.gif'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import axios from "axios";

export default function Forgot() {
    const [email, setEmail] = useState("");
    const [forget, setForget] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        // set configurations
        const configuration = {
            method: "POST",
            url: "http://localhost:8000/api/auth/forgetpassword",
            data: {
                email,
            },
        };
        axios(configuration)
            .then((result) => {
                console.log(result.data)
                setForget(true);
            })
            .catch((error) => {
                setForget(false);
                console.log(error);
                console.log(error.response.data.message);
                setError(error.response.data.message);
                error = new Error();
            });

        e.preventDefault();
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full ' src={LoginImg} alt='Login img' />
            </div>
            <div className='bg-neutral-50 flex flex-col justify-center'>
                <div className='max-w-[460px] w-full mx-auto bg-white p-5 px-8 rounded-lg shadow-lg'>
                    <div className='space-y-2'>
                        <p className='text-lg text-gray-600'>You can reset it now 💪</p>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className='pt-4 space-y-6'>
                        <div>
                            <input type="email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                placeholder='Your email !'
                                className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <button type='submit' className='block w-full px-7 py-3 rounded-xl bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-500'>
                                <span className='text-lg text-white'>Recover password</span>
                            </button>
                            <p className='p-1 text-center'>
                                <span className='text-yellow-300'><NavLink to="/">Back to login</NavLink></span>
                            </p>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    )
}
