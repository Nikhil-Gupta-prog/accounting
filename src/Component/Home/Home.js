import React from 'react'
import Class from './Home.module.css'
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return (
        <div className={Class.home}>
                    <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} showThumbs={false}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt='imag1' className={Class.image} />
                            <div className={Class.comapanyNameDiv}>
                                <span className={Class.comapanyName}>Jaipur Accounting Service Pvt. Ltd.</span>
                            </div>
                            <div className={Class.carousel_text}>
                                <span className={Class.tagline}> Offering exceptional business services. </span>
                                 <p className={Class.subtagline}> Leave your back office to us and focus on your business.</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt='image2'className={Class.image} />
                            <div className={Class.comapanyNameDiv}>
                                <span className={Class.comapanyName}>Jaipur Accounting Service Pvt. Ltd.</span>
                            </div>
                            <div className={Class.carousel_text}>
                                <span className={Class.tagline}>Each business has different needs that should be professionally addressed.</span>
                                 <p className={Class.subtagline}>Start a conversation with our experts today.</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt='image3' className={Class.image}/>
                            <div className={Class.comapanyNameDiv}>
                                <span className={Class.comapanyName}>Jaipur Accounting Service Pvt. Ltd.</span>
                            </div>
                            <div className={Class.carousel_text}>
                                <span className={Class.tagline}>We like real conversations</span>
                                 <p className={Class.subtagline}>Give us a few minutes and you'll never need to worry about bookkeeping again.</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt='image2'className={Class.image} />
                            <div className={Class.comapanyNameDiv}>
                                <span className={Class.comapanyName}>Jaipur Accounting Service Pvt. Ltd.</span>
                            </div>
                            <div className={Class.carousel_text}>
                                <span className={Class.tagline}>We do taxes. And we do them very well.</span>
                                 <p className={Class.subtagline}> We take the stress out of tax season.</p>
                            </div>
                        </div>
                    </Carousel>
        </div>
    )
}

export default Home;

