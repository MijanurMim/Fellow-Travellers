import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import AddMember from "./pages/AddMember/AddMember";
import AddPackages from "./pages/AddPackages/AddPackages";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import MyBookings from "./pages/MyBookings/MyBookings";
import NotFound from "./pages/NotFound/NotFound";
import PackageDetails from "./pages/Packages/PackageDetails/PackageDetails";
import Packages from "./pages/Packages/Packages/Packages";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import TotalBookings from "./pages/TotalBookings/TotalBookings";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/packages">
              <Packages></Packages>
            </Route>
            <PrivateRoute exact path="/addPackages">
              <AddPackages></AddPackages>
            </PrivateRoute>
            <PrivateRoute exact path="/packageDetails/:packageId">
              <PackageDetails></PackageDetails>
            </PrivateRoute>

            <PrivateRoute exact path="/addMember">
              <AddMember></AddMember>
            </PrivateRoute>
            <PrivateRoute exact path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/totalBookings">
              <TotalBookings></TotalBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
