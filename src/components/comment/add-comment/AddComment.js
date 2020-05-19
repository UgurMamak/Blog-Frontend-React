import React, { Component } from "react";
export default class AddComment extends Component {
  render() {
    return (
      <div className="section-row">
        <div className="section-title">
          <h3 className="title">Yorum Yaz</h3>
        </div>
        <form className="post-reply">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="input"
                  name="message"
                  placeholder="Mesaj"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-md-12">
              <button className="primary-button">Gönder</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
