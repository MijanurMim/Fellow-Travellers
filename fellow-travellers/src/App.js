import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Home from "./pages/Home/Home/Home";
import Reviews from "./pages/Home/Reviews/Reviews";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import MyBookings from "./pages/MyBookings/MyBookings";
import NotFound from "./pages/NotFound/NotFound";
import Packages from "./pages/Packages/Packages/Packages";
import Services from "./pages/Services/Services/Services";
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
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/packages">
              <Packages></Packages>
            </PrivateRoute>
            <Route exact path="/reviews">
              <Reviews></Reviews>
            </Route>
            <Route exact path="/myBookings">
              <MyBookings></MyBookings>
            </Route>
            <Route exact path="/totalBookings">
              <TotalBookings></TotalBookings>
            </Route>
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
