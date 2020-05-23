import React, { Component } from "react";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HorizontalSplitOutlinedIcon from '@material-ui/icons/HorizontalSplitOutlined';
import { Link } from "react-router-dom";
export default class NavBtn extends Component {
  render() {
    return (
      <div className="nav-btns">
        
        
          <Link to="/login" onClick={this.logout}>
          <AccountCircleOutlinedIcon fontSize="large"/>
          </Link> 
       
         
          <Link to="/login" className="aside-btn">
          <HorizontalSplitOutlinedIcon className="fa fa-bars" fontSize="large"/>
          </Link> 
 
      
        <button className="aside-btn">
          <i className="fa fa-bars"></i>
        </button>

        <button type="submit" className="search-btn">
          <i className="fa fa-search"></i>
        </button>
        
        <div id="nav-search">
          <form>
            <input
              className="input"
              name="search"
              placeholder="Enter your search..."
            />
          </form>
          <button className="nav-close search-close">
            <span></span>
          </button>
        </div>
      </div>
    );
  }
}
