import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";
//actions
import * as postCartActions from "../../redux/cart/PostCartActions";
import * as categoryActions from "../../redux/category/CategoryActions";
class index extends Component {
  componentDidMount() {
    //this.props.actions.getPopularPost();
  }
  selectCategory(category) {
    this.props.actions.getCart(category.categoryId); //seçilen kategoriye göre postcard listeleme işlemi
    this.props.actions.changeCategory(category.categoryId);
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.props.actions.getPopularPost();
  }
 
  render() {
    return ( 
      <div>
        {console.log("populer", this.props.posts.popularposts)}
        <div className="aside-widget">
          <div className="section-title">
            <h2 className="title">Popüler postlar</h2>
          </div>
          {/*<Deneme posts={this.props.posts.popularposts} />*/}
          
          {this.props.posts.popularposts.map((post) => (
            <div key={ post.postId} className="post post-widget">
             
              <a className="post-img" href={"/PostDetail/" + post.postId}>
                <img src={API + "postImage/" + post.imageName} style={{"width":"130px", "height":"87px"}} alt="" />
              </a>
              <div className="post-body">
                <div className="post-category">
                  
                {post.postCategoryListDtos.map((pc) => (
                    <Link
                      key={pc.categoryId}
                      to={"/category/" + pc.categoryId}
                      onClick={() => this.selectCategory(pc)}
                    >
                      {pc.categoryName}
                      {"   "}
                    </Link>
                  ))} 
                </div>

                


                <h3 className="post-title">
                <a href={"/PostDetail/" + post.postId}>{post.title}</a>
                </h3> 
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.PopularPostReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPopularPost: bindActionCreators(
        postCartActions.getPopularPost,
        dispatch
      ),
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

export default connect(mapStateToProps, mapDispatchToProps)(index);
