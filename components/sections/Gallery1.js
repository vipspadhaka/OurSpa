import Link from "next/link";
const Gallery1 = () => {
  return (
    <>
      <section className="gallery-section">
        <div className="outer-box">
          <div className="row">
            <div className="col-xl-6">
              <div className="row">
                <div className="gallery-block col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link
                          className="lightbox-image"
                          href="images/resource/galleryimg3.jpg"
                        >
                          <img
                            src="images/resource/galleryimg3.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                      <Link className="icon" href="page-gallery">
                        <i className="fa-sharp fa-light fa-eye"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="gallery-block col-sm-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link
                          className="lightbox-image"
                          href="images/resource/ralexingmen.jpg"
                        >
                          <img
                            src="images/resource/ralexingmen.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                      <Link className="icon" href="page-gallery">
                        <i className="fa-sharp fa-light fa-eye"></i>
                      </Link>
                    </div>
                    <div className="image-box">
                      <figure className="image">
                        <Link
                          className="lightbox-image"
                          href="images/resource/gellaryimage4.jpg"
                        >
                          <img
                            src="images/resource/gellaryimage4.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                      <Link className="icon" href="page-gallery">
                        <i className="fa-sharp fa-light fa-eye"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-block col-xl-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link
                      className="lightbox-image"
                      href="images/resource/gellary-img3.jpg"
                    >
                      <img src="images/resource/gellary-img3.jpg" alt="Image" />
                    </Link>
                  </figure>
                  <Link className="icon" href="page-gallery">
                    <i className="fa-sharp fa-light fa-eye"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery1;
