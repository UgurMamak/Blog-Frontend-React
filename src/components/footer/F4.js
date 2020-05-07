import React, { Component } from 'react'

export default class F4 extends Component {
    render() {
        return (
            <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="footer-title">Newsletter</h3>
              <div className="newsletter-widget">
                <form>
                  <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
                  <input className="input" name="newsletter" placeholder="Enter Your Email" />
                  <button className="primary-button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        )
    }
}
