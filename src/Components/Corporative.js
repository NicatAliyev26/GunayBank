import React, { Component } from 'react'
import '../Styles/corporative.scss'
import Sp1 from '../Images/sp-1.png'
import Sp2 from '../Images/sp-2.png'
import Sp3 from '../Images/sp-3.png'


export class Corporative extends Component {
    render() {
        return (
            <div className='sponsor'>
                <div className='pictures'>
                    <img src={Sp2} alt="" />
                    <img src={Sp1} alt="" />
                    <img src={Sp3} alt="" />
                </div>
            </div>
        )
    }
}

export default Corporative
