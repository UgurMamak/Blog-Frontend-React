import React, { Component } from 'react'

export default class F1 extends Component {
    render() {
        return (
            <div className="col-md-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html" className="logo"><img src={require("../../images/logo-alt.png")}  alt="" /></a>
                </div>
                <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
                <ul className="contact-social">
                  <li><a href="/" className="social-facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href="/" className="social-twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a href="/" className="social-google-plus"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="/" className="social-instagram"><i className="fa fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
        )
    }
}
