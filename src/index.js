import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import Slider from './Components/Slider'
import Corporative from './Components/Corporative'
import News from './Components/News'
import Valuyta from './Components/Valuyta'
import Footer from './Components/Footer'




const root = document.getElementById('root')

export class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slider/>
                <Corporative/>
                <News/>
                <Valuyta/>
                <Footer/>
            </div>
        )
    }
}

export default Index


ReactDOM.render(<Index/>,root)