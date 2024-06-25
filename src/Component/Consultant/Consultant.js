import React from "react";
import "./Consultant.css"
import { Link } from "react-router-dom";



const Consultant = () =>{
    return (
        <div className="Consultant_parent">
            <span className="Consultant_title">Book Free Consultation Right Now</span>
                <Link to='/contact' className='Consultant_button'>
                    Contact Us
                </Link>
        </div>
    )
}

export default Consultant;