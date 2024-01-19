import { Helmet } from "react-helmet";
import github from '../../assets/Icons/github.png'
import linkedin from '../../assets/Icons/linkedin.png'
import twitter from '../../assets/Icons/twitter.png'
import facebook from '../../assets/Icons/facebook.png'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>{`Contact - Tanvir Hasan Tonmoy' s Log`}</title>
            </Helmet>
            <div className="bg-violet-50 text-black min-h-[510px] pt-40">
                <div className="text-center">
                    <h1 className="mb-5 text-5xl  font-bold pb-4" data-aos="fade-down"
                        data-aos-duration="2000">Contact</h1>
                    <div className="grid grid-flow-col gap-4">
                        <div className='flex justify-center gap-4'>
                            <div className='transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300'>
                                <a href="https://github.com/Tonmoy-Org"> <img className='w-10 bg-[#fff] rounded-full' src={github} alt="" /></a>
                            </div>
                            <div className='transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300'>
                                <a href="https://www.linkedin.com/in/md-tanvirhasantonmoy/"> <img className='w-10 bg-[#fff] rounded-md' src={linkedin} alt="" /></a>
                            </div>
                            <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>
                                <a href="https://twitter.com/tonmoyOrg"> <img className='w-10' src={twitter} alt="" /></a>
                            </div>
                            <div className='transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300'>
                                <a href="https://www.facebook.com/md.tanvirhasantonmoy.org?mibextid=ZbWKwL"> <img className='w-10' src={facebook} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <p className="pt-4 text-xl" data-aos="fade-up"
                        data-aos-duration="2000">Get in touch through the social media</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;