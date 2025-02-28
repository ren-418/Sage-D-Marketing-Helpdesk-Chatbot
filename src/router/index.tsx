import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import MainLayouts from "../layouts/MainLayouts"
import AboutUs from "../pages/Aboutus"
import OurApproach from "../pages/OurApproach"
import Services from "../pages/Services"
import OurWork from "../pages/OurWork"

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="layouts/home" />} />
            <Route path="layouts" element={<MainLayouts />}>
                <Route path="home" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="our-approach" element={<OurApproach />} />
                <Route path="services" element={<Services />} />
                <Route path="our-work" element={<OurWork />} />
            </Route>
        </Routes>
    )
}


export default Router