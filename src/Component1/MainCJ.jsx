import React, { useState } from 'react'
import './maincj.css'
import './jobd.css'

import './candidated.css'

// import { Link } from 'react-router-dom'

function MainCJ() {


    const[toogle,setToogle]=useState(0)

    const called=(indeser)=>setToogle(indeser)





    return (
        <>

            <div className="maincj">


                <div className="top">


                    <div className="app"><h3>Applied Jobs</h3></div>
                    <div className="dropend">

                        <span className="material-symbols-outlined">
                            notifications_active
                        </span>




                        <div className="radhe"> Sort</div>


                        <select id="cars">
                            <option value="volvo">Today</option>
                            <option value="saab">Sunday</option>
                            <option value="opel">Monday</option>
                            <option value="audi">Tuesday</option>
                            <option value="volvo">Wednesday</option>
                            <option value="saab">Thursday</option>
                            <option value="opel">Friday</option>
                            <option value="audi">Saturday</option>
                        </select>



                    </div>

                </div>
                <hr />


                <div className="dobtn">
                    <div  className="butner"   onClick={()=>called(1)}>


                        {/* "butner" */}
                        <span class="material-symbols-outlined">
                            shopping_bag
                        </span> <p>Candidate Details</p>
                    </div>

                    <div  className="ndbut"  onClick={()=>called(2)}>


                        {/* "ndbut" */}

                        <span class="material-symbols-outlined">
                            task
                        </span> <p>Job Description</p>
                    </div>
                </div>
            </div>



            {/* Candidate Component---------------------------------------- */}











            <div className={toogle===1 ? "show-maincan": "maincan"}>     
                <div className="canuser">
                    <div className="nam"><span className="material-symbols-outlined">
                        person
                    </span>
                        <div className="ph5">
                            <p>Name</p>
                            <h5>dheeraj Kumar</h5>
                        </div>

                        <div className="udate">

                            <p>Application Date</p>
                            <h5>25/10/2024</h5>
                        </div>



                    </div>

                    <div className="btn03">
                        <button type="submit" className='btn01'>Position-React Developer</button>
                        <button type="submit" className='btn02'> <span class="material-symbols-outlined">
                            mail
                        </span><p> Fresher</p></button>
                        <button type='submit' className='btn003'><span class="material-symbols-outlined">
                            mail
                        </span>  <p>dkrvission442@gmail.com</p></button>
                    </div>
                </div>


                <hr />

                <div className="bio">
                    <h3>Bio</h3>
                    <p>As. React Developer Skilled in crafting dynamic user interfaces. Proficient in ReactJS,JavaScript,Redux,and resposive design. Adept at collaborating with cross-functional teams to devliver hihg-quality web applications.Holds a bachelor's degree in Computer Science.</p>
                </div>


                <div className='sitaji'>

                    <div className='sita'>




                        <fieldset className="exp">
                            <h4>Experience</h4>
                            <div className="one">1</div>
                            <div className="dreact">
                                <p>02/03/29-13/05/23</p>
                                <h4>React Developer ,[Delloite]</h4>
                            </div>
                            <div className="para">
                                <li>Developed and maintain key features of the company's flagship web application.</li>
                                <li>Cllaborated with cross-functional teams to implement new features and enhancements.</li>
                                <li>Conducted code reviews and provided mentorship to junior developers.</li>
                            </div>


                            <div className="two">2    </div>
                            {/* <div className="dreactp1"> </div> */}
                            <div className="dreactG">
                                <p>02/03/29-13/05/23</p>

                                <h4>React Developer ,[Google]</h4>
                            </div>
                            <div className="para2">
                                <li>Contributed to the design and implementation of responsive user interfaces.</li>
                                <li>Worked closely with UI/UX designers to bring design concepts to life.</li>
                            </div>


                            {/* <legend> <button type='submit' className='btnshort'>Shortlist</button> </legend>
                            <legend> <button type='submit' className='btnreject'>Reject</button> </legend> */}




                        </fieldset>

                        <fieldset className="tech">
                            {/* <p className='v1'></p> */}
                            <h3>Skill Set</h3>
                            <div className="skill">
                                <div className="skli">
                                    <li>React JS</li>
                                    <li>Redux</li>
                                    <li>Resposive Design</li>

                                </div>
                                <div className="skli2">
                                    <li>Git</li>
                                    <li>HtML5 & CSS3 HTML5 & CSS3</li>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="both">
                        <button type='submit' className='btnshort'>Shortlist</button>
                        <button type='submit' className='btnreject'>Reject</button></div>



                </div>

                <div className='fig'>
                    <h3>Education</h3>
                    <div className="edone">1 </div>
                    <div className="Mb"><p>University Name</p>
                        <h4>M.Tech</h4></div>



                    <div className="edtwo">2 </div>
                    <div className="bt"><p>University Name</p>
                        <h4>B.Tech</h4></div>

                </div>

            </div>






            {/* --------------------JobD ---------------------------------- */}







            <div className={toogle===2 ? "show-mainjob" :"mainjob"}>

                <div className="krin">
                    <p>22nd jan 2024 by Krinvitech</p>
                    <h2>React Developer</h2>
                </div>


                <div className="leftright">
                    <div className="Left">
                        <div className="ico"><span class="material-symbols-outlined">
                            person
                        </span>


                        </div>


                        <div className="iconam"><p>Krinvi Tech</p></div>
                        <div className="sal1">
                            <p>Salary</p>
                            <h4>$200</h4>

                        </div>
                        <hr />
                        <div className="expfr">
                            <p>Experience</p>
                            <h4>Fresher</h4>
                        </div>
                        <hr />



                        <div className="fult">
                            <p>Job Type</p>
                            <h4>Full Time</h4>
                        </div>                            <hr />

                        <div className="jand">
                            <p>Date</p>
                            <h4>22 jan 2024</h4>
                        </div>
                        <hr />

                        <div className="loc">
                            <p>Location</p>
                            <h4>Remote</h4>
                        </div>


                    </div>

                    <div className="Right">

                        <fieldset className='over1'>
                            <legend>Overview</legend>

                            <p>Exciting oppertunity for a skilled React Developer to join our team at [Company Name]. You'll play key role in creating dynamic and resposive user interfaces, contributing to to the success of our projects.</p>
                        </fieldset>

                        <fieldset className='over2'>
                            <legend>Job Description</legend>
                            <p>As a React Developer,you will be responsible for designing and implementing user interfaces,ensuring the seamless integration of front-end components with back-end systems . Your role involves collaborating with cross-functional teams to delever high-quality software solutions </p>
                        </fieldset>

                        <fieldset className='over3'>
                            <legend>Responsibilities</legend>
                            <li> Develop and implement user interface components using ReactJs principles.</li>
                            <li>Collaborate with UI/UX Designers to translate design Wireframes into functional components</li>
                            <li>Optimize components for maximum performance across various web-capable devices and browers.</li>
                            <li>Participate in code reviews  and maintain code quality,performance and organization.</li>

                        </fieldset>

                        <fieldset className='over4'>
                            <legend>Require Skills</legend>
                            <li>Proficient in React.Js and its core principles.</li>
                            <li>Experience with popular React.js Workflows (such as Redux).</li>
                            <li>Familarity with RESTful APIs and modern authorization mechanisms</li>
                            <li>Strong proficiency with JavaScript,HTML,CSS</li>
                            <li>Experience with common front-end development tools,build pipelines,and version control system.</li>
                        </fieldset>

                        <fieldset className='over5'>
                            <legend>Benefits</legend>
                            <li>Competitive salary package</li>
                            <li>Health insurance coverage</li>
                            <li>Flexible work hours.</li>
                            <li>Professional development oppertunities.</li>
                            <li>Dynamic and collaborative work environment.</li>

                        </fieldset>

                    </div>

                </div>



                <div className="twobtn">
                    <button type='submit' className='twobtn1' >Shortlist</button>
                    <button type='submit' className='twobtn2' >Reject</button>
                </div>




            </div>



        </>
    )
}

export default MainCJ