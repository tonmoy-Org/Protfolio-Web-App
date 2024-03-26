import { Link } from 'react-router-dom';
import p1 from '../../../assets/projects//p2.png';
import p2 from '../../../assets/projects/p1.png';
import p4 from '../../../assets/projects/p4.png';
import p5 from '../../../assets/projects/p5.png';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import s1 from '../../../assets/projects/s1.png'
import s3 from '../../../assets/projects/s3.png'
import s4 from '../../../assets/projects/s4.png'
import s5 from '../../../assets/projects/s5.png'
import s6 from '../../../assets/projects/s6.png'
import d1 from '../../../assets/projects/d1.png'
import d2 from '../../../assets/projects/d2.png'

const Projects = () => {
    return (
        <div className=''>
            <div className="text-center mt-28" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000">
                <h2 className="text-4xl font-bold text-[#4831d4]">Latest Work</h2>
                <p className="py-3 text-[18px] text-[#3d155f]">Currently working on</p>
            </div>
            {/* projects */}
            <div>
                <div className='mt-12 mb-32 max-w-screen-xl mx-auto'>
                    <div className='gap-8 items-center' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-3 lg:mx-0'>
                            <div className="relative lg:w-[1000px] mx-auto overflow-hidden">
                                <div className="group relative">
                                    <div className="flex justify-center">
                                        <Swiper
                                            slidesPerView={'auto'}
                                            spaceBetween={30}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            modules={[Autoplay, Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <div className="relative">
                                                    <img
                                                        className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                                        src={d1}
                                                        alt=""
                                                    />
                                                    <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                                        <button className="bg py-2 px-4 w-full transition-opacity text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold relative z-10">
                                                            <a href="/">Live preview</a>
                                                        </button>

                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                                    src={d2}
                                                    alt=""
                                                />

                                                <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                                    <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                                        <a href="/">Live preview</a>
                                                    </button>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 space-y-4 mb-16 w-4/5 mx-auto'>
                            <h1 className='font-semibold text-3xl text-[#474747]'>DailyBazar</h1>
                            <p className='text-[#3d155f] '>
                                Trending
                                DailyBazar - A day to day online Store
                            </p>
                            <p>
                                This project was built using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with MUI (Material-UI) and Tailwind CSS for styling and user interface design.
                            </p>
                            <p>
                                Welcome to DailyBazar.com, where a commitment to health and sustainability is at the heart of everything we do.
                            </p>
                        </div>

                    </div>

                    <div className="text-center mt-28" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="1000">
                        <h2 className="text-4xl font-bold text-[#4831d4]">Previously Done Some Project</h2>
                        <p className="py-3 text-[18px] text-[#3d155f]">One of my  3 of work</p>
                    </div>
                    {/* project-1 */}
                    <div className='lg:flex mt-16 justify-center gap-8 items-center' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-3 lg:mx-0'>
                            <div className="relative lg:w-[650px]  overflow-hidden">
                                <div className="group relative">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                            src={p2}
                                            alt=""
                                        />
                                        <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                            <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none  focus:border-blue-300 font-semibold">
                                                <a href="https://musicine-org.web.app/">Live preview</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 space-y-4 mb-16 w-4/5 mx-auto'>
                            <h1 className='font-semibold text-3xl text-[#474747]'>Musicine</h1>
                            <p className='text-[#3d155f] '>Full stack development of an Education website In the LandingPage there are Carousel, Popular added classes, And Popular Instructors.</p>
                            <div className="flex gap-3 flex-wrap leading-loose">
                                <p className="bg-white py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-white py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-white py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-white py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-white py-1 px-6 rounded-full">React.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">Node.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">Express.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">MongoDB</p>
                            </div>
                            <Link to="https://github.com/tonmoy-Org/summar-camp-school.git">
                                <button className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none  focus:border-blue-300 font-semibold">
                                    View Code
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* project-2 */}
                    <div className='lg:flex flex-row-reverse gap-8 items-center lg:mt-16' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-3 lg:mx-0'>
                            <div className="relative lg:w-[650px]  overflow-hidden">
                                <div className="group relative">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                            src={p4}
                                            alt=""
                                        />
                                        <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                            <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none  focus:border-blue-300 font-semibold">
                                                <a href="https://mentoring-org.web.app/">Live preview</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 space-y-4 mb-16 w-4/5 mx-auto'>
                            <h1 className='font-semibold text-3xl text-[#474747]'>Mentoring</h1>
                            <p className='text-[#3d155f] '>Developed a responsive and interactive Online Courses & Education  web app using MERN stack.</p>
                            <div className="flex fle gap-3 flex-wrap leading-loose">
                                <p className="bg-white py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-white py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-white py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-white py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-white py-1 px-6 rounded-full">React.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">Node.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">Express.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">MongoDB</p>
                            </div>
                            <Link to="https://github.com/tonmoy-Org/collage-admission-project-client.git">
                                <button className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none  focus:border-blue-300 font-semibold">
                                    View Code
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* project-3 */}
                    <div className='lg:flex mt-16 gap-8 items-center' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-3 lg:mx-0'>
                            <div className="relative lg:w-[650px]  overflow-hidden">
                                <div className="group relative">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                            src={p1}
                                            alt=""
                                        />
                                        <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                            <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none  focus:border-blue-300 font-semibold">
                                                <a href="https://toy-market-place-fa2a9.web.app/">Live preview</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='mt-14 space-y-4 mb-16 w-4/5 mx-auto'>
                            <h1 className='font-semibold text-3xl text-[#474747]'>Toy Zone</h1>
                            <p className='text-[#3d155f]'>Developed a responsive and interactive Toys Marketplace web app using MERN stack.</p>
                            <div className="flex  gap-3 flex-wrap leading-loose">
                                <p className="bg-white py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-white py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-white py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-white py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-white py-1 px-6 rounded-full">React.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">Node.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">Express.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">MongoDB</p>
                            </div>
                            <Link to="https://github.com/tonmoy-Org/Toys-marketplace-client">
                                <button className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                    View Code
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;