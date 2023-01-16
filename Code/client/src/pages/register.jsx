import React from 'react'
import LoginImg from '../assets/Sign up.gif'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook (1).png'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Lang, useFormInputValidation } from "react-form-input-validation";
import axios from "axios";

export default function Register() {
    console.log('register' )

        const [fields, errors, form] = useFormInputValidation(
            {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            {
                name: "required",
                email: "required|email",
                password: "required|confirmed",
                password_confirmation: "required|same:password"
            }
        );


        form.useLang(Lang.en);
        const onSubmit = async (event) => {
            console.log('onsubmit')
            const isValid = await form.validate(event);
            if (isValid) {

                console.log("MAKE AN API CALL", fields, errors);
                let name = fields.name ;
                let email = fields.email ;
                let password =fields.password ;
                
                
                const configuration =
                    {
                        method: "POST",
                        url: "http://localhost:8000/api/auth/register",
                        data: {
                            email,
                            password,
                            name,
                            
                        },
                        config: { headers: { 'Content-Type': 'multipart/form-data' } }
                    };
                    axios(configuration)
                        .then((result) => {
                            console.log(result.data)
                            // setRegister(true);
                            // setError(null);
                        })
                        .catch((error) => {
                            console.log(error);
                            // setError(error.response.data.message);
                            // setRegister(false);
                            error = new Error();
                        });
            }
        };


        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                    <img className='w-full h-full ' src={LoginImg} alt='Login img' />
                </div>
                <div className='bg-neutral-50 flex flex-col justify-center'>
                    <div className='max-w-[460px] w-full mx-auto bg-white p-5 px-8 rounded-lg shadow-lg'>
                        <div className='space-y-1'>
                            <p className='text-lg text-gray-600'>Welcome to Marhaba ! It's quick and easy 💛</p>
                        </div>

                        

                        

                        <form noValidate autoComplete="off" onSubmit={onSubmit} className='pt-1 space-y-4'>
                            <div>
                                <input type="text"
                                    name="name"
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.name}
                                    // To override the attribute name
                                
                                    placeholder='Your name !'
                                    className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'

                                />
                                <span className='text-sm text-red-600 '>{errors.name ? errors.name : ""}</span> 
                            </div>
                            <div>
                                <input type="email"
                                    name="email"
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.email}
                                    // To override the attribute name
                                    

                                    placeholder='Your email !'
                                    className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                                />
                                <span className='text-sm text-red-600'>{errors.email ? errors.email : ""}</span> 
                            </div>

                            <div>
                                <input type="password"
                                    name="password"
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.password}
                                    placeholder="What's the secret word ?"
                                    className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                                />
                                <span className='text-sm text-red-600'>{errors.password ? errors.password : ""}</span> 
                            </div>

                            <div>
                                <input type="password"
                                    name="password_confirmation"
                                    onBlur={form.handleBlurEvent}
                                    onChange={form.handleChangeEvent}
                                    value={fields.password_confirmation}
                                    placeholder="Confirm the secret word !"
                                    className='w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400'
                                />
                                <span className='text-sm text-red-600'>{errors.password_confirmation ? errors.password_confirmation : ""}</span> 
                            </div>
                            <div className='flex flex-col'>
                                <button type='submit' className='block w-full px-7 py-3 rounded-xl bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-500'>
                                    <span className='text-lg text-white'>Register</span>
                                </button>
                                <p className='p-1 text-center'>
                                    <span className='text-yellow-300'><NavLink to="/">Already have an account ?</NavLink></span>
                                </p>
                            </div>
                        </form>


                    </div>
                </div>

            </div>
        )
    }
