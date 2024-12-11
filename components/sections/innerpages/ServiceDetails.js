import Link from "next/link";
import { useState } from "react";
const ServiceDetails = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section class="services-details">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4">
              <div class="service-sidebar">
                <div class="sidebar-widget service-sidebar-single">
                  <div class="sidebar-service-list">
                    <ul>
                      <li>
                        <Link href="page-service-details" class="current">
                          <i class="fas fa-angle-right"></i>
                          <span>Deep Massage</span>
                        </Link>
                      </li>
                      <li class="current">
                        <Link href="page-service-details">
                          <i class="fas fa-angle-right"></i>
                          <span>Facial Treatments</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i class="fas fa-angle-right"></i>
                          <span>Body Treatments</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i class="fas fa-angle-right"></i>
                          <span>Nail Care</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i class="fas fa-angle-right"></i>
                          <span>Body Glow & Wraps</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i class="fas fa-angle-right"></i>
                          <span>Hair Salon</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div class="service-details-help">
                    <div class="help-shape-1"></div>
                    <div class="help-shape-2"></div>
                    <h2 class="help-title">
                      Contact with <br /> us for any <br /> advice
                    </h2>
                    <div class="help-icon">
                      <span class=" lnr-icon-phone-handset"></span>
                    </div>
                    <div class="help-contact">
                      <p>Need help? Talk to an expert</p>
                      <Link href="tel:12463330079">
                        +892 ( 123 ) 112 - 9999
                      </Link>
                    </div>
                  </div>

                  <div class="sidebar-widget service-sidebar-single mt-4">
                    <div
                      class="service-sidebar-single-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                      data-wow-duration="1200m"
                    >
                      <Link href="#" class="theme-btn btn-style-one d-grid">
                        <span class="btn-title">
                          <span class="fas fa-file-pdf"></span> download pdf
                          file
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-8 col-lg-8">
              <div class="services-details__content">
                <img src="images/resource/service-details.jpg" alt="" />
                <h3 class="mt-4">Service Overview</h3>
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing.
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the ndustry standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make{" "}
                </p>
                <p>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged Lorem ipsum dolor sit amet
                  consec tetur adipis icing elit{" "}
                </p>
                <div class="content mt-40">
                  <div class="text">
                    <h3>Service Center</h3>
                    <p>
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo.
                    </p>
                    <blockquote class="blockquote-one">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicing
                      elit sed do eiusmod remaining essentially unchanged Lorem
                      ipsum dolor sit amet consec tetur
                    </blockquote>
                  </div>
                  <div class="feature-list mt-4">
                    <div class="row clearfix">
                      <div class="col-lg-6 col-md-6 col-sm-12 column">
                        <img
                          class="mb-3"
                          src="images/resource/service-d1.jpg"
                          alt="images"
                        />
                        <p>
                          Lorem ipsum dolor sit amet consec adipis elit Dolor
                          repellat pariatur temporibus doloribus hic conse
                          quatur copy typing refreshing
                        </p>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 column">
                        <img
                          class="mb-3"
                          src="images/resource/service-d2.jpg"
                          alt="images"
                        />
                        <p>
                          Lorem ipsum dolor sit amet consec adipis elit Dolor
                          repellat pariatur temporibus doloribus hic conse
                          quatur copy typing refreshing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" mt-25">
                  <h3>Frequently Asked Question</h3>
                  <p>
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo.
                  </p>
                  <ul class="accordion-box wow fadeInRight">
                    <li class="accordion block">
                      <div
                        className={
                          isActive.key == 1 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleClick(1)}
                      >
                        Is my technology allowed on tech?
                        <div class="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={
                          isActive.key == 1
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div class="content">
                          <div class="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="accordion block">
                      <div
                        className={
                          isActive.key == 2 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleClick(2)}
                      >
                        How to soft launch your business?
                        <div class="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={
                          isActive.key == 2
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div class="content">
                          <div class="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="accordion block">
                      <div
                        className={
                          isActive.key == 3 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleClick(3)}
                      >
                        How to turn visitors into contributors
                        <div class="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={
                          isActive.key == 3
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div class="content">
                          <div class="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="accordion block">
                      <div
                        className={
                          isActive.key == 4 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleClick(4)}
                      >
                        How can i find my solutions?
                        <div class="icon fa fa-plus"></div>
                      </div>
                      <div
                        className={
                          isActive.key == 4
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div class="content">
                          <div class="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceDetails;
