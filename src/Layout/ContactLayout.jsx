import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import FooterContact from "../Pages/Shared/Footer/FooterContact";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const ContactLayout = () => {
    return (
        <div>
            <div className='bottom-10'>
                <MessengerCustomerChat
                    pageId="103744185074635"
                    appId="799662015022254"
                />
            </div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterContact></FooterContact>
        </div>
    );
};

export default ContactLayout;