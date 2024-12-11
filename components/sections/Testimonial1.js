import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  pagination: true,
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
  loop: true,
};
const Testimonial1 = ({ addClass }) => {
  return (
    <>
      <section className={`testimonial-section ${addClass}`}>
        <div className="testimonial-pattrn1-1 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <figure className="image">
              <img src="images/icons/icon1.png" alt="Image" />
            </figure>
            <span className="sub-title">Testimonial</span>
            <h2 className="words-slide-up text-split">
              Trusted by Our Clients
            </h2>
          </div>
          <div className="carousel-outer col-lg-8 offset-lg-2">
            <Swiper
              {...swiperOptions}
              className="testimonial-carousel-three owl-carousel owl-theme default-dots"
            >
              <SwiperSlide className="slide-item">
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <div className="rating">
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                    </div>
                    <div className="text">
                      “ Absolutely amazing experience! From the warm welcome to
                      the soothing aroma oil massage, everything was perfect. I
                      left feeling incredibly relaxed and rejuvenated. Highly
                      recommend this spa for anyone looking for top-tier service
                      and relaxation ”
                    </div>
                    <div className="info-box">
                      <h4 className="name">Tanveer Rahman -</h4>
                      <span className="designation">Client</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slide-item">
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <div className="rating">
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                    </div>
                    <div className="text">
                      “ Top-notch service and a peaceful atmosphere. The staff
                      was attentive and professional, and the treatments left me
                      feeling refreshed and glowing. This spa is a hidden gem,
                      and I will definitely be back for more treatments. Five
                      stars all the way ”
                    </div>
                    <div className="info-box">
                      <h4 className="name">Arif Hossain -</h4>
                      <span className="designation">Client</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slide-item">
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <div className="rating">
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                    </div>
                    <div className="text">
                      “ Best spa in Dhaka! The experience exceeded all
                      expectations. The atmosphere was tranquil, and the
                      treatments were top-notch. I felt completely pampered and
                      left glowing both physically and mentally. Highly
                      recommend this spa to anyone looking for a luxurious
                      experience ”
                    </div>
                    <div className="info-box">
                      <h4 className="name">Zahidul Islam -</h4>
                      <span className="designation">Client</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slide-item">
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <div className="rating">
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                    </div>
                    <div className="text">
                      “ Perfect place for relaxation! I had the aroma oil
                      massage, and it was exactly what I needed to unwind. The
                      attention to detail and personalized care made all the
                      difference. I left feeling pampered and thoroughly
                      relaxed. Five stars for exceptional service ”
                    </div>
                    <div className="info-box">
                      <h4 className="name">Md. Ismail Hossain -</h4>
                      <span className="designation">Client</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="image-box">
              <figure className="image client1 bounce-x overlay-anim">
                <Link href="#">
                  <img src="images/resource/client1.png" alt="Image" />
                </Link>
              </figure>
              <figure className="image client2 bounce-y overlay-anim">
                <Link href="#">
                  <img src="images/resource/client2.png" alt="Image" />
                </Link>
              </figure>
              <figure className="image client3 bounce-x overlay-anim">
                <Link href="#">
                  <img src="images/resource/client3.png" alt="Image" />
                </Link>
              </figure>
              <figure className="image client4 bounce-x overlay-anim">
                <Link href="#">
                  <img src="images/resource/client4.png" alt="Image" />
                </Link>
              </figure>
              <figure className="image client5 bounce-y overlay-anim">
                <Link href="#">
                  <img src="images/resource/client5.png" alt="Image" />
                </Link>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial1;
