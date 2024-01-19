import { Link } from 'react-router-dom';
import p1 from '../../../assets/projects//p2.png';
import p2 from '../../../assets/projects/p1.png';
import p3 from '../../../assets/projects/p3.png';
import p4 from '../../../assets/projects/p4.png';
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <div className="text-center mt-28" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000">
                <h2 className="text-4xl font-bold text-[#4831d4]">Latest Work</h2>
                <p className="py-3 text-[18px] text-[#3d155f]">One of my best 4 of  Projects</p>
            </div>

            <div>
                <div className='mt-12 mb-32 max-w-screen-xl mx-auto'>
                    <div className='lg:flex justify-center gap-8 items-center' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
                            <div className="relative lg:w-[600px]  overflow-hidden">
                                <div className="group relative">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                            src={p2}
                                            alt=""
                                        />
                                        <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                            <button className="bg-black text-white py-2 px-4 w-full transition-opacity">
                                                <a href="https://musicine-org.web.app/">Live preview</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 space-y-4 mb-16 w-4/5 mx-auto'>
                            <h1 className='font-semibold text-3xl text-[#474747]'>Musicine</h1>
                            <p className='text-[#3d155f] '>Full stack development of an Education website In the LandingPage there are Carousel, Popular added classes, And Popular Instructors.</p>
                            <div className="flex gap-3 flex-wrap leading-loose">
                                <p className="bg-white py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-white py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-white py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-white py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-white py-1 px-6 rounded-full">ReactJs</p>
                                <p className="bg-white py-1 px-6 rounded-full">ExpressJs</p>
                                <p className="bg-white py-1 px-6 rounded-full">MongoDB</p>
                            </div>
                            <Link to="https://github.com/tonmoy-Org/summar-camp-school.git">
                                <button className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:ring focus:border-blue-300 font-semibold">
                                    View Code
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* project-2 */}
                    <div className='lg:flex flex-row-reverse gap-8 items-center lg:mt-16' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
                            <div className="relative lg:w-[600px]  overflow-hidden">
                                <div className="group relative">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                            src={p4}
                                            alt=""
                                        />
                                        <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                            <button className="bg-black text-white py-2 px-4 w-full transition-opacity">
                                                <a href="https://mentoring-org.web.app/">Live preview</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 space-y-4 mb-16 w-4/5 mx-auto'>
                            <h1 className='font-semibold text-3xl text-[#474747]'>Mentoring</h1>
                            <p className='text-[#3d155f] '>Developed a responsive and interactive Toys Marketplace web app using MERN stack.</p>
                            <div className="flex fle gap-3 flex-wrap leading-loose">
                                <p className="bg-white py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-white py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-white py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-white py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-white py-1 px-6 rounded-full">ReactJs</p>
                                <p className="bg-white py-1 px-6 rounded-full">ExpressJs</p>
                                <p className="bg-white py-1 px-6 rounded-full">MongoDB</p>
                            </div>
                            <Link to="https://github.com/tonmoy-Org/collage-admission-project-client.git">
                                <button className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:ring focus:border-blue-300 font-semibold">
                                    View Code
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* project-3 */}
                    <div className='lg:flex mt-4 gap-8 items-center' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
                            <div className="relative lg:w-[600px]  overflow-hidden">
                                <div className="group relative">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                            src={p1}
                                            alt=""
                                        />
                                        <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                            <button className="bg-black text-white py-2 px-4 w-full transition-opacity">
                                                <a href="https://toy-market-place-fa2a9.web.app/">Live preview</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='mt-10 space-y-4 mb-16 w-4/5 mx-auto'>
                            <h1 className='font-semibold text-3xl text-[#474747]'>Toy Zone</h1>
                            <p className='text-[#3d155f]'>Developed a responsive and interactive Toys Marketplace web app using MERN stack.</p>
                            <div className="flex  gap-3 flex-wrap leading-loose">
                                <p className="bg-white py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-white py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-white py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-white py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-white py-1 px-6 rounded-full">ReactJs</p>
                                <p className="bg-white py-1 px-6 rounded-full">ExpressJs</p>
                                <p className="bg-white py-1 px-6 rounded-full">MongoDB</p>
                            </div>
                            <Link to="https://github.com/tonmoy-Org/Toys-marketplace-client">
                                <button className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:ring focus:border-blue-300 font-semibold">
                                    View Code
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* project-4 */}
                    <div className='lg:flex flex-row-reverse gap-8 items-center lg:mt-16' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='mt-8 lg:mt-0 mx-8 lg:mx-0'>
                            <div className="relative lg:w-[600px]  overflow-hidden">
                                <div className="group relative">
                                    <div className="flex justify-center">
                                        <img
                                            className="w-full h-full transform scale-100 group-hover:scale-110 transition duration-700 ease-in-out shadow-xl"
                                            src={p3}
                                            alt=""
                                        />
                                        <div className="absolute inset-x-0 bottom-0 text-center opacity-0 transform translate-y-2/4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                                            <button className="bg-black text-white py-2 px-4 w-full transition-opacity">
                                                <a href="https://statuesque-sunshine-ec2b3c.netlify.app/">Live preview</a>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 space-y-4 mb-16  w-4/5 mx-auto' >
                            <h1 className='font-semibold text-3xl text-[#474747]'>Job Resources</h1>
                            <p className='text-[#3d155f] '>This is a React web page that displays job opportunities.It uses data for a set of students with their respective marks on each assignment. </p>
                            <div className="flex gap-3 flex-wrap leading-loose">
                                <p className="bg-white py-1 px-6 rounded-full">HTML</p>
                                <p className="bg-white py-1 px-6 rounded-full">CSS</p>
                                <p className="bg-white py-1 px-6 rounded-full">Tailwind</p>
                                <p className="bg-white py-1 px-6 rounded-full">JavaScript</p>
                                <p className="bg-white py-1 px-6 rounded-full">ReactJs</p>
                            </div>
                            <Link to="https://github.com/tonmoy-Org/JobResources.git">
                                <button className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:ring focus:border-blue-300 font-semibold">
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