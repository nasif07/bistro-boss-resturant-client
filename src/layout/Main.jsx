import { Outlet } from "react-router-dom";
import Footer from "../routes/shared/footer/Footer";
import NavBar from "../routes/shared/navbar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;