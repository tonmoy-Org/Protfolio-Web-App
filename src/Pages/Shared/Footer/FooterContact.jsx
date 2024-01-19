import moment from 'moment';
import ScrollToTop from "react-scroll-to-top";

const FooterContact = () => {
    return (
        <div>
            <div>
                <ScrollToTop
                    style={{ bottom: '130px', right: '39px', borderRadius: '50%' }}
                    width='33'
                    viewBox='-20 0 240 190'
                    smooth
                    top={600}
                    color="#3B82F6"
                />
            </div>
            <footer className="footer footer-center p-16 bg-[#3a3a3a] text-[#fff] rounded">
                <div>
                <p className='text-[17px] mb-10'>Copyright © {moment().format('yyyy')} Md. Tanvir Hasan Tonmoy</p>
                </div>
            </footer>
        </div>
    );
};

export default FooterContact;

