import { toast } from 'react-toastify';
import image from '../../../assets/shihab-img/shihab-img.png'
import './SendMessage.css'

const SendMessage = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formElement = e.currentTarget; // Get the form element
        const form = new FormData(e.currentTarget)

        const fullName = form.get("fullName")
        const email = form.get('email')
        const subject = form.get('subject')
        const textarea = form.get('textarea')

        toast('Thanks for your interest in contacting me')
        console.log(fullName, email, subject, textarea);

        // Reset the form
        formElement.reset();

    }
    return (
        <div className='md:mt-16 flex justify-center items-center'>
            <div className=' w-4/5'>
                <div className='md:flex'>
                    <div className='hidden md:block'>
                        <img className='bg-color w-full h-full bg-linear-gradient' src={image} alt="" />
                    </div>
                    <div className='bg-color'>
                        <div className=" md:m-10 m-5 py-5 md:py-0">
                            <form onSubmit={handleSubmit} className='space-y-5'>
                                <input type="text" name='fullName' placeholder="Full Name" className="w-full mt-2 p-3 rounded focus:shadow-outline border " required />

                                <input type="email" name='email' placeholder="Email" className="w-full mt-2 p-3 rounded focus:shadow-outline border" required />

                                <input type="text" name='subject' placeholder="Subject" className="w-full mt-2 p-3 rounded focus:shadow-outline border" required />

                                <textarea name='textarea' className="textarea textarea-bordered" placeholder="Message" required></textarea>

                                <button className='block px-5 py-3 common-bg-color text-white hover:text-gray-900 rounded-full uppercase text-sm' type='submit'>send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;