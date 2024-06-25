import React from "react";
import classes from "./Card.module.css";
import { FaBookOpen, FaRupeeSign, FaEnvelopeOpenText,FaBusinessTime,FaCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.iconDiv}>
        <span className={classes.iconSpan}>
          <IconContext.Provider value={{ style: { fontSize: "30px", color: "#e89614" } }}>
           {props.title === 'Accounting'? <FaBookOpen />:''}
           {props.title === 'GST'? <FaRupeeSign /> : ''}
           {props.title === 'Income Tax'? <FaEnvelopeOpenText /> : ''}
           {props.title === 'Business Registrations'? <FaBusinessTime /> : ''}
           {props.title === 'Other Work'? <FaCheckCircle /> : ''}
          </IconContext.Provider>
        </span>
      </div>
      <div className={classes.cardBody}>
        <p className={classes.heading}>{props.title}</p>
        <span className={classes.description}>{props.description} </span>
      </div>
    </div>
  );
};

export default Card;
