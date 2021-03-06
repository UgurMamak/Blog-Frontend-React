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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Admin, User, Operator } from "../../helpers/role";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import PeopleIcon from '@material-ui/icons/People';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
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
      style={{ width: "250px" }}
    >
      <List>
        <ListItem button key={""}>
          <Link to={"/profile/" + localStorage.getItem("userId")}>
            <ListItemIcon>
              <PersonIcon fontSize="large" />
            </ListItemIcon>
            Profil Sayfası
          </Link>
        </ListItem>
        {localStorage.getItem("role") === Admin ||
        localStorage.getItem("role") === Operator ? (
          <div>
            <ListItem button key={"postadd"}>
              <Link to="/PostAdd">
                <ListItemIcon>
                  <AddIcon  fontSize="large" />
                </ListItemIcon>
                Post Ekle
              </Link>
            </ListItem>
          </div>
        ) : (
          <div />
        )}

        {localStorage.getItem("role") === Admin ? (
          <div>
            <ListItem button key={"confirmpost"}>
              <Link to="/confirmPostPage">
                <ListItemIcon>
                  <HourglassEmptyIcon fontSize="large" />
                </ListItemIcon>
                Onay Bekleyen Postlar
              </Link>
            </ListItem>

            <ListItem button key={"adminregister"}>
              <Link to="/AdminRegister">
                <ListItemIcon>
                  <GroupAddIcon  fontSize="large" />
                </ListItemIcon>
                Üye Ekle
              </Link>
            </ListItem>

            <ListItem button key={"kategori"}>
              <Link to="/categoryOperation">
                <ListItemIcon>
                  <SpellcheckIcon fontSize="large" />
                </ListItemIcon>
                Kategori İşlemleri
              </Link>
            </ListItem>

            <ListItem button key={"user"}>
              <Link to="/alluser">
                <ListItemIcon>
                  <PeopleIcon fontSize="large" />
                </ListItemIcon>
                Kayıtlı Kulanıcılar
              </Link>
            </ListItem>

          </div>
        ) : (
          <div />
        )}
        <Divider />
        <ListItem button key={"denemekey"}>
          <Link to="" onClick={this.logout}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="large" />
            </ListItemIcon>
            Çıkış Yap
          </Link>
        </ListItem>
      </List>
    </div>
  );

  logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    this.props.actions.resetLoginState();
    //setAuthorizationToken(false);

    return <Redirect to="/login" />;
  };

  render() {
    return (
      <div style={{ backgroundColor: "#ee4266" }}>
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
export default connect(null, mapDispatchToProps)(LeftNav);
