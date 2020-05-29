import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as categoryActions from "../../redux/category/CategoryActions";
import * as postCartActions from "../../redux/cart/PostCartActions";

class CategoryWidget extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  //seçilen kategoriyi gönderme işlemi
  selectCategory(category) {
    this.props.actions.getCart(category.id); //seçilen kategoriye göre postcard listeleme işlemi
    this.props.actions.changeCategory(category.id);
  }

  render() {
    return (
      <div className="aside-widget">
        <div className="section-title">
          <h2 className="title">Kategoriler</h2>
        </div>
        <div className="category-widget">
          <ul>
            {this.props.categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={"/category/" + category.id}
                  onClick={() => this.selectCategory(category)}
                >
                  {category.categoryName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
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

      getCart: bindActionCreators(
        postCartActions.getPostCartCategory,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryWidget);
