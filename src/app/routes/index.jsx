import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home, About, Services, Team, Contact } from "../pages"


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/contact" element={<Contact/>} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Switch>
      </BrowserRouter>
    )
}

export default Routes;