import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const LINK = "http://localhost:8000/api/payment";

function AddPayment() {
  const [data, setData] = useState({
    cin: "",
    Number_Appartement: "",
    Date: "",
    Montant: "",
    Statut_Payment: "",
  });
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/apartement/appartements").then((res) => setApartments(res.data));
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8000/api/client/client/" + id).then((res) => setData(res.data));
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(LINK + "/payment", data);
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
              <select
                value={data.Number_Appartement}
                onChange={handleChange}
                name="Number_Appartement"
                id="Number_Appartement"
                className="select w-full block px-4 py-2 rounded-none text-gray-700 placeholder-gray-400 bg-white border border-gray-200 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                {apartments.map((apartment, id) => (
                  <option key={id}>{apartment.Number_Appartement}</option>
                ))}
              </select>
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

export default AddPayment