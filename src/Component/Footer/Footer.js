import { React } from "react";
import "./footer.css";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="Footer_parent">
      <div className="Footer_subparenet1">
        <span className="Footer_title">
          Jaipur Accounting Services Pvt Ltd!
        </span>
      </div>
      <div className="Footer_subparenet2">
    
          <div className="child_con">
            <div className="child_conPart1">
              <span className="child_conPart1_heading">Follow me</span>
              <div className="mailbox">
                <a
                  href="https://instagram.com/nikhilkh5156?igshid=dddwbmb5ryna"
                  target="_blank"
                  rel="noreferrer"
                  className="icons_child"
                >
                  <IconContext.Provider
                    value={{ style: { fontSize: "30px", color: "#fff" } }}
                  >
                    <FaInstagram />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://github.com/Nikhil-Gupta-prog"
                  target="_blank"
                  rel="noreferrer"
                  className="icons_child"
                >
                  <IconContext.Provider
                    value={{ style: { fontSize: "30px", color: " #fff" } }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                </a>

                <a
                  href="https://www.linkedin.com/in/nikhil-gupta-3a6a44183/"
                  target="_blank"
                  rel="noreferrer"
                  className="icons_child"
                >
                  <IconContext.Provider
                    value={{ style: { fontSize: "30px", color: "#fff" } }}
                  >
                    <FaLinkedin />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://twitter.com/Nikhiiiiiilll?s=09https://twitter.com/Nikhiiiiiilll?s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icons_child"
                >
                  <IconContext.Provider
                    value={{ style: { fontSize: "30px", color: " #fff" } }}
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

export default Footer;
