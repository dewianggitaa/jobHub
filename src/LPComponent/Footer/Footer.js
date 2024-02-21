import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div style={{height: "15vh"}} class="bg-black">
            <div class="flex justify-center py-4 md:pt-10 lg:pt-4 gap-3">
                <FontAwesomeIcon class="w-8 md:w-10 lg:w-6" icon={faInstagram} style={{color: '#ffff'}} />
                <FontAwesomeIcon class="w-8 md:w-10 lg:w-6" icon={faTwitter} style={{color: '#ffff'}} />
                <FontAwesomeIcon class="w-8 md:w-10 lg:w-6" icon={faGithub} style={{color: '#ffff'}} />
                <FontAwesomeIcon class="w-8 md:w-10 lg:w-6" icon={faLinkedin} style={{color: '#ffff'}} />
            </div>
            <div class="text-white px-10 text-center md:text-xl lg:text-sm">
                &copy; {currentYear} Job Hub. All rights reserved. | Designed by Dewi Anggita Yulianti
            </div>
        </div>
    )
}

export default Footer