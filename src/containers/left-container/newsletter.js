import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class newsletter extends Component {
  render() {
    return (
      <div>
        <div className="aside-widget">
          <div className="section-title">
            <h2 className="title">İLETİŞİM</h2>
          </div>
          <div className="newsletter-widget">
            <form>
              <p>Sizde postlar paylaşmak istiyorsanız CV'nizi iletin.</p>
              
             <Link to="/contact">
              <button className="primary-button">iletişim</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
