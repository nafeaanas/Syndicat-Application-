import Login from "./pages/login";
import Register from "./pages/register";
import Reset from "./pages/resetpassword";
import Forgot from "./pages/forgotpassword";
import Home from "./pages/home";
import {Routes,Route} from "react-router-dom"
import Protected from "./Protected";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/"element={<Login/>}/>
        {/* <Route path="/logout"element={<Login/>}/> */}
        <Route path="/register"element={<Register/>}/>
        <Route path="/reset"element={<Reset/>}/>
        <Route path="/forgot"element={<Forgot/>}/>

        <Route path="/"element={<Protected/>}>
            <Route path="/home"element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
