import React, { Component } from 'react'

export default class F1 extends Component {
    render() {
        return (
            <div className="col-md-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  
                </div>
                <p>Sosyal medya hesaplarımızı takip etmek için </p>
                <ul className="contact-social">
                  <li><a href="https://tr-tr.facebook.com/" target="_blank"  className="social-facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href="https://twitter.com/home" target="_blank" className="social-twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a  href="https://www.google.com.tr/webhp?tab=kw&authuser=0" target="_blank" className="social-google-plus"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="https://www.instagram.com/?hl=tr"target="_blank" className="social-instagram"><i className="fa fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
        )
    }
}
