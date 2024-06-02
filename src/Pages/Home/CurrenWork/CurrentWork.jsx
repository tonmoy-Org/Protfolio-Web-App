import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button, Typography } from '@mui/material'; // Import Material-UI components

// Import your images
import sbs1 from '../../../assets/work/photo_2024-03-14_00-27-13 (2).png';
import sbs2 from '../../../assets/work/photo_2024-03-14_00-27-13.jpg';
import sbs3 from '../../../assets/work/photo_2024-03-14_00-29-39.jpg';
import sbs4 from '../../../assets/work/Screenshot 2024-03-14 015843.png';
import E1 from '../../../assets/work/E1.png';
import E2 from '../../../assets/work/E2.png';
import shatamoli from '../../../assets/work/shatamuli.png';

const CurrentWork = () => {
    return (
        <div>
            <div className="text-center mt-20" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <Typography variant="h4" sx={{ color: '#4831d4', fontWeight: 'bold' }}>
                    Currently Working On
                </Typography>
                <Typography variant="body1" className="py-3 text-[18px] text-[#3d155f]">
                    Client Project
                </Typography>
            </div>
            <div className="mb-32 max-w-screen-xl mx-auto">
                <div className="lg:flex mt-16 justify-center gap-8 items-center" data-aos="fade-up" data-aos-duration="1200">
                    <div className="mt-14 space-y-4 mb-16 w-4/5 mx-auto">
                        <Typography variant="h4" className="font-semibold text-[#474747]">
                            শতমূলী সংগঠন
                        </Typography>
                        <Typography variant="body1" className="text-[#3d155f]">
                            শতমূলী সংগঠন is a web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack, enriched with Material-UI (Mui) for sleek and modern design elements.
                        </Typography>

                        {/* <Link to="https://exeservice.online/">
                            <Button sx={{ marginTop: 3 }} variant="contained" className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                Go Live
                            </Button>
                        </Link> */}
                    </div>
                    <div className="mt-8 lg:mt-0 mx-3 lg:mx-0">
                        <img src={shatamoli} alt="" />
                    </div>
                </div>
            </div>
            <div className="mb-32 max-w-screen-xl mx-auto">
                <div className="lg:flex mt-16 justify-center gap-8 items-center" data-aos="fade-up" data-aos-duration="1200">

                    <div className="mt-8 lg:mt-0 mx-3 lg:mx-0">
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
                            <SwiperSlide className="lg:p-10">
                                <div className="relative">
                                    <img
                                        className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                        src={E1}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="lg:p-10">
                                <img
                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                    src={E2}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="mt-14 space-y-4 mb-16 w-4/5 mx-auto">
                        <Typography variant="h4" className="font-semibold text-[#474747]">
                            ExeService.Online
                        </Typography>

                        <Typography variant="body1" className="text-[#3d155f]">
                            exeservice.online is a cutting-edge web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack, enriched with Material-UI (Mui) for sleek and modern design elements. This project represents a significant milestone in my career, showcasing my ability to deliver high-quality client work. Visit the site at <a className='text-[#4831d4] font-semibold' href="https://exeservice.online/" target="_blank" rel="noopener noreferrer">exeservice.online</a>.
                        </Typography>

                        <Link to="https://exeservice.online/">
                            <Button sx={{ marginTop: 3 }} variant="contained" className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                Go Live
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-12 mb-32 max-w-screen-xl mx-auto">
                <div className="lg:flex mt-16 justify-center gap-8 items-center" data-aos="fade-up" data-aos-duration="1200">
                    <div className="mt-14 space-y-4 mb-16 w-4/5 mx-auto">
                        <Typography variant="h4" className="font-semibold text-[#474747]">
                            SBS Radiology Solution
                        </Typography>

                        <Typography variant="body1" className="text-[#3d155f]">
                            Just launched my first production-ready website using the MERN stack! and enriched with Material-UI (Mui). It was my client work. Excited to see it live!
                            <a className='text-[#4831d4] font-semibold' href="https://sbsreporting.com" target="_blank" rel="noopener noreferrer"> sbsreporting.com</a>
                        </Typography>

                        <Link to="https://sbsreporting.com/">
                            <Button sx={{ marginTop: 3 }} variant="contained" className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                Go Live
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-8 lg:mt-0 mx-3 lg:mx-0">
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
                            <SwiperSlide className="lg:p-10">
                                <div className="relative">
                                    <img
                                        className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                        src={sbs2}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="lg:p-10">
                                <img
                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                    src={sbs1}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="lg:p-10">
                                <img
                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                    src={sbs3}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="lg:p-10">
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
        </div>
    );
};

export default CurrentWork;
