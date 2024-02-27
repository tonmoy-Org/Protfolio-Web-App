import sbs from '../../../assets/projects/sbs.jpg'
import sbs1 from '../../../assets/projects/sbs-1.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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

                        <p className='text-[#3d155f]'>Just launched my first production-ready website using the MERN stack! I was my client work.Excited to see it live!</p>
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
                                        src={sbs}
                                        alt=""
                                    />
                                    <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                        <button className="bg py-2 px-4 w-full transition-opacity text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold relative z-10">
                                            <a href="https://goldsmith-org.web.app/">Live preview</a>
                                        </button>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='lg:p-10'>
                                <img
                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                    src={sbs1}
                                    alt=""
                                />

                                <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                    <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                        <a href="https://goldsmith-org.web.app/">Live preview</a>
                                    </button>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CurrentWork;