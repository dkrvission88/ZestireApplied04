import React, { useState } from 'react'



import './main.css'
// import './fewless.css'
// import './asr.css'
import { Link } from 'react-router-dom'


function Main() {


    const [tab, setTab] = useState(0)

    const todotab = (index) => {
        setTab(index)
    }





    return (
        <>
            <div className="header">

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


                <div className="dtop">


                    <div className="uapplied">
                        <div className="AB" onClick={() => todotab(1)}>
                            <span className="material-symbols-outlined">
                                shopping_bag
                            </span> <p> Applied Jobs</p>
                        </div>

                        <div className="SH" onClick={() => todotab(2)} >
                            <span className="material-symbols-outlined">
                                article
                            </span> <p>Shorlisted</p>
                        </div>

                        <div className="RE" onClick={() => todotab(3)}>
                            <span className="material-symbols-outlined">
                                task
                            </span><p> Rejected</p>
                        </div>
                    </div>
                </div>


            </div>


            {/* ------------------------- Tab 1 Work --------------------------- */}




            <div className={tab === 1 ? " active-mainAsr1" : "mainAsr1"} >

                <div className="Ci01">

                    <div className="vv1">
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <div className="Ci011">

                            <p>Candidate Name</p>
                            <h5>Dheeraj Kumar</h5>
                        </div>

                    </div>
                    <div className="JA01">
                         <div className="mmd">
                            <p>Job Title</p>
                            <h5>React js developer</h5></div> 

                            <div className="Adate01">
                                <p>Application Date</p>
                                <h5>25/01/2024</h5>
                            </div>
                        

                    </div>




                    <Link to='/MainCJ' className="btnview01">
                        View


                        {/* <span className='check'></span> */}
                    </Link>

                </div>





            </div>




            {/*-------------------- Tab2 -------------------------------------- */}




            <div className={tab === 2 ? " active-mainAsr" : "mainAsr"}>


                <div className="double3">

                    <div className="Ci">


                        <div className="icons">


                            <span className="material-symbols-outlined">
                                person
                            </span>




                            <div className="cont"> <p>Candidate Name   </p>
                                <h5>Dheeraj Kumar</h5>
                            </div>
                        </div>





                        <div className="JA">


                            <div className="mmd2">


                                <p>Job Title</p>
                                <h5>React js developer</h5>
                            </div>
                            <div className="Adate">
                                <p>Application Date</p>
                                <h5>25/01/2024</h5>
                            </div>



                        </div>



                    </div>






                    <div className="btnview">
                        <button type='submit' className='btn1'>Undo</button>

                        <span className="material-symbols-outlined">
                            check_circle
                        </span> <Link to='/MainCJ' className='check'>View</Link>
                    </div>


                </div>
            </div>




            {/* ----------------- tab3 ----------------------------------------- */}


            <div className={tab === 3 ? " active-mainAsr" : "mainAsr"}>


                <div className="double3">

                    <div className="Ci">

                    <div className="icons">
                        <span className="material-symbols-outlined">
                            person
                        </span>




                        <div className="cont"> <p>Candidate Name   </p>
                            <h5>Dheeraj Kumar</h5>
                        </div>

                        </div>






                        <div className="JA">


                            <div className="mmd2">


                                <p>Job Title</p>
                                <h5>React js developer</h5>
                            </div>
                            <div className="Adate">
                                <p>Application Date</p>
                                <h5>25/01/2024</h5>
                            </div>



                        </div>



                    </div>




                    <div className="btnview">
                        <button type='submit' className='btn1'>Undo</button>

                        <span className="material-symbols-outlined">
                            check_circle
                        </span> <Link to='/MainCJ' className='check'>View</Link>
                    </div>

                </div>



            </div>











        </>
    )
}

export default Main