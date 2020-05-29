import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";

//actions
import * as userActions from "../../redux/User/UserActions";

class UserInfo extends Component {
  state = {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry" +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500" +
      "when an unknown printer took a galley of type and scrambled it to make a",
  };

  componentDidMount() {
    this.props.actions.getUser(this.props.userId);
  }

  render() {
    return (
      <div>
        {this.props.user.map((user) => (
          <div key={user.id} className="row">
            {/*img*/}
            <div className="col-sm-2">
              <div className="text-center">
                <img
                  src={
                    API + "userImage/" + user.imageName
                  } /*src={this.props.imagePath}*/
                  /*src={require("../user-register-container/profileImage.jpg")}*/ className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
              </div>
            </div>
            {/*img*/}

            {/*info*/}
            <div className="col-sm-9">
              <form className="form">
                <div className="form-group">
                  <div className="col-xs-6">
                    <div className="row">
                      <div className="col-sm-10">
                        <h1>{user.firstName + " " + user.lastName}</h1>

                     

                        {localStorage.getItem("userId") === user.id ? (
                          <Link
                            to={"/userUpdate/" + localStorage.getItem("userId")}
                          >
                            <IconButton
                              color="secondary"
                              size="medium"
                              aria-label="upload picture"
                              component="span"
                            >
                              <SettingsIcon />
                              Ayarlar
                            </IconButton>
                          </Link>
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/*info*/}
          </div>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    // user: state.UserInfoReducer,
    user: state.UserListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUser: bindActionCreators(userActions.getUser, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
