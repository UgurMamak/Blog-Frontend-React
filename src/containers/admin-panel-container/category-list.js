import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as categoryActions from "../../redux/category/CategoryActions";
//component
import SelectBox from "./category-select-box";

class CategoryList extends Component {
  state = {
    selectedValue: "",
    open: false,
    control: false,
  };
  changeSelect = (event) => {
    this.setState({ selectedValue: event.target.value });
  };
  closeSelect = () => {
    this.setState({ open: false });
  };

  openSelect = () => {
    this.props.actions.getCategories();
    this.setState({ open: true });
  };

  handleDelete = () => {
    if (this.state.selectedValue !== "") {
      this.props.actions.deleteCategory({ id: this.state.selectedValue });
      this.props.actions.getCategories();
      window.location.reload();
      //this.setState({control:true});
    } else {
      console.log("kategori boş");
    }
  };

  componentDidMount() {
    // this.props.actions.getCategories();
  }
  render() {
    return (
      <Paper>
        {console.log("categorler", this.props.categories)}
        <span className="login100-form-title">
          <b>Kategori Sil</b>
        </span>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
           
              <form>
                <SelectBox
                  changeSelect={this.changeSelect}
                  openSelect={this.openSelect}
                  open={this.state.open}
                  selectedValue={this.state.selectedValue}
                  closeSelect={this.closeSelect}
                  categoryItems={this.props.categories}
                />

                <div>
                  <button
                    className="login100-form-btn"
                    onClick={this.handleDelete}
                  >
                    KATEGORi Sil
                  </button>
                </div>
              </form>
            
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Paper>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.CategoryListReducer, //kategorileri listelemek için
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      deleteCategory: bindActionCreators(
        categoryActions.deleteCategory,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
