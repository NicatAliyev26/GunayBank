import React, { Component } from 'react'
import '../Styles/news.scss'


export class News extends Component {
    render() {
        return (
            <div className='news container'>
                <div className='main-article'>
                <div className='article'>
                    <h5>News</h5>
                    <a href="#">All news</a>
                </div>
                </div>
                

                <div className='hr container'>
                    <div className='line'></div>
                </div>
                <div className='news-box'>
                <Lastest number="2021-03-27"
                         text="“Gunay Bank” OJSC supported the Karabakh Revival Fund"/>
                <Lastest number="2021-02-27"
                         text="“Gunay Bank” OJSC has launched the campaign “Evin sənin əlindədir”" />
                <Lastest number="2021-01-27"
                         text="“Gunay Bank” OJSC has eased the terms of mortgage service"/>
                </div>       
            </div>

        )
    }
}

export default News





export class Lastest extends Component {
    render() {
        return (
            <div className="last container">
                <p className='number'>{this.props.number}</p>
                <p>{this.props.text}</p>
                <button>Learn more</button>
            </div>
        )
    }
}


