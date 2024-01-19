import profile from '../../../assets/profile/IMG_20230425_210725_802.jpg'
const AboutSection = () => {
    return (
        <div className='bg-indigo-50 px-4' data-aos="fade-up"
            data-aos-duration="1500">
            <div className="text-center py-10">
                <h2 className="text-4xl font-bold underline">About Me</h2>
            </div>
            <div>
                <div className="hero pb-20">
                    <div className="hero-content flex-col lg:flex-row gap-10">
                        <img src={profile} className="max-w-xs rounded-lg shadow-2xl" />
                        <div>
                            <p className='text-[18px]'>
                                My name is Md. Tanvir Hasan Tonmoy, I am 23 years old fresher Full Stack developer. I am from Tangail, Bangladesh.
                                As a passionate and driven beginner MERN (MongoDB, Express.js, React.js, Node.js) Full Stack Developer,
                                my objective is to secure an entry-level position that allows me to apply and expand my technical skills
                                while learning from experienced professionals. I am eager to contribute to a collaborative team and gain
                                practical experience in web development. With a strong foundation in front-end and back-end
                                technologies, I aim to leverage my creativity and problem-solving abilities to build innovative and
                                user-centric web applications. I am committed to continuous learning, staying up-to-date with industry
                                trends, and honing my skills in order to deliver high-quality solutions. Through dedication, adaptability, and
                                a strong work ethic, I aspire to make a meaningful impact, contribute to the growth of the organization,
                                and establish a successful career in web development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;