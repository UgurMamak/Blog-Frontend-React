import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as categoryActions from "../../../redux/category/CategoryActions";
import * as postCartActions from "../../../redux/cart/PostCartActions";



class NavigationBar extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  state = {};

  //seçilen kategoriyi gönderme işlemi
  selectCategory(category) {
    this.props.actions.getCart(category.id); //seçilen kategoriye göre postcard listeleme işlemi
    this.props.actions.changeCategory(category.id)
  }





  render() {
    return (
      <div id="nav-bottom">
        <div className="container">
          <ul className="nav-menu">
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li id="nav2" className="has-dropdown">
              <Link to={""}>Kategoriler</Link>

              <div className="dropdown">
                <div className="dropdown-body">
                  <ul className="dropdown-list">
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
            </li>

            <li>
              <Link to="/contact">İletişim</Link>
            </li>

            <li id="nav2" className="has-dropdown">
              {/*<a href="/login">Giriş Yap</a>*/}
              <Link to="/login">Giriş Yap</Link>
              <div className="dropdown">
                <div className="dropdown-body">
                  <ul className="dropdown-list">
                    <li>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/register">Üye Ol</Link>
            </li>
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
      changeCategory: bindActionCreators(categoryActions.changeCategory,dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
