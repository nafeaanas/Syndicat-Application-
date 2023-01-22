import { Routes, Route, Form } from "react-router-dom";
import Layout from "./components/dashboard/Layout";
import ProtectedRoutes from "./components/protected";

import {
  notfound,
  PaymentPage,
  LoginPage,
  DashboardPage,
  ClientPage,
  ApparetementPage,
} from "./pages/index";

import { AddAppartemt, AddClient, AddPayment } from "./components/add/index";
import {
  UpdateAppartement,
  UpdateClient,
  UpdatePayment,
} from "./components/update/index";
// import ProtectedRoutes from "./components/protected";

function App() {
  return (
    <div>



<Routes>

    <Route path="/" element={<LoginPage />} />
    <Route path="*" element={<notfound/>}/>
    <Route element={<ProtectedRoutes/>}>
    <Route path="dashboard/" element={<Layout />}>
              <Route path="client" element={<ClientPage />} />
              <Route path="apparetement" element={<ApparetementPage />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="addappartement" element={<AddAppartemt />} />
              <Route path="addclient" element={<AddClient />} />
              <Route path="addpayment/:id" element={<AddPayment />} />
              <Route path="updateappartement/:id" element={<UpdateAppartement />} />
              <Route path="updateclient/:id" element={<UpdateClient />} />
              <Route path="updatepayment/:id" element={<UpdatePayment />} />
    </Route>
    </Route>
</Routes>



      
    </div>
  );
}

export default App;
