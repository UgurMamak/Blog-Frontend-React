import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { API } from "../../helpers/api-config";

//actions
import * as userActions from "../../redux/User/UserActions";
 
//componenets
import ImageChoose from "./ImageChoose";

class Home2 extends Component {
  
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

  /*
  constructor(props) {
    super(props);
    //this.handleUpdate = this.handleUpdate.bind(this);
    this.props.actions.getUser(localStorage.getItem("userId"));
  }
  */

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

 // handleUpdate(event){
  handleUpdate=(event)=>{
    //event.preventDefault(); 
    //console.log("BUTON TIKLANINCA",this.props.user);
    this.props.user.forEach((item) => {
      this.state.imageName = item.imageName;
     // console.log(item);
    });

    if (
      (this.state.password1 !== "" && this.state.password2 === "") ||
      (this.state.password1 === "" && this.state.password2 !== "")
    ) {
      event.preventDefault();
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
        console.log("eski", this.props.user);
        this.props.actions.updateUser(data);
        console.log("yeni", this.props.user);
      } else {
        event.preventDefault();
        this.setState({
          control: true,
          controlMessage: "Parola alanları eşleşmedi",
        });
      }
    }
    this.props.actions.getUser(localStorage.getItem("userId"));
    
  }

  render() {
    return (
      <div style={{}}>
        {console.log("USER BİLGİSİ",this.props.user)}
        {console.log("update", this.props.updateUser)}
        {this.props.user.map((user) => (
          <div key={user.id} className="container bootstrap snippet">
            <div className="row">
              <div className="col-sm-10">
                <h1>{user.firstName + "  " + user.lastName}</h1>
              </div>
            </div>
            <div className="row">
              <ImageChoose
                handleFileUpload={this.handleFileUpload}
                imageFile={this.state.imageFile}
                imagePath={
                  this.state.imagePath === ""
                    ? API + "userImage/" + user.imageName
                    : this.state.imagePath
                }
              />
              <div className="col-sm-9">
                {/*Mesaj*/}
                {this.state.control === true ? (
                  <div
                    data-validate={this.state.controlMessage}
                    className="wrap-input100 alert-validate"
                  />
                ) : (
                  <div className="wrap-input100" />
                )}
                {/*Mesaj*/}
                <hr />
                <form className="form">
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="first_name">
                        <h4>Ad</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="first name"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="last_name">
                        <h4>Soyad</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="last name"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="email">
                        <h4>Email</h4>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="you@email.com"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="password">
                        <h4>Paralo</h4>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password1"
                        placeholder="password"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="password2">
                        <h4>Parola Tekrar</h4>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password2"
                        id="password2"
                        placeholder="password2"
                        title="enter your password2."
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group"></div>
                  <div className="col-xs-3">
                    <br />
                    <button
                      className="login100-form-btn"
                      onClick={this.handleUpdate}
                    >
                      Güncelle
                    </button>
                  </div>
                </form>
                <hr />

                {/*/tab-pane*/}

                {/*/tab-pane*/}
              </div>
              {/*/tab-content*/}
            </div>
            {/*/col-9*/}
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.UserListReducer,
    updateUser: state.UpdateUserReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUser: bindActionCreators(userActions.getUser, dispatch),
      updateUser: bindActionCreators(userActions.updateUser, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home2);
