import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import MainLayouts from "../layouts/MainLayouts"
const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="layouts/home" />} />
            <Route path="layouts" element={<MainLayouts />}>
                <Route path="home" element={<Home />} />
            </Route>
        </Routes>
    )
}


export default Router