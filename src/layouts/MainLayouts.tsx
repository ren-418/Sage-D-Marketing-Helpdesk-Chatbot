import { Outlet } from "react-router-dom"
import Header from "../components/mainlayouts/Header"
import Footer from "../components/mainlayouts/Footer"

const MainLayouts: React.FC = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}


export default MainLayouts;