import github from '../../../assets/Icons/github.png'
import linkedin from '../../../assets/Icons/linkedin.png'
import twitter from '../../../assets/Icons/twitter.png'
import facebook from '../../../assets/Icons/facebook.png'
import moment from 'moment';
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
    return (
        <div>
            <div>
                <ScrollToTop
                    style={{
                        bottom: '88px',
                        right: '32px',
                        borderRadius: '8%',
                        backgroundColor: '#4831d4', // Add your desired background color here
                    }}
                    width='40'
                    viewBox='0 0 250 200'
                    smooth
                    top={400}
                    color="#ffff"
                />

            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <div className='flex gap-4 justify-center my-5'>
                        <div className='transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-100'>
                            <a href="https://github.com/Tonmoy-Org"> <img className='w-10 h-10 bg-[#fff] rounded-full' src={github} alt="" /></a>
                        </div>
                        <div className='transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-100'>
                            <a href="https://www.linkedin.com/in/md-tanvirhasantonmoy/"> <img className='w-10 h-10 bg-[#fff] rounded-md' src={linkedin} alt="" /></a>
                        </div>
                        <div className='transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-100'>
                            <a href="https://twitter.com/tonmoyOrg"> <img className='w-10 h-10' src={twitter} alt="" /></a>
                        </div>
                        <div className='transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-100'>
                            <a href="https://www.facebook.com/md.tanvirhasantonmoy.org?mibextid=ZbWKwL"> <img className='w-10 h-10' src={facebook} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-12 bg-[#3d155f] text-[#badd76]">
                <div>
                    <p className='text-[17px] mb-20'>Copyright © {moment().format('yyyy')} Md. Tanvir Hasan Tonmoy</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

