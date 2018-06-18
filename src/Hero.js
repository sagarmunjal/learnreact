import React, {Component} from 'react' ; 
import './Hero.css';


class Hero extends Component {
    render (){
        return (
            <div className="Hero , Hero-bg">
                    <div className="Hero-center">
                        <div className="Hero-content">
                            <h1 className="Hero-h1 , Hero-emphasis , Hero-text-separated">LEARN REACT (Bangalore_v.0.1)</h1>
                            <p className="Hero-p">looking for motivators | enablers | educators | learners </p>
                            <h3 className="Hero-h3 , Hero-muted">This website is running on react and hosted for free. If you dont know how to do that. <span className="Hero-white">This is for you!</span> </h3> 
                        </div>
                    </div>
            </div>
        )
    }
}

export default Hero;