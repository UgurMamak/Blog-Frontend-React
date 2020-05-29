import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel"; 
import ReactHtmlParser from "react-html-parser";
import {Admin,Operator, User} from "../../helpers/role" 
//actions
//import * as editorActions from "../../redux/ckEditor/CkEditorActions";
import * as postActions from "../../redux/post/postActions";
import * as categoryActions from "../../redux/category/CategoryActions";

//components
import CkEditor from "./CkEditor";
import ImageChoose from "./ImageChoose";
import CategoryList from "./CategoryList";
import LeftNav from "../LeftNav/LeftNav";
import Preview from "./preview";
import NotFound from "../common/Error404"
import SettingsIcon from '@material-ui/icons/Settings';
class index extends Component {
  state = {
    imageFile: null,
    imagePath: null,
    control: false,
    controlMessage: null,
    title: "",
    categoryList: [],

    tabValue: "1", 
    categoryNameList:[]
  };

  //Tab değişikliği işlemi
  changeTab = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };

  //Resim seç butonu
  handleFileUpload = async (event) => {
    this.setState({ imageFile: event.target.files[0] });
    this.setState({ imagePath: URL.createObjectURL(event.target.files[0]) });
  };

  //text input
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({
      fillAreasError: false,
      control: false,
      controlMessage: null,
    });
  };

  //Kaydet butonu
  handleSave = async (event) => {
    if (
      this.state.title !== "" &&
      this.props.content.content !== "" &&
      this.state.imageFile !== null &&
      this.state.categoryList.length !== 0
    ) {
      var birlestir = "";
      this.state.categoryList.forEach(
        (item) => (birlestir = birlestir + item.categoryId + "*")
      );
      const data = new FormData();
      data.append("title", this.state.title);
      data.append("content", this.props.content.content);
      data.append("userId", localStorage.getItem("userId"));
      data.append("categoryId", birlestir);
      data.append("image", this.state.imageFile);
      this.props.actions.savePost(data);
      window.location.reload();
    } else {
      console.log("boş alan bırakmayın");
    }
  };

  //Kategorilerin kontrolleri
  checkedChange = async (event) => {
    if (event.target.checked) {
      //true gelirse yeni veri ekleencek
      this.state.categoryList.push({ categoryId: event.target.name });
    } //false gelirse silecek
    else {
      var data = await this.state.categoryList.filter(
        (w) => w.categoryId !== event.target.name
      );
      this.setState({ categoryList: data });
    }
  };
  render() {

    if(localStorage.getItem("role")===User)
    {
      return <NotFound/>
    } 
    return (
      <div>
        <LeftNav />

        <TabContext value={this.state.tabValue}>
          <div position="static">
            <TabList onChange={this.changeTab} aria-label="simple tabs example">
              <Tab label="Post Ekle" icon={<SettingsIcon/>} value="1" />
              <Tab label="Önizleme" value="2" />
            </TabList>
          </div>

          <TabPanel value="1">
            <Grid container spacing={3}>
              <Grid item xs={12} />
              <span className="login100-form-title">
                <b>POST EKLE</b>
              </span>
              <ImageChoose
                handleFileUpload={this.handleFileUpload}
                imageFile={this.state.imageFile}
                imagePath={this.state.imagePath}
              />

              <CategoryList checkedChange={this.checkedChange} />
 
              {/*Title*/}
              <Grid item xs={4} />
              <Grid item xs={4}>
                <div style={{ textAlign: "center" }}>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Password is required"
                  >
                    <input
                      className="input100"
                      type="text"
                      name="title"
                      onChange={this.handleChange}
                      placeholder="Başlığı giriniz."
                    />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="fa fa-font" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4} />
              {/*Title*/}

              {/*Editor*/}
              <Grid item xs={1} />
              <Grid item xs={10}>
                <Paper style={{ textAlign: "center" }}>
                  <div className="wrap-input100 validate-input">
                    <CkEditor className="input100" />
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={1} />
              {/*Editor*/}

              {/*Buton*/}
              <Grid item xs={5} />
              <Grid item xs={2}>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <button
                      className="login100-form-btn"
                      onClick={this.handleSave}
                      type="submit"
                    >
                      Kaydet
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={5} />
              {/*Buton*/}
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            {" "}
            {"içerik buraya "}
          </TabPanel>
        </TabContext>
        <Preview categoryList={this.state.categoryList} title={this.state.title} imagePath={this.state.imagePath} />{" "}

      </div>
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
      savePost: bindActionCreators(postActions.savePost, dispatch),
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
