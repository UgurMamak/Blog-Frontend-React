import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as categoryActions from "../../../redux/category/CategoryActions";
import * as postCartActions from "../../../redux/cart/PostCartActions";
class VerticalNavbar extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
 
  state = {
    home: [
      { id: "1", cat: "Category page" },
      { id: "2", cat: "Post page" },
      { id: "3", cat: "Author page" },
      { id: "4", cat: "About Us" },
      { id: "5", cat: "Contacts" },
      { id: "6", cat: "Regular" },
    ],
  };

   //seçilen kategoriyi gönderme işlemi
   selectCategory(category) {
    this.props.actions.getCart(category.id); //seçilen kategoriye göre postcard listeleme işlemi
    this.props.actions.changeCategory(category.id);
  }

  render() { 
    return (
      <div id="nav-aside">
        <ul className="nav-aside-menu">
          <li>
          
            <Link to="/home">Anasayfa</Link>
          </li>
          <li className="has-dropdown">
            <a>Kategoriler</a>
            <ul className="dropdown">
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
          </li>

          <li>
      
            <Link to="/login">Giriş Yap</Link>
          </li>

          <li>
            <Link to="/register">Üye Ol</Link>
          </li>

          <li>
         
            <Link to="/contact">İletişim</Link>
          </li>
 
        </ul>
        <button className="nav-close nav-aside-close">
          <span></span>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.CategoryListReducer,
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

export default connect(mapStateToProps, mapDispatchToProps)(VerticalNavbar);
