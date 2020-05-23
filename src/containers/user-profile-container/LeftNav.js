import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";



import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as userActions from "../../redux/User/UserActions";



class LeftNav extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ ...this.state, [anchor]: open });
  };

  list = (anchor) => (
    <div
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
      style={{"width":"250px"}}
      
    >
   
      <List>
        <ListItem button key={"denemekey"}>
          <ListItemIcon>
           <MailIcon fontSize="large"/>
          </ListItemIcon>
          <ListItemText primary={"label yazısı"}/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"denemekey"}>
          <ListItemIcon>
           <ExitToAppIcon fontSize="large"/>
          </ListItemIcon>
          <Link to="/login" onClick={this.logout}>Çıkış Yap</Link>        
        </ListItem>
      </List>
    </div>
  );


  logout=()=>{
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      this.props.actions.resetLoginState();
      return <Redirect to="/login" />;
  }


  render() {
    return (
      <div style={{"backgroundColor":"#ee4266"}}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button size="large" onClick={this.toggleDrawer(anchor, true)}>
              <MenuIcon color="primary" fontSize="large" />
            </Button>
            <Drawer
              anchor={anchor}
              open={this.state[anchor]}
              onClose={this.toggleDrawer(anchor, false)}
            >
              {this.list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
}



  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        resetLoginState: bindActionCreators(userActions.resetLogin, dispatch),
      },
    };
  }
  export default connect(null,mapDispatchToProps)(LeftNav);
  