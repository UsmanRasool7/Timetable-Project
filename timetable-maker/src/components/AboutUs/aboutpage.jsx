import React from "react";
import './aboutpage.css';
import Sidebar from '../SideBar/Sidebar';

export function MainHeading({heading}){
    const style = {
        backgroundColor: '#1B1D21',
        color: 'white',
        border: '2px solid #1B1D21',
        width: '77.8vw',
        
      };
      const headingStyle = {
        paddingLeft: '10px', 
      };
    return (
        <div style={style}>
            <h1 style={headingStyle}>{heading}</h1>
        </div>
    )
}
function About(){
           return (
        <div id="about-page">
            <Sidebar />
            <div>
            <MainHeading heading="About Us" />
                <div id="about-content">
                <p>
                    This is where you describe your app, your team, or your project in
                    detail. You can expand this section with more content as needed.
                </p>
                </div>
            </div>
        </div>);
}
export default About;