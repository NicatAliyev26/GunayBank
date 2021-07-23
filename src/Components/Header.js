import React, { Component } from 'react'
import '../Styles/header.scss'
import Image from '../Images/Group.png'
import Toggle from '../Images/toggle.png'
import {BiSearch} from 'react-icons/bi'
import {MdCall} from 'react-icons/md'
import {BsArrowRight} from 'react-icons/bs'

  class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light  ">
                        <img src={Image} alt="Wait" />
                        <BiSearch className='search'/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                           <img src={Toggle} alt="" className='toggle' />
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                             <a className="nav-link first" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                             <a className="nav-link others" href="#">About</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link others" href="#">Individual</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link others" href="#">Corporative</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link others" href="#">Money Transfer</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link others" href="#">Correspondent</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link others" href="#">Service Network</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link others" href="#">Contacts</a>
                        </li>
                        
                  </ul>
                 </div>
               </nav>
               <div className="hr-line"></div>
               <UnderHeader/>
          </div>
        )
    }
}

export default Header




  class UnderHeader extends Component {
  render() {
    return (
      <div className='underheader'>
       <div className='box'>
       <img src={Image} alt="Wait"  className="logo" />
       <div className="forreverse">
       <div className="language">
             <a href="#" >EN</a>
             <a href="#">AZ</a>
        </div>
        <div className='right'>
          <h6>Online Banking</h6>
          <BsArrowRight className='arrow'/>
        </div>
        <div className='left'>
          <MdCall className='call'/>
          <p>1546</p>
        </div>

        
        </div>
       </div>
      </div>
    )
  }
}


