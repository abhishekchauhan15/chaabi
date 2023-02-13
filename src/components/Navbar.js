import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Navbar = () => {
    return (
        <div className="header">
            <a href='#'>
                <TypeAnimation
                        className = "animationHeader"
                        sequence={['Typing Test', 500, 'Touch Typing', 250, 'Typing Practice', 250, 'Assignment', 250]}
                        speed={50}
                        repeat={0}
                        style={ { float: 'left', width: '500px', fontSize: '37.5px', marginLeft: '580px', marginTop:'80px'} }
                    />
            </a>
        </div>
    )
}

export default Navbar