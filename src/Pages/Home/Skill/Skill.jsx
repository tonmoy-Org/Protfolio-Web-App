import web from '../../../assets/skills/app-development.png';
import app from '../../../assets/skills/app-settings.png';
import sever from '../../../assets/skills/server.png';
import language from '../../../assets/skills/coding.png';
import problem from '../../../assets/skills/problem.png';
const Skill = () => {
    return (
        <div className='mb-2'>
            <div className="text-center mt-20" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1200">
                <h2 className="text-4xl font-bold text-[#4831d4]">Skills</h2>
                <p className="py-3 text-[18px] text-[#3d155f] w-9/12 mx-auto">This are the technologies I have worked with.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:mt-12 mt-4 w-10/12 lg:w-9/12 mx-auto' data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1200">

                <div className="card bg-base-100 shadow-md rounded-none transition ease-in-out transform hover:translate-y-[-10px] hover:scale-100 delay-75 duration-150 hover:shadow-lg">
                    <figure className="px-6 py-8 bg-[#f5f4fc]">
                        <img src={web} className="rounded-none w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h3 className="card-title">Web Development</h3>
                        <p className='text-[#3d155f]'>MongoDB, Express.JS, React.JS, React Tailwind, React Bootstrap, HTML, CSS, ES6.</p>
                    </div>
                </div>



                <div className="card bg-base-100 shadow-md rounded-none transition ease-in-out transform hover:translate-y-[-10px] hover:scale-100 delay-75 duration-150 hover:shadow-lg">
                    <figure className="px-6 py-8 bg-[#f5f4fc]">
                        <img src={app} className="rounded-none w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h3 className="card-title">App Development</h3>
                        <p className='text-[#3d155f]'> Firebase, Mongodb, Express</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md rounded-none transition ease-in-out transform hover:translate-y-[-10px] hover:scale-100 delay-75 duration-150 hover:shadow-lg">
                    <figure className="px-6 py-8 bg-[#f5f4fc]">
                        <img src={sever} className="rounded-none w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h3 className="card-title">Server Development</h3>
                        <p className='text-[#3d155f]'>Firebase, Mongodb, Express.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md rounded-none transition ease-in-out transform hover:translate-y-[-10px] hover:scale-100 delay-75 duration-150 hover:shadow-lg">
                    <figure className="px-6 py-8 bg-[#f5f4fc]">
                        <img src={language} className="rounded-none w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h3 className="card-title">Language</h3>
                        <p className='text-[#3d155f]'>C, JavaScript, Node.js, Java</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md rounded-none transition ease-in-out transform hover:translate-y-[-10px] hover:scale-100 delay-75 duration-150 hover:shadow-lg">
                    <figure className="px-6 py-8 bg-[#f5f4fc]">
                        <img src={problem} className="rounded-none w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h3 className="card-title">Problem Solving</h3>
                        <p className='text-[#3d155f]'>Solving 300+ problems across various domains.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;