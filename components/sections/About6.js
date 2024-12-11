import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const About6 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="about-section-four">
        <div className="about6-shape1 bounce-y"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="image-column col-lg-6 order-2 order-lg-0">
                <div className="inner-column">
                  <div className="image-box">
                    <div className="play-box">
                      <a onClick={() => setOpen(true)} className="play-btn-two">
                        <i
                          className="icon fa-solid fa-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <figure className="image-one mb-0">
                      <Link href="page-about.html">
                        <img src="images/resource/videobg.png" alt="Image" />
                      </Link>
                    </figure>
                    <figure className="image-two bounce-y">
                      <img src="images/resource/about6-2.png" alt="Image" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="content-column col-lg-6">
                <div className="inner-column">
                  <div className="sec-title mb-0">
                    <span className="sub-title">Get to know us</span>
                    <h2 className="words-slide-up">
                      Building Physically & mental Health
                    </h2>
                    <div className="text">
                      At our spa, we believe true wellness comes from balancing
                      physical relaxation with mental rejuvenation. Through our
                      carefully curated treatments, we aim to help you restore
                      your body’s vitality and bring peace to your mind.
                      Discover the power of relaxation, designed to uplift both
                      your physical and mental well-being.
                    </div>
                  </div>
                  <div className="row">
                    <div className="list-box col-sm-4">
                      <div className="inner">
                        <figure className="thumb">
                          <img src="images/resource/about2-4.png" alt="Image" />
                        </figure>
                        <h4 className="title">Manicure</h4>
                      </div>
                    </div>
                    <div className="list-box col-sm-4">
                      <div className="inner">
                        <figure className="thumb">
                          <img src="images/resource/about2-5.png" alt="Image" />
                        </figure>
                        <h4 className="title">Make-up</h4>
                      </div>
                    </div>
                    <div className="list-box col-sm-4">
                      <div className="inner">
                        <figure className="thumb">
                          <img src="images/resource/about2-6.png" alt="Image" />
                        </figure>
                        <h4 className="title">Body Message</h4>
                      </div>
                    </div>
                  </div>
                  <div className="author-box">
                    <div className="inner">
                      <Link
                        href="/page-about"
                        className="theme-btn btn-style-two btn pricing-btn"
                      >
                        <span className="btn-title">Know More</span>
                      </Link>
                      <div className="contact-info">
                        <div className="icon-box">
                          <img src="images/icons/comment1.png" alt="Image" />
                        </div>
                        <div className="sign">
                          <div className="text">Chat Us Anytime</div>
                          <Link href="https://wa.me/+8801891450300">
                            +8801891450300
                          </Link>
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
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="_KmuuN7SqjY"
        onClose={() => setOpen(false)}
      />
    </>
  );
};
export default About6;
