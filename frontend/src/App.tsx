
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NoMatch from "./pages/NoMatch"
import Find from "./pages/Find";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Registration from "./pages/Registration";
import RegistrationHost from "./pages/RegistrationHost";
import RegistrationGuest from "./pages/RegistrationGuest";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Imprint from "./pages/Imprint";
import ScrollToTop from "./components/ScrollToTop";
import User from "./pages/User";
import Venue from "./pages/Venue";
import MyVenueUI from "./components/ui/myVenueProfileUI/MyVenueProfileUI";
import MyVenue from "./pages/MyVenue";
import MyVenueProfile from "./pages/MyVenueProfile";
import MyEvents from "./pages/MyEvents";

function App() {
  return (
    <>

      <BrowserRouter>
      <ScrollToTop/>
          <Routes>

              <Route index element={<Home />} />
              {/** public */}
              <Route path="/home" element={<Home></Home>} />

              <Route path="/login" element={<Login/>} ></Route>

              <Route path="/register" element={<Registration/>} ></Route>

              <Route path="/register/host" element={<RegistrationHost/>} ></Route>

              <Route path="/register/host/success" element={<RegistrationHost/>} ></Route>

              <Route path="/register/guest" element={<RegistrationGuest/>} ></Route>

              <Route path="/find" element={<Find/>} ></Route>

              <Route path="/aboutUs" element={<About/>} ></Route>

              <Route path="/contact" element={<Contact />} ></Route>

              <Route path="/imprint" element={<Imprint />} ></Route>

              <Route path="/test" element={<Test/>} ></Route>
              
              <Route path="/*" element={<NoMatch />} ></Route>`
              {/** host */}
              <Route path="/myvenue" element={<MyVenue />} ></Route>

              <Route path="/myvenue/:venuename" element={<MyVenueProfile />} ></Route>

              <Route path="/myevents" element={<MyEvents />} ></Route>

              <Route path="/venue/:venuename" element={<Venue />} ></Route>
              
              <Route path="/dashboard" element={<Dashboard />} ></Route>
              {/** guest */}
              <Route path="/user/:username" element={<User />} ></Route>

          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
