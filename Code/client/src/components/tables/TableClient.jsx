import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiSearch } from "../../assets/icons";

const LINK = "http://localhost:8000/api/client";

function TableClient({ clients, setDeleted }) {
    const deleteClient = (id) => {
        axios
            .delete(LINK + "/delete/" + id)
            .then(() => setDeleted((prev) => !prev));
    };
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <h1 className="text-2xl font-bold">Liste Clients</h1>
                <Link
                    to={"/dashboard/AddClient"}
                    className="btn bg-yellow-500 border-none hover:bg-gray-800"
                >
                    Ajouter Client
                </Link>
            </div>
            <div className="overflow-auto bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>cin</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr>
                                <td>{client._id}</td>
                                <td>{client.name}</td>
                                <td>{client.cin}</td>
                                <td>{client.email}</td>
                                <td>{client.phone}</td>
                                <td className="flex flex-row gap-2">
                                    <Link
                                        to={"/dashboard/addpayment/" + client._id}
                                        className="btn btn-ghost btn-xs bg-gray-800 hover:bg-green-500 text-white"
                                    >
                                        Payment
                                    </Link><Link
                                        to={"/dashboard/updateclient/" + client._id}
                                        className="btn btn-ghost btn-xs bg-gray-800 hover:bg-yellow-500 text-white"
                                    >
                                        Modifier
                                    </Link>
                                    <button
                                        onClick={() => deleteClient(client._id)}
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

export default TableClient