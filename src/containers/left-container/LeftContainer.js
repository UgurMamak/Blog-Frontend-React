import React, { Component } from "react";
import { Link } from "react-router-dom";
//components
import CategoryWidget from "./CategoryWidget";
import Newsletter from "./newsletter"
import PopularPost from "../../components/popular-post/"
export default class LeftContainer extends Component {
  render() {
    return (
      <div>
     
     <Newsletter/>
        
        {/* social widget */}
        <div className="aside-widget">
          <div className="section-title">
            <h2 className="title">Social Media</h2>
          </div>
          <div className="social-widget">
            <ul>
              <li> 
                <a href="https://tr-tr.facebook.com/" target="_blank" className="social-facebook">
                  <i className="fa fa-facebook" />
                  <span>
                   
                    <br />
                    Takip et
                  </span> 
                </a>
              </li>
              <li>
                <a href="https://twitter.com/home" target="_blank" className="social-twitter">
                  <i className="fa fa-twitter" />
                  <span>
                    <br />
                 Takip et
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com.tr/webhp?tab=kw&authuser=0" target="_blank" className="social-google-plus">
                  <i className="fa fa-google-plus" />
                  <span>
                    5K
                    <br />
                  Takip et
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
        <PopularPost/> 
        {/* post widget */}
        {/* /post widget */}
      </div>
    );
  }
}
