import React, { Component } from 'react'
import '../Styles/slider.scss'
import Slide1 from '../Images/24087.jpg'
import Slide2 from '../Images/kart.jpeg'
import Slide3 from '../Images/kart-1.jpg'

export class Slider extends Component {
    render() {
        return (
            <div className='slider'>
                      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Slide1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slide2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slide3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<div className='text d-flex justify-content-center mt-3'>
    <p>Learn More</p>
</div>
            </div>
        )
    }
}

export default Slider
