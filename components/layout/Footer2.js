import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer className="main-footer footer-style-two">
        <div
          className="bg bg-image"
          style={{ backgroundImage: "url(/images/background/bg-footer1.jpg)" }}
        ></div>

        <div className="widgets-section">
          <div className="footer1-1 bounce-x"></div>
          <div className="footer-pattrn1 bounce-y"></div>
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <Link href="/">
                      <img src="images/logo-2.png" alt="" />
                    </Link>
                  </div>
                  <div className="text">
                    Proin efficitur, mauris vel condimentum pulvinar, velit orci
                    consectetur ligul.{" "}
                  </div>
                  <div className="subscribe-form">
                    <form method="post" action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="email"
                          defaultValue=""
                          placeholder="Enter Your E-mail"
                          required=""
                        />
                        <button type="button" className="theme-btn">
                          <span className="btn-title">
                            <i className="fa-sharp fa-thin fa-paper-plane"></i>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <Link href="#">
                        <i className="icon fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="icon fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="icon fab fa-pinterest-p"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="icon fab fa-vimeo-v"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
                <div className="footer-widget links-widget">
                  <h3 className="widget-title">Links</h3>
                  <ul className="user-links">
                    <li>
                      <Link href="#">About</Link>
                    </li>
                    <li>
                      <Link href="#">Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                    <li>
                      <Link href="#">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
                <div className="footer-widget timetable-widget">
                  <h3 className="widget-title">Open Hours</h3>
                  <ul className="timetable">
                    <li>Sat - Fri 9:00 - 23:00</li>
                    <li>Open daily to serve you!</li>
                  </ul>
                </div>
              </div>

              <div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
                <div className="footer-widget contacts-widget">
                  <h3 className="widget-title">Contact</h3>
                  <div className="text">
                    Gulshan 2 Circle, Near The Westin Dhaka.
                  </div>
                  <ul className="contact-info">
                    <li>
                      <Link
                        className="text-style-two"
                        href="tel:+8801891450300"
                      >
                        +8801891450300
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-style-one"
                        href="mailto:yourmail@company.com"
                      >
                        vipspadhaka@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">
                &copy; 2024 Vip Spa Dhaka. All Rights Reserved.
                <Link href="https://softstok.com/"> Developed by SoftStok</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
