import React from 'react'
import './mainBody.css'
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDropdown } from 'react-icons/io'
import imageemp from './assests/image-empowerment.png'
import top10 from './assests/10ranking.png'
import total from './assests/total-students.png'
import topper from './assests/topper-students.png'
import contri from './assests/contributor.png'


export const MainBody = () => {
    return (
        <div className="main-body">
            <div className="left-side-content">
                <div className="left-side-content-text">Getting you <span className="span-element-1">4.9</span> <br /> <span> <img src="" alt="" /></span>where you <br /> want to study</div>
                <div className="text-content-paragraph">Everything you need to know for your study <br /> abroad journey: from first search to your first day <br />at campus.</div>
                <div className="courses-service">
                    <div className="tabs ">
                        <a href="#" className="active">Courses</a>
                        <a href="#">Services</a>
                    </div>

                    <div className="subject-where">
                        <h3>Subject</h3>
                        <p>What do you want to study?</p>
                    </div>

                    <div className="subject-where where-main">
                        <div>
                            <h3>Where</h3>
                            <p>Your ideal country / region or institution</p>
                        </div>

                        <div className="where-search-bar">
                            <BiSearch />
                            <p>Search</p>
                        </div>


                    </div>

                </div>
            </div>


            <div className="right-side-content">
                <div className="empowering-education">
                    <div className="empowering-education-content">
                        <p className="empedu">Empowering <br />Education <br />Through <br />Innovation</p>
                        <div className="total-students">
                            <img src={imageemp} alt="logo" />
                            <div>
                                <p className="p1">Total Students</p>
                                <p className="p2">159.59</p>
                            </div>
                            <div className="arrow-dropdown">
                                <IoIosArrowDropdown />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="ranking-report">

                    <div className="ranking">
                        <p className="title">World Top 10 University</p>

                        <div className="borderdesign"><img src={top10} alt="" /></div>

                        <div className="element">
                            <div className="">
                            <p><span className="pink"></span> Graphic Template</p>
                            </div>

                            <div>
                            <p><span className="yellow"></span> UI Design </p>
                            </div>
                        </div>
                    </div>

                    <div className="report">
                        <p className="title">Earning Report</p>
                        <div className="report-items">
                            <img src={total} alt="" />
                            <div className="items-text">
                                <p className="p1">Total Students</p>
                                <p className="p2">78k</p>
                            </div>
                        </div>
                        <div className="report-items" >
                            <img src={topper} alt="" />
                            <div>
                                <p className="p1">Bd Topper Students</p>
                                <p className="p2">8k</p>
                            </div>
                        </div>
                        <div className="report-items">
                            <img src={contri} alt="" />
                            <div>
                                <p className="p1">Contributor Bobus</p>
                                <p className="p2">706</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
