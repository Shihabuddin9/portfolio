import { Outlet } from "react-router-dom";
import Footer from "../../component/Pages/Footer/Footer";
import { ToastContainer } from 'react-toastify';


const Roots = () => {
    return (
        <div>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;