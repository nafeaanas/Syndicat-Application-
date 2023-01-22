import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "../../assets/icons";

const LINK = "http://localhost:8000/api/apartement";

function TableAppartement({ apartments, setDeleted }) {
    const deleteApartment = (id) => {
        axios
            .delete(LINK + "/delete/" + id)
            .then(() => setDeleted((prev) => !prev));
    };
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <h1 className="text-2xl font-bold">Liste Appartements</h1>
                <Link
                    to={"/dashboard/addappartement"}
                    className="btn bg-yellow-500 border-none hover:bg-gray-800"
                >
                    Ajouter Appartement
                </Link>
            </div>
            <div className="overflow-auto bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name_Immeuble</th>
                            <th>Number_Appartement</th>
                            <th>Status</th>
                            <th>Numbre_Etage_Appartement</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apartments.map((apartment) => (
                            <tr>
                                <td>{apartment._id}</td>
                                <td>{apartment.Name_Immeuble}</td>
                                <td>{apartment.Number_Appartement}</td>
                                <td>{apartment.Status}</td>
                                <td>{apartment.Numbre_Etage_Appartement}</td>
                                <td className="flex flex-row gap-2">
                                    <Link
                                        to={"/dashboard/updateappartement/" + apartment._id}
                                        className="btn btn-ghost btn-xs bg-gray-800 hover:bg-yellow-500 text-white"
                                    >
                                        Modifier
                                    </Link>
                                    <button
                                        onClick={() => deleteApartment(apartment._id)}
                                        className="btn btn-ghost btn-xs bg-gray-800 hover:bg-red-600 text-white"
                                    >
                                        Suprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableAppartement