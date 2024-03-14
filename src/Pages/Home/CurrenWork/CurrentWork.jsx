import sbs1 from '../../../assets/work/photo_2024-03-14_00-27-13 (2).jpg'
import sbs2 from '../../../assets/work/photo_2024-03-14_00-27-13.jpg'
import sbs3 from '../../../assets/work/photo_2024-03-14_00-29-39.jpg'
import sbs4 from '../../../assets/work/Screenshot 2024-03-14 015843.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const CurrentWork = () => {
    return (
        <div>
            <div className="text-center mt-28" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000">
                <h2 className="lg:text-4xl text-3xl font-bold text-[#4831d4]">Currently Working  On</h2>
            </div>
            <div className="mt-12 mb-32 max-w-screen-xl mx-auto">
                <div className='lg:flex mt-16 justify-center gap-8 items-center' data-aos="fade-up"
                    data-aos-duration="1200">
                    <div className='mt-14 space-y-4 mb-16 w-4/5 mx-auto'>
                        <h1 className='font-semibold text-3xl text-[#474747]'>SBS Radiology Solution</h1>

                        <p className='text-[#3d155f]'>Just launched my first production-ready website using the MERN stack! It was my client work.Excited to see it live!</p>
                        <Link to="https://sbsreporting.com/">
                            <button className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none  focus:border-blue-300 font-semibold">
                                Go Live
                            </button>
                        </Link>
                    </div>
                    <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper lg:w-[920px]"
                        >
                            <SwiperSlide className='lg:p-10'>
                                <div className="relative">
                                    <img
                                        className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                        src={sbs2}
                                        alt=""
                                    />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='lg:p-10'>
                                <img
                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                    src={sbs1}
                                    alt=""
                                />


                            </SwiperSlide>
                            <SwiperSlide className='lg:p-10'>
                                <img
                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                    src={sbs3}
                                    alt=""
                                />


                            </SwiperSlide>
                            <SwiperSlide className='lg:p-10'>
                                <img
                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                    src={sbs4}
                                    alt=""
                                />


                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CurrentWork;