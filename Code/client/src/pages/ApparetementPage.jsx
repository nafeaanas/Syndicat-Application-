import React from 'react'
import TableAppartement from '../components/tables/TableAppartement'
import { useState, useEffect } from "react";
import axios from "axios";

const LINK = "http://localhost:8000/api/apartement";


function ApparetementPage() {

  const [apartments, setApartments] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios.get(LINK + "/appartements").then((res) => setApartments(res.data));
  }, [deleted]);

  return (
    <div>
        <TableAppartement apartments={apartments} setDeleted={setDeleted}/>
    </div>
  )
}

export default ApparetementPage