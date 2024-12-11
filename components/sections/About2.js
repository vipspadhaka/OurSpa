import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const About2 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="about-section-two">
          <div className="about2-pattrn1 bounce-y"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="image-column col-lg-6">
                  <div className="inner-column">
                    <div className="image-box">
                      <div className="play-box">
                        <a onClick={() => setOpen(true)} className="play-btn-two">
                          <i className="icon fa-solid fa-play" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div className="row g-0">
                        <div className="col-sm-6">
                          <figure className="image-one mb-0"><Link href="page-about"><img src="images/resource/about2-1.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="col-sm-6">
                          <figure className="image-two"><Link href="page-about"><img src="images/resource/about2-2.jpg" alt="Image"/></Link></figure>
                          <figure className="image-two mb-0"><Link href="page-about"><img src="images/resource/about2-3.jpg" alt="Image"/></Link></figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-column col-lg-6">
                  <div className="inner-column">
                    <div className="sec-title mb-0">
                      <span className="sub-title">Get to know us</span>
                      <h2 className="words-slide-up">Building Physically & mental Health</h2>
                      <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur .</div>
                    </div>
                    <div className="row">
                      <div className="list-box col-sm-4">
                        <div className="inner">
                          <figure className="thumb"><img src="images/resource/about2-4.png" alt="Image"/></figure>
                          <h4 className="title">Manicure</h4>
                        </div>
                      </div>
                      <div className="list-box col-sm-4">
                        <div className="inner">
                          <figure className="thumb"><img src="images/resource/about2-5.png" alt="Image"/></figure>
                          <h4 className="title">Make-up</h4>
                        </div>
                      </div>
                      <div className="list-box col-sm-4">
                        <div className="inner">
                          <figure className="thumb"><img src="images/resource/about2-6.png" alt="Image"/></figure>
                          <h4 className="title">Body Message</h4>
                        </div>
                      </div>
                    </div>
                    <div className="author-box">
                      <div className="inner">
                        <Link href="page-about" className="theme-btn btn-style-two btn pricing-btn"><span className="btn-title">Know More</span></Link>
                        <div className="contact-info">
                          <div className="icon-box">
                            <img src="images/icons/comment1.png" alt="Image"/>
                          </div>
                          <div className="sign">
                            <div className="text">Chat Us Anytime</div>
                            <Link href="tel:(406)555-0120">(406) 555-0120</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default About2
