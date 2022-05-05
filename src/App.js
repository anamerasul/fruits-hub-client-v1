import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Manageinventory from "./Pages/Manage-Inventory/MangeInventory";
import Login from "./Pages/LoginSignUp/Login/Login";
import SignUp from "./Pages/LoginSignUp/SignUp/SignUp";
import ManageItems from "./Pages/ManageItems/ManageItems";
import AddItems from "./Pages/AddItems/AddItems";
import MyItems from "./Pages/MyItems/MyItems";
import Logout from "./Pages/LoginSignUp/Logout/Logout";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/manageinventory"
          element={<Manageinventory></Manageinventory>}
        ></Route>

        <Route
          path="/magnageitems"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="/additems" element={<AddItems></AddItems>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
