import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import MainLayouts from "../layouts/MainLayouts"
import AboutUs from "../pages/Aboutus"
const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="layouts/home" />} />
            <Route path="layouts" element={<MainLayouts />}>
                <Route path="home" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
            </Route>
        </Routes>
    )
}


export default Router