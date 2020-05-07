import React, { Component } from 'react'
import { generateLinkWithName } from "./link-generator";
export default class ImageSave extends Component {

     state={yol:null,deger:null,images: []}

     saveUrl = url => {
        this.setState({ imgSource: url,files:null });
      };
      
      handleFileUpload = (event, saveFunc) => {
        //Get file
        const file = event.target.files[0];
        this.state.files = Array.from(event.target.files);
        const path = "images/" + generateLinkWithName(file.name); //gideceği alanı tutar.

        this.state.deger=path;//kopyalama işlemi için yol bilgisi(kopyalanacağı alan için)
        this.setState({yol:URL.createObjectURL(file)}) //ben ekledim resim göstermek için
        console.log(this.state.yol);
      }; 


    render() {
        return (
            <div>
                 <input
                type="file"
                className="form-control"
                aria-describedby="basic-addon1"
                accept="image/png, image/jpeg"
                onChange={event => this.handleFileUpload(event, this.saveUrl)}
              />
              <img style={{"width":"200px", "height":"200px"}} accept="image/x-png,image/gif,image/jpeg" src={this.state.yol} />
              
                {console.log(this.state.files)}
                
                <button onClick={()=>this.kaydet()} >Kaydet</button>
            
            </div>
        )
    }
}
