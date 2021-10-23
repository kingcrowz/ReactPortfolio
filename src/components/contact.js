import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FcCellPhone, FcFeedback } from 'react-icons/fc'

const Contact = () => {
    return (
        <div>
            <h1>Get in Contact</h1>
            <div className='container'>
                <div className='card'>
                    <a className='contact' href="tel:6098287324">Phone Me<FcCellPhone /></a>
                </div>
                <div className='card'>
                    <a className='contact' href="mailto:kingcrowz@comcast.net">Email Me<FcFeedback /></a>
                </div>   
            </div>                    
            <div className='container'>
                <div className='card'>
                    <a className='contact'href="https://www.linkedin.com/in/kate-eagles">LinkedIn<FaLinkedinIn /></a>
                </div>
                <div className='card'>
                    <a className='contact' href="https://github.com/ktmac21">Github<FaGithub /></a>                                
                </div>
            </div>
        </div>       
    )
}
export default Contact; 