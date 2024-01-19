import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from 'sweetalert2'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        emailjs.sendForm('service_5lumxa5', 'template_5578ufg', form.current, '3cRhJ9Vi3yJG9q1B8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="my-28">
            <div className="text-center">
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h2 className="text-4xl font-bold underline">Stay In Touch</h2>
                    <p className="w-11/12 lg:w-5/12 mx-auto pt-6">
                        Thank you for visiting my portfolio! If you have any inquiries, collaboration opportunities, or simply want to connect, I would love to hear from you. Please feel free to reach out using any of the following methods</p>
                </div>
                <div className="mt-6 lg:w-[600px] w-[300px] mx-auto" data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='grid lg:grid-cols-2 gap-8'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input placeholder="name" className="input input-bordered input-primary w-full max-w-xs" type="text" name="user_name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input placeholder="email" className="input input-bordered input-primary w-full max-w-xs" type="email" name="user_email" required />
                            </div>
                        </div>

                        <div className='mt-2 form-control'>
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-info lg:w-[600px] w-[300px]" placeholder="message" name="message" required></textarea>

                        </div>
                        <input className="bg-indigo-400 me-5 btn-block text-white font-bold py-2 px-5 rounded mt-4" type="submit" value="Send" />
                    </form>
                </div>
            </div >

        </div >
    );
};

export default Contact;