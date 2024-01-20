import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import Swal from 'sweetalert2'

const Contact = () => {
    const form = useRef();
    const [isFocused1, setFocused1] = useState(false);
    const [inputValue1, setInputValue1] = useState('');
    const [isFocused2, setFocused2] = useState(false);
    const [inputValue2, setInputValue2] = useState('');
    const [isFocusedTextarea, setFocusedTextarea] = useState(false);
    const [textareaValue, setTextareaValue] = useState('');

    const handleFocus1 = () => {
        setFocused1(true);
    };

    const handleBlur1 = () => {
        setFocused1(false);
    };

    const handleChange1 = (e) => {
        setInputValue1(e.target.value);
    };

    const handleFocus2 = () => {
        setFocused2(true);
    };

    const handleBlur2 = () => {
        setFocused2(false);
    };

    const handleChange2 = (e) => {
        setInputValue2(e.target.value);
    };

    const handleFocusTextarea = () => {
        setFocusedTextarea(true);
    };

    const handleBlurTextarea = () => {
        setFocusedTextarea(false);
    };

    const handleChangeTextarea = (e) => {
        setTextareaValue(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fpy0qv8', 'template_pwpisxk', form.current, 'e9e24h7anMlSAzbU0')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Sent',
                    showConfirmButton: false,
                    timer: 1500
                });
            }, (error) => {
                console.log(error.text);
            })
    };

    return (
        <div className="my-28">
            <div className="text-center">
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h2 className="text-4xl font-bold text-[#4831d4]">Stay In Touch</h2>
                    <p className="py-3 lg:text-[20px] text-[14px] px-8 text-[#3d155f] lg:w-2/6 mx-auto">
                        Thank you for visiting my portfolio! If you have any inquiries, Got a question or proposal, or just want
                        to say hello? Go ahead.</p>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <form ref={form} onSubmit={sendEmail} className='lg:w-[750px] w-[300px]'>
                    <div className='flex justify-center gap-20'>
                        <div className='lg:w-[400px] w-[300px]'>
                            <label className={`block text-[16px] mb-3 ${isFocused1 ? 'text-blue-500' : 'text-gray-400'}`}>
                                Your name
                            </label>
                            <input
                                onFocus={handleFocus1}
                                onBlur={handleBlur1}
                                onChange={handleChange1}
                                style={{
                                    borderBottom: `1px solid ${isFocused1 ? 'blue' : 'currentColor'}`,
                                }}
                                type="text"
                                name="user_name"
                                required
                                className="w-full py-2 focus:outline-none bg-[#f5f4fc] border-b-4 text-[18px]"
                                placeholder={isFocused1 || inputValue1 ? '' : 'Enter your name'}
                            />
                        </div>
                        <div className='lg:w-[400px] w-[300px]'>
                            <label className={`block text-[16px] mb-3 ${isFocused2 ? 'text-blue-500' : 'text-gray-400'}`}>
                                Email address
                            </label>
                            <input
                                onFocus={handleFocus2}
                                onBlur={handleBlur2}
                                onChange={handleChange2}
                                style={{
                                    borderBottom: `1px solid ${isFocused2 ? 'blue' : 'currentColor'}`,
                                }}
                                type="email"
                                name="reply_to"
                                required
                                className="w-full py-2 focus:outline-none bg-[#f5f4fc] border-b-4 text-[18px]"
                                placeholder={isFocused2 || inputValue2 ? '' : 'Enter your email'}
                            />
                        </div>
                    </div>
                    <div className='mt-14'>
                        <label className={`block text-[16px] mb-3 ${isFocusedTextarea ? 'text-blue-500' : 'text-gray-400'}`}>
                            Your massage
                        </label>
                        <textarea
                            onFocus={handleFocusTextarea}
                            onBlur={handleBlurTextarea}
                            onChange={handleChangeTextarea}
                            style={{
                                borderBottom: `1px solid ${isFocusedTextarea ? 'blue' : 'currentColor'}`,
                            }}
                            className="textarea rounded-none focus:outline-none bg-[#f5f4fc] border-b-4 w-full text-[18px] ps-0"
                            placeholder={isFocusedTextarea || textareaValue ? '' : 'Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'}
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="mt-6 lg:w-[320px] w-[200px] mx-auto py-2  text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none  focus:border-blue-300 font-semibold">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
