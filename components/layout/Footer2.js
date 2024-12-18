import Link from "next/link";
import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MAILCHIMP_URL =
  "https://vipspadhaka.us11.list-manage.com/subscribe/post?u=19e0f014feb1c0ca56ef62997&id=9ceccb6c7d&f_id=0042f3e1f0";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({
        EMAIL: email,
      });
    }
  };

  // Handle different statuses
  if (status === "sending") {
    return <div>Sending...</div>;
  }
  if (status === "error") {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: message }}
        style={{ color: "red" }}
      />
    );
  }
  if (status === "success") {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: message }}
        style={{ color: "#c1a64d" }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          name="EMAIL"
          className="email"
          placeholder="Enter Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="theme-btn">
          <span className="btn-title">
            <i className="fa-sharp fa-thin fa-paper-plane"></i>
          </span>
        </button>
      </div>
    </form>
  );
};

export default function Footer2() {
  const handleOnSubmitted = () => {
    alert("Thank you for subscribing!");
  };

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
              {/* About Widget */}
              <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <Link href="/">
                      <img src="/images/logo-2.png" alt="Vip Spa Dhaka Logo" />
                    </Link>
                  </div>
                  <div className="text">
                    Receive the latest updates, special packages, and wellness
                    tips straight to your inbox.
                  </div>
                  {/* Mailchimp Subscription Form */}
                  <div className="subscribe-form">
                    <MailchimpSubscribe
                      url={MAILCHIMP_URL}
                      render={({ subscribe, status, message }) => (
                        <CustomForm
                          status={status}
                          message={message}
                          onValidated={(formData) => {
                            subscribe(formData);
                            if (status === "success") {
                              handleOnSubmitted();
                            }
                          }}
                        />
                      )}
                    />
                  </div>
                  {/* Social Icons */}
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

              {/* Links Widget */}
              <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6">
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

              {/* Timetable Widget */}
              <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="footer-widget timetable-widget">
                  <h3 className="widget-title">Open Hours</h3>
                  <ul className="timetable">
                    <li>Sat - Fri 9:00 - 23:00</li>
                    <li>Open daily to serve you!</li>
                  </ul>
                </div>
              </div>

              {/* Contacts Widget */}
              <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6">
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
                        href="mailto:vipspadhaka@gmail.com"
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

        {/* Footer Bottom */}
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
