import { Link } from 'react-router-dom';
import profile from '../../../assets/profile/IMG_20230425_210725_802.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-bg lg:py-20 py-10'>
            <div className="lg:flex gap-4 md:flex justify-center items-center">
                <div className='mx-10 lg:mx-0'>
                    <div className='lg:pt-14'>
                        <div className='text-[#ccf381] font-extrabold lg:text-4xl md:text-[3rem] text-[2.5rem]'>
                            <h2 className='lg:leading-relaxed'>
                                FULL STACK <br /> DEVELOPER | MERN<span className='text-white'>.</span></h2>
                        </div>
                        <p className='mt-4 lg:leading-relaxed lg:text-[18px] text-white'>Building seamless digital experiences with MERN stack, I bring <br />full-stack expertise and a passion for creating innovative solutions.</p>
                    </div>
                    <div>
                        <div className='mt-5'>
                        <Link to='https://drive.google.com/file/d/1e-ID2RaXfQjEKnajEtF8o34TKUz6IQrP/view?usp=sharing'> <button className="px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:border-blue-500 font-semibold">
                                Download Resume
                            </button></Link>
                        </div>
                    </div>
                    <div className='flex pt-24 text-[#ccf381] pb-24 font-semibold gap-12 lg:pb-4'>
                        <p className='lg:w-72 lg:text-[13px] text-[10px]'>Skilled at implementing progressive enhancement techniques for robust and scalable applications.</p>
                        <p className='lg:w-72 lg:text-[13px] text-[10px]'>Established a track record of delivering successful and high-quality solutions.</p>
                    </div>
                </div>
                <div className='example'>
                    <img src={profile} className="lg:max-w-sm max-w-xs mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
