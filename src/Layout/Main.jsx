import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Main = () => {
    return (
        <div>
            <div>
                <MessengerCustomerChat
                    pageId="103744185074635"
                    appId="799662015022254"
                    themeColor="#4831d4" // Change this color to customize the Messenger icon
                />
            </div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;