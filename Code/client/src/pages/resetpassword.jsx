import React from 'react'
import LoginImg from '../assets/Computer login.gif'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook (1).png'
export default function reset() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full ' src={LoginImg} alt='Login img'/>
            </div>
            <div className='bg-neutral-50 flex flex-col justify-center'>
                <div className='max-w-[460px] w-full mx-auto bg-white p-5 px-8 rounded-lg shadow-lg'>
                    <div className='space-y-2'>
                        <p className='text-lg text-gray-600'>Welcome to Marhaba ! Login first</p>
                    </div>

            

                    
                    <form action="" className='pt-4 space-y-6'>
                        <div>
                            <input type="email" 
                            placeholder='Your email !'
                            className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                        />
                        </div>

                        <div className='flex flex-col items-end'>
                            <input type="password" 
                            placeholder="what's the secret word ?"
                            className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                        />
                        <a href='' className='p-1 px-3 -mr-3'>
                            <span className='text-yellow-300'>Forgot password ?</span>

                        </a>
                        </div>

                        <div className='flex flex-col'>
                            <button type='submit' className='block w-full px-7 py-3 rounded-xl bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-500'>
                                <span className='text-lg text-white'>Login</span>
                            </button>
                            <a href="" className='p-1 text-center'>
                                <span className='text-yellow-300'>Create new account</span>
                            </a>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    )
}
