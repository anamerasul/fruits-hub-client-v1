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
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateProfile from "./Pages/LoginSignUp/UpdateProfile/UpdateProfile";
import ForgotPassword from "./Pages/LoginSignUp/ForgotPassword/ForgotPassword";
import UpdateProfileAndEmail from "./Pages/LoginSignUp/UpdateProfileAndEmail/UpdateProfileAndEmail";
import UpdateEmail from "./Pages/LoginSignUp/UpdateEmail/UpdateEmail";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import UpdateStockQuantity from "./Pages/UpdateStockQuantity/UpdateStockQuantity";
import DetailsItem from "./Pages/DetailsItem/DetailsItem";

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
          element={
            <RequireAuth>
              <Manageinventory></Manageinventory>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/magnageitems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <UpdateStockQuantity></UpdateStockQuantity>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/itemscarddetails/:id"
          element={
            <RequireAuth>
              <DetailsItem></DetailsItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/updateProfileAndEmail"
          element={<UpdateProfileAndEmail></UpdateProfileAndEmail>}
        ></Route>

        <Route
          path="/updateProfile"
          element={
            <RequireAuth>
              <UpdateProfile></UpdateProfile>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/updateemail"
          element={<UpdateEmail></UpdateEmail>}
        ></Route>

        <Route
          path="/forgotpassword"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/logout"
          element={
            <RequireAuth>
              <Logout></Logout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
