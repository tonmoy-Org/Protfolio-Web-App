import { Link } from 'react-router-dom';
import p1 from '../../../assets/projects//p2.png';
import p2 from '../../../assets/projects/p1.png';
import p3 from '../../../assets/projects/p3.png';
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

const Projects = () => {
    return (
        <div>
            <div className="text-center mt-28" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000">
                <h2 className="text-4xl font-bold text-[#4831d4]">Latest Work</h2>
                <p className="py-3 text-[18px] text-[#3d155f]">One of my best 5 of  Projects</p>
            </div>
            {/* projects */}
            <div>
                <div className='mt-12 mb-32 max-w-screen-xl mx-auto'>
                    <div className='lg:flex flex-row-reverse gap-8 items-center' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
                            <div className="relative lg:w-[620px] overflow-hidden">
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
                                                        src={p5}
                                                        alt=""
                                                    />
                                                    <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                                        <button className="bg py-2 px-4 w-full transition-opacity text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold relative z-10">
                                                            <a href="https://goldsmith-org.web.app/">Live preview</a>
                                                        </button>

                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                                    src={s1}
                                                    alt=""
                                                />

                                                <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                                    <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                                        <a href="https://goldsmith-org.web.app/">Live preview</a>
                                                    </button>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                                    src={s3}
                                                    alt=""
                                                />

                                                <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                                    <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                                        <a href="https://goldsmith-org.web.app/">Live preview</a>
                                                    </button>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                                    src={s4}
                                                    alt=""
                                                />
                                                <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                                    <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                                        <a href="https://goldsmith-org.web.app/">Live preview</a>
                                                    </button>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                                    src={s5}
                                                    alt=""
                                                />

                                                <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                                    <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                                        <a href="https://goldsmith-org.web.app/">Live preview</a>
                                                    </button>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img
                                                    className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                                    src={s6}
                                                    alt=""
                                                />
                                                {/* <p className="text-white font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Add to cart & Checkout.</p> */}
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
                        </div>
                        <div className='mt-14 space-y-4 mb-16 w-4/5 mx-auto'>
                            <h1 className='font-semibold text-3xl text-[#474747]'>GoldSmith</h1>
                            <p className='text-[#3d155f] '>
                                Trending
                                GoldSmith - Jewelry Store WooCommerce Elementor Theme - WooCommerce eCommerce
                                Live Preview
                                Jewelry Store, Jewel, Jewellery, Gem Shop, Diamond, Jeweler Theme/Website Builder – Elementor Based Responsive Multipurpose Modern AJAX E-Commerce</p>
                            <div className="flex gap-3 flex-wrap leading-loose">
                                <p className="bg-white py-1 px-6 rounded-full">HTML5</p>
                                <p className="bg-white py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-white py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-white py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-white py-1 px-6 rounded-full">React.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">Node.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">Express.Js</p>
                                <p className="bg-white py-1 px-6 rounded-full">MongoDB</p>
                            </div>
                            <Link to="https://github.com/tonmoy-Org/jewelry-client.git">
                                <button className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none  focus:border-blue-300 font-semibold">
                                    View Code
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* project-1 */}
                    <div className='lg:flex mt-16 justify-center gap-8 items-center' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
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
                        <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
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
                        <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
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

                    {/* project-4 */}
                    <div className='lg:flex flex-row-reverse gap-8 items-center lg:mt-16' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
                            <div className="relative lg:w-[650px] overflow-hidden">
                                <div className="group relative">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                            src={p3}
                                            alt=""
                                        />
                                        <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                            <button className="bg py-2 px-4 w-full transition-opacity  text-white bg-gradient-to-r from-[#3d155f] to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:ring focus:border-blue-300 font-semibold">
                                                <a href="https://statuesque-sunshine-ec2b3c.netlify.app/">Live preview</a>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 space-y-4 mb-16  w-4/5 mx-auto' >
                            <h1 className='font-semibold text-3xl text-[#474747]'>Job Resources</h1>
                            <p className='text-[#3d155f] '>This is a React web page that displays job opportunities.It uses data for a set of students with their respective marks on each assignment. </p>
                            <div className="flex gap-3 flex-wrap leading-loose">
                                <p className="bg-white py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-white py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-white py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-white py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-white py-1 px-6 rounded-full">React.Js</p>
                            </div>
                            <Link to="https://github.com/tonmoy-Org/JobResources.git">
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