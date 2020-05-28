import React, { Component } from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";
//USER eklerken kullanılan component
export default class ImageChoose extends Component {
  state = {
    fileName: "Dosya Yükle",
  };
  render() {
    return (
      <div>
        <img
          src={this.props.imagePath}
          style={{ width: "200px", height: "200px" }}
          className="avatar img-circle img-thumbnail"
          alt="avatar"
        />
        <br />

        <div>
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
              {this.props.imagefile === null
                ? this.state.fileName
                : this.props.imagefile.name}
            </IconButton>
          </label>
        </div>
      </div>
    );
  }
}
