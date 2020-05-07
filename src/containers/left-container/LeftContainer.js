import React, { Component } from "react";

//components
import CategoryWidget from "./CategoryWidget";

export default class LeftContainer extends Component {
  render() {
    return (
      <div>
        {/* ad widget*/}
        <div className="aside-widget text-center">
          <a href="/" style={{ display: "inline-block", margin: "auto" }}>
            <img className="img-responsive" src="callie/img/ad-3.jpg" alt="" />
          </a>
        </div>
        {/* /ad widget */}
        {/* social widget */}
        <div className="aside-widget">
          <div className="section-title">
            <h2 className="title">Social Media</h2>
          </div>
          <div className="social-widget">
            <ul>
              <li>
                <a href="/" className="social-facebook">
                  <i className="fa fa-facebook" />
                  <span>
                    21.2K
                    <br />
                    Followers
                  </span>
                </a>
              </li>
              <li>
                <a href="/" className="social-twitter">
                  <i className="fa fa-twitter" />
                  <span>
                    10.2K
                    <br />
                    Followers
                  </span>
                </a>
              </li>
              <li>
                <a href="/" className="social-google-plus">
                  <i className="fa fa-google-plus" />
                  <span>
                    5K
                    <br />
                    Followers
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /social widget */}
        {/* category widget */}
       <CategoryWidget/>
        {/* /category widget */}
        {/* newsletter widget */}
        <div className="aside-widget">
          <div className="section-title">
            <h2 className="title">Newsletter</h2>
          </div>
          <div className="newsletter-widget">
            <form>
              <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
              <input
                className="input"
                name="newsletter"
                placeholder="Enter Your Email"
              />
              <button className="primary-button">Subscribe</button>
            </form>
          </div>
        </div>
        {/* /newsletter widget */}
        {/* post widget */}
        <div className="aside-widget">
          <div className="section-title">
            <h2 className="title">Popular Posts</h2>
          </div>
          {/* post */}
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html">
              <img src="callie/img/widget-3.jpg" alt="" />
            </a>
            <div className="post-body">
              <div className="post-category">
                <a href="category.html">Lifestyle</a>
              </div>
              <h3 className="post-title">
                <a href="blog-post.html">
                  Ne bonorum praesent cum, labitur persequeris definitionem quo
                  cu?
                </a>
              </h3>
            </div>
          </div>
          {/* /post */}
          {/* post */}
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html">
              <img src="callie/img/widget-2.jpg" alt="" />
            </a>
            <div className="post-body">
              <div className="post-category">
                <a href="category.html">Technology</a>
                <a href="category.html">Lifestyle</a>
              </div>
              <h3 className="post-title">
                <a href="blog-post.html">
                  Mel ut impetus suscipit tincidunt. Cum id ullum laboramus
                  persequeris.
                </a>
              </h3>
            </div>
          </div>
          {/* /post */}
          {/* post */}
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html">
              <img src="callie/img/widget-4.jpg" alt="" />
            </a>
            <div className="post-body">
              <div className="post-category">
                <a href="category.html">Health</a>
              </div>
              <h3 className="post-title">
                <a href="blog-post.html">
                  Postea senserit id eos, vivendo periculis ei qui
                </a>
              </h3>
            </div>
          </div>
          {/* /post */}
          {/* post */}
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html">
              <img src="callie/img/widget-5.jpg" alt="" />
            </a>
            <div className="post-body">
              <div className="post-category">
                <a href="category.html">Health</a>
                <a href="category.html">Lifestyle</a>
              </div>
              <h3 className="post-title">
                <a href="blog-post.html">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                </a>
              </h3>
            </div>
          </div>
          {/* /post */}
        </div>
        {/* /post widget */}
      </div>
    );
  }
}
