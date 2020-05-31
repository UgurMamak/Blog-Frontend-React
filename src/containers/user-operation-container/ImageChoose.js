import React, { Component } from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";




export default class ImageChoose extends Component {
  state = {
    fileName: "Resim Seç",
  };
  render() {
    return (
      <div >
        <div className="text-center">
          <img
            /*src={this.props.imagePath}*/ src={this.props.imagePath}
            className="avatar img-circle img-thumbnail"
            alt="avatar"
          />
          <h6>Resim güncellemek için </h6>

          <input
            accept="image/*"
            id="icon-button-file"
            onChange={this.props.handleFileUpload}
            style={{ display: "none" }}
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="secondary"
              size="medium"
              aria-label="upload picture"
              component="span"
            >
              <ImageIcon />
              {this.props.imageFile === null
                ? this.state.fileName
                : this.props.imageFile.name}
            </IconButton>
          </label>
        </div>
        <br />
        

        
      </div>
    );
  }
}
