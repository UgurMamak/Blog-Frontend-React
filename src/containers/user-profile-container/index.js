import React, { Component } from "react";
//component
import UserPost from "./UserPost";
import UserInfo from "./UserInfo";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import SettingsIcon from "@material-ui/icons/Settings";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import LeftNav from "../../components/LeftNav/LeftNav";
import Pagination from "../../components/paginiton/Paginition";
import * as postCartActions from "../../redux/cart/PostCartActions";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Admin, Operator } from "../../helpers/role";
class index extends Component {
  //state = { tabValue: "1" };
  //Tab değişikliği işlemi
  changeTab = (event, newValue) => {
    this.setState({ tabValue: newValue });
    console.log("değr", this.state.tabValue);
  };

  onayBekleyen = () => {
    console.log("onay bekleyen");
    this.props.actions.getWaitConfirmPost(this.props.match.params.userId);
  };

  //adminin geçersiz yaptığı psotlar
  invalid = () => {
    console.log("gecersiz olan");
    this.props.actions.getInvalidPost(this.props.match.params.userId);
  };

  sharePost = () => {
    console.log("paylaşışan postlar");
    this.props.actions.getUserCart(this.props.match.params.userId);
  };

  constructor() {
    super();
    this.state = {
      pageOfItems: [],
      tabValue: "1",
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.props.actions.getUserCart(this.props.match.params.userId);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  
  renderAdminOrOwner() {
    return (
      <div className="container bootstrap snippet">
        {this.props.match.params.userId === localStorage.getItem("userId") ? (
          <LeftNav />
        ) : (
          <div />
        )}

        <br />
        <br />
        <UserInfo userId={this.props.match.params.userId} />
        <br />
        <br />
        <TabContext value={this.state.tabValue}>
          <div position="static">
            <TabList
              textColor="secondary"
              onChange={this.changeTab}
              aria-label="simple tabs example"
            >
              <Tab
                style={{ fontSize: "10px" }}
                label="Paylaştığın Postlar"
                icon={<CheckCircleIcon fontSize="large" />}
                value="1"
                onClick={this.sharePost}
              />
              <Tab
                style={{ fontSize: "10px" }}
                onClick={this.onayBekleyen}
                label="Onay Bekleyen Postların"
                value="2"
                icon={<HourglassEmptyIcon fontSize="large" />}
              />
              <Tab
                style={{ fontSize: "10px" }}
                onClick={this.invalid}
                label="Reddedilen postlar"
                value="3"
                icon={<CancelIcon fontSize="large" />}
              />
            </TabList>
          </div>

          <TabPanel value="1">
            <div className="row">
              <UserPost postList={this.state.pageOfItems} />
              <div className="col-md-12">
                <Pagination
                  items={this.props.cartReducer.cartList}
                  onChangePage={this.onChangePage}
                />
              </div>
            </div>
          </TabPanel>

          <TabPanel value="2">
            
            <div className="row">
              <UserPost postList={this.state.pageOfItems} />
              <div className="col-md-12">
                <Pagination
                  items={this.props.cartReducer.cartList}
                  onChangePage={this.onChangePage}
                />
              </div>
            </div>
          </TabPanel>

          <TabPanel value="3">
        
            <div className="row">
              <UserPost postList={this.state.pageOfItems} />
              <div className="col-md-12">
                <Pagination
                  items={this.props.cartReducer.cartList}
                  onChangePage={this.onChangePage}
                />
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    );
  }

  renderProfile() {
    return (
      <div className="container bootstrap snippet">
        {this.props.match.params.userId === localStorage.getItem("userId") ? (
          <LeftNav />
        ) : (
          <div />
        )}

        <br />
        <br />
        <UserInfo userId={this.props.match.params.userId} />
        <br />
        <br />
     
          

          
            <div className="row">
              <UserPost postList={this.state.pageOfItems} />
              <div className="col-md-12">
                <Pagination
                  items={this.props.cartReducer.cartList}
                  onChangePage={this.onChangePage}
                />
              </div>
            </div>
   
      </div>
    )
  }

  render() {
    return (
      <div>
        {(localStorage.getItem("userId") === this.props.match.params.userId && localStorage.getItem("role")===Operator ) ||
        localStorage.getItem("role") === Admin
          ? this.renderAdminOrOwner()
          : this.renderProfile()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cartReducer: state.PostCartListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUserCart: bindActionCreators(
        postCartActions.getUserPostCart,
        dispatch
      ),

      getWaitConfirmPost: bindActionCreators(
        postCartActions.getWaitConfirmPost,
        dispatch
      ),
      getInvalidPost: bindActionCreators(
        postCartActions.getInvalidPost,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
