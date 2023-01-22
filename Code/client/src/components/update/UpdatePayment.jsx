import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const LINK = "http://localhost:8000/api/payment";


function UpdatePayment() {
    const [data, setData] = useState({
        cin: "",
        Number_Appartement: "",
        Date: "",
        Montant: "",
        Statut_Payment: "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(LINK + "/payment/" + id).then((res) => {
            let Number_Appartement = res.data.Number_Appartement.Number_Appartement
            let cin = res.data.cin.cin
            setData({...res.data, Number_Appartement, cin})
        });
    }, []);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(LINK + "/payment/" + id, data);
        navigate("/dashboard/payment");
    };
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <form onSubmit={handleSubmit} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl" >
                    <div>
                        <label htmlFor="NameResidence" className="text-sm font-medium text-black">Cin</label>
                        <div className="relative mt-1">
                            <input value={data.cin} name="cin" id="cin" onChange={handleChange} type="text" className="w-full rounded-lg border-gray-200 text-black p-4 pr-12 text-sm shadow-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Number_Appartement</label>
                        <div className="relative mt-1">
                            <input value={data.Number_Appartement} name="Number_Appartement" id="Number_Appartement" onChange={handleChange} type="text" className="w-full rounded-lg border-gray-200 text-black p-4 pr-12 text-sm shadow-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Date</label>
                        <div className="relative mt-1">
                            <input value={data.Date} name="Date" id="Date" onChange={handleChange} type="Date" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Montant</label>
                        <div className="relative mt-1">
                            <input value={data.Montant} name="Montant" id="Montant" onChange={handleChange} type="text" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="NumberAppartement" className="text-sm text-black font-medium">Statut_Payment</label>
                        <div className="relative mt-1">
                            <input value={data.Statut_Payment} name="Statut_Payment" id="Statut_Payment" onChange={handleChange} type="text" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" />
                        </div>
                    </div>
                    <button type="submit" className="block w-full rounded-lg  px-5 py-3 text-sm font-medium bg-yellow-500 text-white">
                        Payment
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePayment