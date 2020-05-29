import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class F4 extends Component {
    render() {
        return (
            <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="footer-title">iletişim</h3>
              <div className="newsletter-widget">
                <form>
                  <p>Bilgi almak için sosyal medya hesaplarımızı takip edebilirsiniz veya mail atabilirsiniz.</p>            
                  <Link to="/contact">
                  <button className="primary-button">İletişim</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        )
    } 
}
