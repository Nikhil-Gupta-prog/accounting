import React, { useState } from "react";
import classes from "./Contact.module.css";
import Form from "./Form";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMapPin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmitting, setDidSubmitting] = useState(false);

  const formHandler = async (userData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://nikhilportfolio-452d9-default-rtdb.firebaseio.com/portdata.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Somethong went wrong !");
      }
      setIsSubmitting(false);
      setDidSubmitting(true);
    } catch (error) {
      console.log(error);
    }
  };

  const successMessage = (
    <div className={classes.success_msg}>
      <p>
        Your message is received by me! I will surely contact with you ASAP!
      </p>
    </div>
  );

  return (
    <div id="contact" className={classes.Contact_parent}>
      <div className={classes.sec_3_heading}>
        <p>Get In Touch</p>
      </div>

      <div className={classes.parent_con}>
        <div className={classes.child_con}>
          {!isSubmitting && didSubmitting && successMessage}
          {!isSubmitting && !didSubmitting && <Form />}
        </div>
        <div className={classes.child_con}>
          <div className={classes.child_conPart1}>
            <span className={classes.child_conPart1_heading}>Call me</span>
            <p className={classes.call}>
              <FaPhone /> &nbsp; +91 6377518233
            </p>
          </div>
          <div className={classes.child_conPart1}>
            <span className={classes.child_conPart1_heading}>Email</span>
            <p className={classes.mailbox}>
              <FaEnvelope /> &nbsp; nikhilgupta122000@gmail.com
            </p>
          </div>
          <div className={classes.child_conPart1}>
            <span className={classes.child_conPart1_heading}>Location</span>
            <p className={classes.mailbox}>
              <FaMapPin /> &nbsp; Jaipur, Rajasthan
            </p>
          </div>
          <div className={classes.child_conPart1}>
            <span className={classes.child_conPart1_heading}>Follow me</span>
            <div className={classes.mailbox}>
              <a
                href="https://instagram.com/nikhilkh5156?igshid=dddwbmb5ryna"
                target="_blank"
                rel="noreferrer"
                className={classes.icons_child}
              >
                <IconContext.Provider
                  value={{ style: { fontSize: "30px", color: "#8a081c" } }}
                >
                  <FaInstagram />
                </IconContext.Provider>
              </a>
              <a
                href="https://github.com/Nikhil-Gupta-prog"
                target="_blank"
                rel="noreferrer"
                className={classes.icons_child}
              >
                <IconContext.Provider
                  value={{ style: { fontSize: "30px", color: " #000" } }}
                >
                  <FaGithub />
                </IconContext.Provider>
              </a>

              <a
                href="https://www.linkedin.com/in/nikhil-gupta-3a6a44183/"
                target="_blank"
                rel="noreferrer"
                className={classes.icons_child}
              >
                <IconContext.Provider
                  value={{ style: { fontSize: "30px", color: "darkblue" } }}
                >
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
              <a
                href="https://twitter.com/Nikhiiiiiilll?s=09https://twitter.com/Nikhiiiiiilll?s=09"
                target="_blank"
                rel="noreferrer"
                className={classes.icons_child}
              >
                <IconContext.Provider
                  value={{ style: { fontSize: "30px", color: " #00acee" } }}
                >
                  <FaTwitter />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
