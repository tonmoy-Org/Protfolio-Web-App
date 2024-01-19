import { Link } from 'react-router-dom';
import profile from '../../../assets/profile/IMG_20230425_210725_802.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-bg lg:py-24 py-10'>
            <div className="lg:flex gap-4 md:flex justify-center items-center">
                <div className='mx-10 lg:mx-0'>
                    <div>
                        <div className='text-[#ccf381] font-bold lg:text-4xl md:text-[2rem] text-[2.5rem]'>
                            <h2 className='lg:leading-relaxed'>Hello, <br />
                                I am Md. Tanvir Hasan Tonmoy <br />
                                FULL-STACK DEVELOPER | MERN<span className='text-white lg:text-5xl'>.</span></h2>
                        </div>
                        <p className='mt-4 lg:leading-relaxed lg:text-xl text-white'>Building seamless digital experiences with MERN stack, I bring <br />full-stack expertise and a passion for creating innovative solutions.</p>
                    </div>
                    <div>
                        <div className='mt-5'>
                        <Link to='https://drive.google.com/file/d/1e-ID2RaXfQjEKnajEtF8o34TKUz6IQrP/view?usp=sharing'> <button className="px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover  focus:ring focus:border-blue-500 font-semibold">
                                Download Resume
                            </button></Link>
                        </div>
                    </div>
                    <div className='flex pt-14 text-[#ccf381] font-semibold gap-12 pb-20 lg:pb-4'>
                        <p className='w-72'>Skilled at implementing progressive enhancement techniques for robust and scalable applications.</p>
                        <p className='w-72'>Established a track record of delivering successful and high-quality solutions.</p>
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
