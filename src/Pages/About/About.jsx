import { Helmet } from "react-helmet";
import myPicture from '../../assets/profile/about-me.jpg'
import cover from '../../assets/cover/cover.jpg'

const About = () => {
    return (
        <div>
            <Helmet>
                <title>{`About Me - Tanvir Hasan Tonmoy' s Log`}</title>
            </Helmet>
            <div className="mb-20">
                <div className="hero h-80 bg-fixed object-cover" style={{
                    backgroundImage: `url(${cover})`, // Set the background image
                    backgroundSize: 'cover', // Set the background size to cover
                    height: '500px', // Set the desired height
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-white font-bold" data-aos="fade-down"
                                data-aos-duration="2000">About Me</h1>
                            <p className="text-white" data-aos="fade-up"
                                data-aos-duration="2000">FULL-STACK DEVELOPER</p>
                        </div>
                    </div>
                </div>
                <div className="bg-base-200 lg:px-36 py-20">
                    <div className="grid lg:grid-cols-2 lg:gap-28 gap-20">
                        <div className="px-6">
                            <h1 className="text-4xl font-bold mb-8">Life Story</h1>
                            <p className="border-b-2 border-[#3B82F6] me-72 md:me-[690px] lg:me-[450px]"></p>
                            <p className="text-md mt-4">
                                Born and raised in Bangladesh, I have gained extensive expertise and experience as a <span className="font-bold">Full Stack developer.</span>
                            </p>
                            <br />
                            <p className="text-md">
                                My objective is to secure an entry-level position that allows me to apply and expand my technical skills while learning from experienced professionals. I am eager to contribute to a collaborative team and gain practical experience in web development. With a strong foundation in <span className="font-bold">front-end</span> and <span className="font-bold">back-end</span> technologies, I aim to leverage my creativity and problem-solving abilities to build innovative and user-centric <span className="font-bold">web applications.</span>
                            </p>
                            <br />
                            <p className="text-md">
                                Currently studying in Computer Science and Engineering at <span className="font-bold">Daffodil International University-DIU.</span>
                            </p>
                            <br />
                            <p className="text-md">
                                <span className="font-bold">Bangla</span> - Native, <span className="font-bold">English</span> - communicative
                            </p>
                        </div>
                        <img src={myPicture} className="w-11/12 mx-auto px-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;