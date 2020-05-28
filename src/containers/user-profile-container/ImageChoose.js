import React, { Component } from 'react'
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from '@material-ui/icons/Image';

export default class ImageChoose extends Component {

  state={
    fileName:"Resim Seç"
  }
    render() {  
        return ( 
            <div className="col-sm-3">
            <div className="text-center">              
              <img /*src={this.props.imagePath}*/ src={this.props.imagePath}  className="avatar img-circle img-thumbnail" alt="avatar" />
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
                {
                  this.props.imageFile===null ?this.state.fileName
                  :this.props.imageFile.name
                }
                
              </IconButton>
            </label>
            
            
            
            </div><br />
            <div className="panel panel-default">
              <div className="panel-heading">Website <i className="fa fa-link fa-1x" /></div>
              <div className="panel-body"><a href="http://bootnipets.com">bootnipets.com</a></div>
            </div>
            <ul className="list-group">
              <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x" /></li>
              <li className="list-group-item text-right"><span className="pull-left"><strong>Shares</strong></span> 125</li>
              <li className="list-group-item text-right"><span className="pull-left"><strong>Likes</strong></span> 13</li>
              <li className="list-group-item text-right"><span className="pull-left"><strong>Posts</strong></span> 37</li>
              <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> 78</li>
            </ul> 
            <div className="panel panel-default">
              <div className="panel-heading">Social Media</div>
              <div className="panel-body">
                <i className="fa fa-facebook fa-2x" /> <i className="fa fa-github fa-2x" /> <i className="fa fa-twitter fa-2x" /> <i className="fa fa-pinterest fa-2x" /> <i className="fa fa-google-plus fa-2x" />
              </div>
            </div>
          </div>
        )
    }
}
