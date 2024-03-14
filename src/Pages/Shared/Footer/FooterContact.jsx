import moment from 'moment';
import ScrollToTop from "react-scroll-to-top";

const FooterContact = () => {
    return (
        <div>
            <div>
                <ScrollToTop
                    style={{ bottom: '90px', right: '15px', borderRadius: '8%' }}
                    width='40'
                    viewBox='0 0 250 200'
                    smooth
                    top={400}
                    color="#3B82F6"
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

