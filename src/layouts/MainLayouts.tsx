import { Outlet } from "react-router-dom"
import Header from "../components/mainlayouts/Header"
import Footer from "../components/mainlayouts/Footer"
import SIATrigger from "../components/SIA/SIATrigger"

const MainLayouts: React.FC = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
            <SIATrigger />
        </div>
    )
}

export default MainLayouts;