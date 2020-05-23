import React, { Component } from 'react'
//USER eklerken kullanılan component
export default class ImageChoose extends Component {
    render() {
        return (
           
               <div>
                 <img
                  src={this.props.imagePath
                }
                  style={{ width: "200px", height: "200px" }}
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <br/>
                <input
                  type="file"
                  onChange={this.props.handleFileUpload}
                  className="text-center center-block file-upload"
                />
                <br />
               </div>
        )
    }
}
