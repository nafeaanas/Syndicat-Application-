import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiSearch } from "../../assets/icons";

const LINK = "http://localhost:8000/api/payment";

function TablePayment({ factures, setDeleted }) {
    const deletefacture = (id) => {
        axios
            .delete(LINK + "/payment/" + id)
            .then(() => setDeleted((prev) => !prev));
    };
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <h1 className="text-2xl font-bold">Liste Payments</h1>
            </div>
            <div className="overflow-auto bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cin</th>
                            <th>Number_Appartement</th>
                            <th>Date</th>
                            <th>Montant</th>
                            <th>Statut_Payment</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {factures.map((facture) => (
                            <tr>
                                <td>{facture._id}</td>
                                <td>{facture.cin?.cin}</td>
                                <td>{facture.Number_Appartement?.Number_Appartement}</td>
                                <td>{facture.Date}</td>
                                <td>{facture.Montant}</td>
                                <td>{facture.Statut_Payment}</td>
                                <td className="flex flex-row gap-2">
                                    <Link
                                        to={"/dashboard/updatepayment/" + facture._id}
                                        className="btn btn-ghost btn-xs bg-gray-800 hover:bg-yellow-500 text-white"
                                    >
                                        Modifier
                                    </Link>
                                    <button
                                        onClick={() => deletefacture(facture._id)}
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

export default TablePayment