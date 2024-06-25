import React, { useState } from "react";
import "./Service.css";
import Card from "../UI/Card";
import service from "../../Data/serviceData";
import { Link } from "react-router-dom";

const Service = () => {
  const [items, setItems] = useState(service);

  return (
    <div className="Service_parent" id="Projects">
      <div>
        <span className="Service_title">Services</span>
        <span className="Service_subtitle">Your All-In-One Personal and Business Solution</span>
        <p className="Service_description">We are your dedicated team of <strong>Jaipur Accounting Services </strong> and accountants working to provide high quality services for far less than the cost of hiring an in-house accountant. We care about your business and will be with you every step of the way. Our team will know your finances, inside and out and will be there to answer all of your questions, no matter how big or small!</p>
      </div>

      <div className="Service_parent2">
          {items.map((item) => {
            const { id, image, title, description, technology,path } = item;
            return (
              <Link to={path}  className="service" key={id}>
              <div>
                <li className="child_pro ">
                  <Card
                    image={image}
                    title={title}
                    description={description}
                    technology={technology}
                  />
                </li>
              </div>
              </Link>
            );

          })}
        </div>
    </div>
  );
};

export default Service;
