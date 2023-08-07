import React from 'react'
import './Header.css'
import { GrDirections } from 'react-icons/gr';
import { TbMenu2 } from 'react-icons/tb';
import { PiAirplaneLight } from 'react-icons/pi';
import logo from './assests/logoSkillTank.png'


export const Header = () => {
    return (
        <header className="navbar">
            <div className="nav-items">
                <div className="logo">
                    <div className="page-logo-image">
                        <img src={logo} alt="" />
                    </div>
                    <div className="page-logo-text">Part of Times <br/>
                    Higher Educaion</div>
                    
                </div>
                <div className="navigation">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Officers</a></li>
                        <li><a href="#">Examination</a></li>
                        <li><a href="#">Sections</a></li>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Acedamics</a></li>
                        
                    </ul>
                </div>
                <div className="icons-nav">
                    <div className="icon-1"><GrDirections /></div>
                    <div className='icon-2'><PiAirplaneLight /></div>
                </div>
                <div className="menu-hb"> <button><TbMenu2 /></button> </div>
            </div>
        </header>
    )
}
