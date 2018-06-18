import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    render (){
        return (
            <div className="Content-defaults">
                <p className="Content-p , Content-intro">Very important message which will give you a brief overview of cost. If you are a pathetic reader, kindly check your whatsapp, there are people in groups waiting for your reply. I can in no way help you.</p>
                <div className="Content-grid">
                    <div className="Content-box-1">
                        <h3 className=" Content-h3">You will be working with...</h3>
                        <p className=" Content-p">
                        me freelancing in photography, teaching javascript to beginners for the past three years.
                        I also manage to invest good amount of time practicing yoga, brand management, web app development, designing and content writing.</p>
                    </div>
                    
                    <div className="Content-box-2">
                    <h3 className=" Content-h3">Current situation...</h3>
                    <p className=" Content-p">I signed up for a react nanodegree program but got busy travelling and managing Cuckoo hostel in bangalore. I just returned to bangalore and am excited to start practicing regularly from 4-7pm daily excluding weekends. Will be Kicking off the course from 20th June,2018.
                    </p>
                    </div>
                    

                    <div className="Content-box-3">
                    <h3 className=" Content-h3">How much will it cost you...</h3>
                    <p className=" Content-p">I paid 30,000/- for the nanodegree including taxes.
                    I would be charging 10,000/- including the conversation we can have in the kitchen. I have a head started the course which means it would take you even less time to hop on and get up and running.</p>
                    </div>
                    
                    <div className="Content-box-4">
                    <h3 className=" Content-h3">How long will it take...</h3>
                    <p className="Content-p">The duration of the course will be fixed but still have to be estimated according to your speed. Good thing is that the entire guided program enables us to stay on track and focus on learning react.</p>
                    </div>

                    <div className="Content-box-5">
                    <h3 className=" Content-h3">This is an opportunity...grasp it</h3>
                    <p className=" Content-p">I am pushing this because I want to be on schedule and this might be your time to be on schedule too rather than procrastinating. Also I am excited to learn together.
                    The deadline of starting over this react nanodegree is 20th June.</p>
                    </div>

                    <div className="Content-box-6">
                    <h3 className=" Content-h3">New Update on the new house...open invitation for your ideas and contributions</h3>
                    <p className=" Content-p">I am planning a very minimalistic theme for the house with greens on the corner and white in the background.
                    Adding stuff to the kitchen slowly and step by step. Its ready to cook.
                    DIY wall mounted bed is still to be planned. 
                    </p>
                    </div>

                    <div className="Content-box-7">
                        <h3 className=" Content-h3">The environment makes a good difference...</h3>
                    <p className=" Content-p"> The house having minimalistic approach intensifies your focus and the environment eliminates noise making you see your objective clearly. Learning react would be a time taking process if you are a beginner and all those resources will help drastically.</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Content;