import React from 'react'
import TablePayment from '../components/tables/TablePayment'
import { useState, useEffect } from "react";
import axios from "axios";

const LINK = "http://localhost:8000/api/payment";

function PaymentPage() {

    const [factures, setFactures] = useState([]);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        axios.get(LINK + "/payments").then((res) => setFactures(res.data));
    }, [deleted]);

    return (
        <div>
            <TablePayment factures={factures} setDeleted={setDeleted} />
        </div>
    )
}

export default PaymentPage