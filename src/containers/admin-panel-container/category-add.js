import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
//actions
import * as categoryActions from "../../redux/category/CategoryActions";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class CategoryAdd extends Component {
  state = {
    categoryName: "",
    open: false,
    control: false,
    controlMessage: "", 
  };
  handleSave = (event) => {
    if (this.state.categoryName !== "") {
      this.props.actions.saveCategory({
        categoryName: this.state.categoryName,
      });
      this.props.actions.getCategories();
      this.setState({ open: true });
      window.location.reload();
    } else {
      this.setState({ control: true, controlMessage: "Boş Bırakmayınız." });
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleClose = (event, reason) => {
    this.props.actions.getCategories();
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Paper>
          <span className="login100-form-title">
            <b>Kategori Ekle</b>
          </span>
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={4} style={{ textAlign: "center" }}>
              
                {this.state.control === true ? (
                  <div
                    data-validate={this.state.controlMessage}
                    className="wrap-input100 alert-validate"
                  />
                ) : (
                  <div className="wrap-input100" />
                )}

                {/*****MESAJ*****/}
                {this.props.categoryReducer.categoryStatus
                  .successfulCategory === 1 ? (
                  <Snackbar
                    style={{ width: "400px", fontSize: "20px" }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                  >
                    <Alert onClose={this.handleClose} severity="success">
                      Kategori Başarıyla Eklendi.
                    </Alert>
                  </Snackbar>
                ) : (
                  <div />
                )}

                {this.props.categoryReducer.categoryStatus
                  .successfulCategory === 0 ? (
                  <div
                    data-validate={this.props.categoryReducer.message}
                    className="wrap-input100 alert-validate"
                  />
                ) : (
                  <div className="wrap-input100" />
                )}
                {/*****MESAJ*****/}
                <br />
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="categoryName"
                    onChange={this.handleChange}
                    placeholder="Kategori Ekle..."
                  />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-font" aria-hidden="true" />
                  </span>
                </div>
                <div>
                  <button
                    className="login100-form-btn"
                    onClick={this.handleSave}
                  >
                    KATEGORi EKLE
                  </button>
                </div>
            
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.CategoryListReducer, //kategorileri listelemek için
    categoryReducer: state.CategorySaveReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      saveCategory: bindActionCreators(categoryActions.saveCategory, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdd);
