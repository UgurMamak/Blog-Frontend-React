import React, { Component } from 'react'

export default class ImageChoose extends Component {
    render() {
        return (
           
                <div className="login100-pic" data-tilt>                     
                  <img
                    style={{ width: "250px", height: "250px" }}
                    accept="image/x-png,image/gif,image/jpeg"
                    src={this.props.imagePath}
                  />
                  <input
                      type="file"
                      className="form-control"
                      aria-describedby="basic-addon1"
                      accept="image/png, image/jpeg"
                      onChange={this.props.handleFileUpload}
                    />
                    </div>
        )
    }
}
