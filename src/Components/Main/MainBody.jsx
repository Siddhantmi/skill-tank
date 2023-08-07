import React from 'react'
import './mainBody.css'
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDropdown } from 'react-icons/io'
import imageemp from './assests/image-empowerment.png'
import top10 from './assests/10ranking.png'

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
                        <p>World Top 10 University</p>

                        <div><img src={top10} alt="" /></div>

                        <div>
                            <div>
                                <span></span> Graphic Template
                            </div>
                            <div>
                                <span></span> UI Design
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>Earning Report</p>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>Total Students</p>
                                <p>78k</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>Total Students</p>
                                <p>78k</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>Total Students</p>
                                <p>78k</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
