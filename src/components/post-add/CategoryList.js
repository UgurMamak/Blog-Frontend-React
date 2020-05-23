import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import * as categoryActions from "../../redux/category/CategoryActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  render() {
    return (
      <Grid container>
        {console.log("burda", this.props.categories)}
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Paper style={{ textAlign: "center" }}>
            <FormGroup row>
              {this.props.categories.map((cat) => (
                <FormControlLabel
                  key={cat.id}
                  control={
                    <Checkbox
                      size="medium"
                      onChange={this.props.checkedChange}
                      name={cat.id}
                    />
                  }
                  label={cat.categoryName}
                />
              ))}
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.CkEditorReducer, // post ve put işlemi
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
