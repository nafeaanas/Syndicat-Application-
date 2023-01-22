import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const LINK = "http://localhost:8000/api/apartement";

function UpdateAppartement() {
    const [data, setData] = useState({
        Number_Appartement: "",
        Name_Immeuble: "",
        Status: "",
        Numbre_Etage_Appartement: "",
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(LINK + "/appartement/" + id).then((res) => setData(res.data));
    }, []);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(LINK + "/appartement/" + id, data);
        navigate("/dashboard/apparetement");
    };
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <form onSubmit={handleSubmit} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl" >
                    <div>
                        <label htmlFor="NameResidence" className="text-sm font-medium text-black">NAME_IMMEUBLE</label>
                        <div className="relative mt-1">
                            <input value={data.Name_Immeuble} name="Name_Immeuble" id="Name_Immeuble" onChange={handleChange} className="w-full rounded-lg border-gray-200 text-black p-4 pr-12 text-sm shadow-sm" placeholder='' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">NUMBER_APPARTEMENT</label>
                        <div className="relative mt-1">
                            <input value={data.Number_Appartement} name="Number_Appartement" id="Number_Appartement" onChange={handleChange} className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder='' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">STATUS</label>
                        <div className="relative mt-1">
                            <input value={data.Status} name="Status" id="Status" onChange={handleChange} className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder='' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Numbre Etage Appartement</label>
                        <div className="relative mt-1">
                            <input value={data.Numbre_Etage_Appartement} name="Numbre_Etage_Appartement" id="Numbre_Etage_Appartement" onChange={handleChange} className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder='' />
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

export default UpdateAppartement