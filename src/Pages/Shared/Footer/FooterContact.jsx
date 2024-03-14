import moment from 'moment';
import ScrollToTop from "react-scroll-to-top";

const FooterContact = () => {
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
            <footer className="footer footer-center p-12 bg-[#3d155f] text-[#badd76]">
                <div>
                    <p className='text-[17px] mb-20'>Copyright © {moment().format('yyyy')} Md. Tanvir Hasan Tonmoy</p>
                </div>
            </footer>
        </div>
    );
};

export default FooterContact;

