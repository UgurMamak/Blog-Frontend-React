import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { API } from "../../helpers/api-config";
//actions
import * as userActions from "../../redux/User/UserActions";
//componenets
import ImageChoose from "./ImageChoose";

class Home extends Component {
  componentDidMount() {
    this.props.actions.getUser(localStorage.getItem("userId"));
  }
  state = {
    imageFile: null,
    imagePath: "",
    imageName: "",
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    control: false,
    controlMessage: "",
  };

  //Resim seç butonu
  handleFileUpload = async (event) => {
    this.setState({ imageFile: event.target.files[0] });
    this.setState({ imagePath: URL.createObjectURL(event.target.files[0]) });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({
      control: false,
      controlMessage: null,
    });
  };

  handleUpdate = async (event) => {
    event.preventDefault();
    this.props.user.forEach((item) => {
      this.state.imageName = item.imageName;
    });

    if (
      (this.state.password1 !== "" && this.state.password2 === "") ||
      (this.state.password1 === "" && this.state.password2 !== "")
    ) {
      this.setState({
        control: true,
        controlMessage: "Parola alanlarını eksik doldurdunuz.",
      });
    } else {
      if (this.state.password1 === this.state.password2) {
        const data = new FormData();
        data.append("imageName", this.state.imageName);
        data.append("image", this.state.imageFile);
        data.append("password", this.state.password1);
        data.append("email", this.state.email);
        data.append("Id", localStorage.getItem("userId"));
        data.append("firstName", this.state.firstName);
        data.append("lastName", this.state.lastName);
        this.props.actions.updateUser(data);
      } else {
        this.setState({
          control: true,
          controlMessage: "Parola alanalrı eşleşmedi",
        });
      }
    }
  };
  componentDidCatch()
  {
    console.log("hatav var")
  }

  goster() {
    return <div></div>;
  }

  render() {

    this.props.user!==null ?console.log(this.props.user.imageName):console.log("boş");
    this.setState({imageName:"deg"})
    return (
      <div>
        {this.props.user !== null ? (
          this.goster()
        ) : (
          <div>{console.log("Girmedi")}</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.UserListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUser: bindActionCreators(userActions.getUser, dispatch),
      //updateUser: bindActionCreators(userActions.updateUser, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
