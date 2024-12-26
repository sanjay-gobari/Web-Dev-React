import React from 'react'

function Footer() {
    return (
        <footer className=' -mx-20 px-20  text-xl'>
                    <div className='grid grid-cols-4  gap-4 py-20 '>
                        <div className='space-y-4'>
                            <div className='text-6xl logohead'>Guitara</div>
                            <div>
                                <div>
                                    <p>15523 siren well,teschport</p>
                                    <p>MA 11862-4746</p>
                                </div>
                                <p>info@guitara.com</p>
                            </div>
                            <div className='space-x-2 py-4'>
                                <i className="p-2 rounded-full border text-2xl ri-whatsapp-line"></i>
                                <i className="p-2 rounded-full border text-2xl ri-instagram-line"></i>
                                <i className="p-2 rounded-full border text-2xl ri-linkedin-fill"></i>
                            </div>
                        </div>
                        
                        <div className=' space-y-4'>
                            <p className='text-2xl'>Contact Us</p>
                            <div>
                                <p>+91 1234567899</p>
                                <p>+91 1234567899</p>
                            </div>
                            <ul>
                                <li>Monday-Friday</li>
                                <li>8AM - 5PM</li>
                                <li>Saturday-Sunday</li>
                                <li>10AM - 2PM</li>
                            </ul>
                        </div>
                        <div className=' space-y-4'>
                            <p className='text-2xl'>Customer Service</p>
                            <ul>
                                <li>Orders</li>
                                <li>Cart</li>
                                <li>Wishlist</li>
                                <li>Acoount</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className=' space-y-4'>
                            <p className='text-2xl'>Useful Links</p>
                            <ul>
                                <li>Consert</li>
                                <li>Blog</li>
                                <li>Store</li>
                                <li>Classes</li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-center py-2 border-t border-gray-600 -mx-20'>
                        <p className='text-lg'>Copyright &copy; {new Date().getFullYear()}</p>
                    </div>
                </footer>
    )
}

export default Footer