import React, { Component } from 'react'

export default class F2 extends Component {
    render() {
        return (
            <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="footer-title">Categories</h3>
              <div className="category-widget">
                <ul>
                  <li><a href="/">Lifestyle <span>451</span></a></li>
                  <li><a href="/">Fashion <span>230</span></a></li>
                  <li><a href="/">Technology <span>40</span></a></li>
                  <li><a href="/">Travel <span>38</span></a></li>
                  <li><a href="/">Health <span>24</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}
