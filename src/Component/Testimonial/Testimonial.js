import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "./Testimonial.css";
import TestimonialData from "../../Data/testimonialData";


const Testimonial = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  const [items, setItems] = useState(TestimonialData);

  return (
    <section className="testimonials">
      <span className="Testimonial_title">Testimonials</span>

      <Carousel breakPoints={breakPoints}>
        {items.map((item) => {
          const { id, Image, Review, City, Name } = item;
          return (
            <div class="card-container" key={id}>
              <img class="round" src={Image} alt="user" />
              <h3 className="Testimonial_name">{Name}</h3>
              <h6 className="Testimonial_city">{City}</h6>
              <p>{Review}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Testimonial;
