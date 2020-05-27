import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as contactActions from "../../redux/contact/ContactActions";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Redirect, Link } from "react-router-dom";
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class ContactForm extends Component {
  state = {
    name: "",
    subject: "",
    mail: "",
    content: "",
    file: null,
    control: false,
    controlMessage: "",
    fileName: "Dosya Yükle",
    open: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFileUpload = async (event) => {
    console.log("geldi");
    this.setState({ file: event.target.files[0] });
    this.setState({ fileName: event.target.files[0].name });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
    window.location.reload();
  };

  handleSave = async (event) => {
    if (
      this.state.mail !== "" &&
      (this.state.subject !== "") & (this.state.name !== "")
    ) {
      const data = new FormData();
      data.append("name", this.state.name);
      data.append("mail", this.state.mail);
      data.append("subject", this.state.subject);
      data.append("content", this.state.content);
      data.append("file", this.state.file);
      this.props.actions.createMail(data);
      this.setState({ open: true });
    } else {
      this.setState({
        control: true,
        controlMessage: "!!!Değerleri boş bırakmayınız.!!!",
      });
    }
    event.preventDefault();
  };

  render() {
    return (
      <div className="renk" style={{ textAlign: "center" }}>
        {console.log("reducer", this.props.contact.contactStatus)}
        <Grid container spacing={3}>
          <Grid item xs />
          <Grid item xs={3} style={{ textAlign: "center" }}>
          <span className="login100-form-title">
                <b>İLETİŞİM</b>
              </span>
            {/*************Mesaj******************/}
        
            {this.state.control === true ? (
              <div
                data-validate={this.state.controlMessage}
                className="wrap-input100 alert-validate"
              />
            ) : (
              <div className="wrap-input100" />
            )}
            <br />
            {this.props.contact.contactStatus.successfulContact === 0 ? (
              <div
                data-validate={this.props.contact.contacStatus.message}
                className="wrap-input100 alert-validate"
              />
            ) : (
              <div />
            )}

            {this.props.contact.contactStatus.successfulContact === 1 ? (
              <Snackbar
                open={this.state.open}
                autoHideDuration={2000}
                onClose={this.handleClose}
              >
                <Alert
                  style={{ width: "400px", fontSize: "20px" }}
                  onClose={this.handleClose}
                  severity="success"
                >
                  Mailiniz iletildi
                </Alert>
              </Snackbar>
            ) : (
              <div />
            )}

            {/*************Mesaj End******************/}
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder="Adınız ve Soyadınız..."
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-font" aria-hidden="true" />
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="text"
                name="mail"
                onChange={this.handleChange}
                placeholder="mail adresi"
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-font" aria-hidden="true" />
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="text"
                name="subject"
                onChange={this.handleChange}
                placeholder="Mesaj Başlığı..."
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-font" aria-hidden="true" />
              </span>
            </div>

            <input
              accept="image/*"
              id="icon-button-file"
              onChange={this.handleFileUpload}
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
                <DescriptionIcon />
                {this.state.fileName}
              </IconButton>
            </label>
          </Grid>
          <Grid item xs />
        </Grid>

        {/*TextArea*/}
        <Grid container spacing={3}>
          <Grid item xs />
          <Grid item xs={6} style={{ textAlign: "center" }}>
            <div className="form-group">
              <textarea
                className="input"
                name="content"
                id="content"
                placeholder="Mesaj"
                onChange={this.handleChange}
                defaultValue={""}
              />
            </div>
          </Grid>
          <Grid item xs />
        </Grid>
        {/*TextArea*/}

        {/*Buton*/}
        <Grid container spacing={3}>
          <Grid item xs />
          <Grid item xs={2} style={{ textAlign: "center" }}>
            <div className="container-login100-form-btn">
              <button
                className="login100-form-btn"
                onClick={this.handleSave}
                type="submit"
              >
                Gönder
              </button>
            </div>
          </Grid>
          <Grid item xs />
        </Grid>
        {/*Buton*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.ContactReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createMail: bindActionCreators(contactActions.createMail, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
