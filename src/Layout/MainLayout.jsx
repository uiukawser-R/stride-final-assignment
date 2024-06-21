import { Outlet } from "react-router-dom";
import Footer from "../Componentes/Footer";
import Navbar from "../Componentes/Navbar";

const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;