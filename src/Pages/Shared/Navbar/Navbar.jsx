import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Links from "./Links";
import logo from '../../../assets/logo/letter-t-.png'

const Navbar = () => {
    const routes = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About Me",
            path: "/about-me"
        },
        {
            id: 3,
            name: "Contact",
            path: "/contact/contact-me"
        },

    ];
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <nav className='bg-white border-b-2 border-[#7a7a7a4f]'>
            <div className='lg:hidden flex justify-between items-center m-5 px-7'>
                <div>
                    <Link className="flex items-center" to='/'>
                        <img className="w-10" src={logo} alt="" />
                        <span style={{ fontFamily: "Protest Revolution, sans-serif", fontWeight: 600, fontStyle: "normal" }} className="font-extrabold text-[2rem] text-[#4831d4] font-mono">Tonmoy</span>
                    </Link>
                </div>
                <span onClick={() => setOpen(!open)} >{open === true
                    ? <XMarkIcon className="h-8 w-8 text-[#4831d4]" />
                    : <Bars3Icon className="h-8 w-8 text-[#4831d4]" />
                }</span>
            </div>
            <div className={`absolute lg:static bg-white z-10 lg:px-40 w-full ease-out duration-300 ${open ? 'top-[calc(100% - 40px)]' : '-top-full'}`}>
                <div className="lg:flex lg:items-center lg:justify-between">
                    <Link className="flex items-center" to='/'>
                        <img className="w-10 hidden lg:block" src={logo} alt="" />
                        <span style={{ fontFamily: "Protest Revolution, sans-serif", fontWeight: 700, fontStyle: "normal" }} className="font-extrabold text-[2rem] text-[#4831d4] font-mono ">Tonmoy</span>
                    </Link>

                    <div className='lg:flex lg:justify-end lg:items-center gap-8 lg:py-2'>
                        {
                            routes.map(route =>
                                <Links
                                    key={route.id}
                                    route={route}
                                    onClick={handleLinkClick}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </nav >

    );
};

export default Navbar;