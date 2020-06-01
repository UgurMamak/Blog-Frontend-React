import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor2 from "ckeditor4-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as editorActions from "../../redux/ckEditor/CkEditorActions";
class CkEditor extends Component {
    constructor( props ) {
		super( props );

		this.state = {
			data:""
		};

		this.handleChange = this.handleChange.bind( this );
		this.onEditorChange = this.onEditorChange.bind( this );
	}

    onEditorChange( evt ) {
		this.setState( {
			data: evt.editor.getData()
        } );
        this.props.actions.editorContent(this.state.data);
        console.log("dene",this.state.data);
    }
    handleChange( changeEvent ) {
		this.setState( {
			data: changeEvent.target.value
		} );
	}
  render() {
    return (
      <div className="App">
        {/* <CKEditor 
                    editor={ ClassicEditor }
                    data={this.props.data}
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }                    
                    onChange={ ( event, editor ) => {
                        
                        const data = editor.getData();
                        this.props.actions.editorContent(data);
                        //console.log( {  data } );
                    } }                                 
                />*/}
        <CKEditor2
         data={this.props.data}
         onChange={this.onEditorChange}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      editorContent: bindActionCreators(editorActions.EditorContent, dispatch),
    },
  };
}
export default connect(null, mapDispatchToProps)(CkEditor);
