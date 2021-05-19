import React, { Component } from 'react'
import '../Styles/footer.scss'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'



export class Footer extends Component {
    render() {
        return (
            <div>
                <div className="foot container">
                    <div className="line"></div>
                    <div className="network">
                     <div className="social">
                     <FaFacebookF className="icons"/>
                     <AiOutlineTwitter className="icons"/>
                     <FaInstagramSquare className="icons"/>
                     <AiFillLinkedin className="icons"/>
                     </div>
                     <div className="rights">
                         <p>© 2021 “GunayBank” OJSC. All rights reserved</p>
                     </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Footer
