import image from '../../../assets/shihab-img/shihab-img.png'
const SendMessage = () => {
    return (
        <div className='md:mt-16 flex justify-center items-center'>
            <div className=' w-4/5'>
                <div className='md:flex'>
                    <div className='hidden md:block'>
                        <img className='bg-color w-full h-full' src={image} alt="" />
                    </div>
                    <div className='bg-gray-100'>
                        <div className="space-y-5 md:m-10 m-5 py-5 md:py-0">
                            <input type="text" placeholder="Full Name" className="w-full mt-2 p-3 rounded focus:shadow-outline border " />
                            <input type="email" placeholder="Email" className="w-full mt-2 p-3 rounded focus:shadow-outline border" />
                            <input type="text" placeholder="Subject" className="w-full mt-2 p-3 rounded focus:shadow-outline border" />
                            <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                            <button className='block px-5 py-3 common-bg-color text-white hover:text-gray-900 rounded-full uppercase text-sm' type="submit">send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;