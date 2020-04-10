import React from 'react'
import image1 from '../Media/man_hanging.jpg'

const Home = () => {
    return(
        <div className="animated fadeIn">
            <img className="first-image" src={image1} alt="oh no!" />
            <div className="content-position opening-text">
            <h1 className="text7">Joe Grant Fitness</h1>
            <h2 className="text2 animated fadeIn delay-1s">Mobile Personal Training</h2> 
            <h2 className="text2 animated fadeIn delay-1s">& Massage Therapy</h2>
            <p className="text5 animated fadeIn delay-1s">North London, UK</p>
            <div className="quote">
            <p>"...you will have no regrets and a 6-pack!”</p>
            <p className="right">Neil</p>
            </div>
            </div>
        </div>
    )
}

export default Home;