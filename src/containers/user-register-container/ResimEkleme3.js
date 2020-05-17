import React, { Component } from 'react'

export default class ResimEkleme3 extends Component {

    state={imageFile:null,imagePath:null}

    handleFileUpload = async event => {
         this.setState({ imageFile:event.target.files[0] }); 
         this.setState({ imagePath: URL.createObjectURL(event.target.files[0]) });    
       };

    uploadImage = async event => {
        
        const data = new FormData()
        data.append('image', this.state.imageFile)
        const res = await fetch(
      '	https://localhost:44332/deneme/uploadfile3',
      {
        method: 'POST',
        body: data
      }
      
    )
 //   event.preventDefault();

    }
    render() {
        return (
            <div>
            
              <input
                type="file"
                className="form-control"
                aria-describedby="basic-addon1"
                accept="image/png, image/jpeg"
                onChange={this.handleFileUpload}
              />
              <img
                style={{ width: "200px", height: "200px" }}
                accept="image/x-png,image/gif,image/jpeg"
                src={this.state.imagePath}
              />
    
              
              <button onClick={this.uploadImage}>Kaydet</button>
            
          </div>
        )
    }
}
