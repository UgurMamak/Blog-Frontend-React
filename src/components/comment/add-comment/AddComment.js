import React, { Component } from 'react'

export default class AddComment extends Component {
    render() {
        return (
         
        <div className="section-row">
        <div className="section-title">
          <h3 className="title">Leave a reply</h3>
        </div>
        <form className="post-reply">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="input"
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  name="website"
                  placeholder="Website"
                />
              </div>
            </div>
            <div className="col-md-12">
              <button className="primary-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
     
        )
    }
}
