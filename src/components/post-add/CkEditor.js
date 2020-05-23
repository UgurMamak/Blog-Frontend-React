import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as editorActions from "../../redux/ckEditor/CkEditorActions";
class CkEditor extends Component {
    render() {
        return (
            <div className="App">                
                <CKEditor 
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }                    
                    onChange={ ( event, editor ) => {
                        
                        const data = editor.getData();
                        this.props.actions.editorContent(data);
                        //console.log( {  data } );
                    } }                                 
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
  export default connect(null,mapDispatchToProps)(CkEditor);