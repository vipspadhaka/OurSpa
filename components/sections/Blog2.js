import Link from "next/link";
const Blog2 = ({ addClass }) => {
  return (
    <>
      <section className={`${addClass}`}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <figure className="image">
              <img src="images/icons/icon1.png" alt="Image" />
            </figure>
            <span className="sub-title">Blogs</span>
            <h2 className="words-slide-up text-split">News & Articles</h2>
          </div>
          <div className="row">
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src="images/resource/blogpost1.png" alt="Image" />
                      <img src="images/resource/blogpost1.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="news-details">Trending</Link>
                    </li>
                    <li className="date">Aug 20, 2023</li>
                  </ul>
                  <h4 className="title">
                    <Link href="news-details">
                      The Power of Oil Massage. A Path to Relaxation and
                      Wellness
                    </Link>
                  </h4>
                  <Link className="read-more" href="news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src="images/resource/blogpost2.png" alt="Image" />
                      <img src="images/resource/blogpost2.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="news-details">Trending</Link>
                    </li>
                    <li className="date">Aug 20, 2023</li>
                  </ul>
                  <h4 className="title">
                    <Link href="news-details">
                      Relax, Stretch, Heal, and Revitalize with Thai Massage
                    </Link>
                  </h4>
                  <Link className="read-more" href="news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-block col-lg-4 col-md-6 mb-0">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src="images/resource/blogpost3.png" alt="Image" />
                      <img src="images/resource/blogpost3.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href="news-details">Trending</Link>
                    </li>
                    <li className="date">Aug 20, 2023</li>
                  </ul>
                  <h4 className="title">
                    <Link href="news-details">
                      Special Massage. Tailored Treatments for Your Unique Needs
                    </Link>
                  </h4>
                  <Link className="read-more" href="news-details">
                    Read More <i className="icon fa-regular fa-angle-right"></i>
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
export default Blog2;
