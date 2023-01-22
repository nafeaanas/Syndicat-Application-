import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LINK = "http://localhost:8000/api/client";

function AddClient() {

    const [data, setData] = useState({
        phone: "",
        email: "",
        cin: "",
        name: ""
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(LINK + "/create", data);
        navigate("/dashboard/client");
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <form onSubmit={handleSubmit} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl" >
                    <div>
                        <label htmlFor="NameResidence" className="text-sm font-medium text-black">Name</label>
                        <div className="relative mt-1">
                            <input value={data.name} name="name" id="name" onChange={handleChange} type="text" className="w-full rounded-lg border-gray-200 text-black p-4 pr-12 text-sm shadow-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Cin</label>
                        <div className="relative mt-1">
                            <input value={data.cin} onChange={handleChange} name="cin" id="cin" type="text" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Email</label>
                        <div className="relative mt-1">
                            <input value={data.email} name="email" id="email" onChange={handleChange} type="text" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Phone</label>
                        <div className="relative mt-1">
                            <input value={data.phone} name="phone" id="phone" onChange={handleChange} type="text" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" />
                        </div>
                    </div>
                    <button type="submit" className="block w-full rounded-lg  px-5 py-3 text-sm font-medium bg-yellow-500 text-white">
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddClient