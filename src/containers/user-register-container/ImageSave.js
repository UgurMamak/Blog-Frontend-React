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
        //Create a storage ref
        //var storageRef = firebase.storage().ref(path);
    
        //Upload file
        /*var task = storageRef.put(file);
    
        //Update progress
        task.on(
          "state_changed",
          function progress(snapshot) {
            let percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("File upload... ", percentage);
          },
          function error(err) {
            console.log("Error when uploading file", err);
          },
          function complete() {
            console.log("File upload completed on path: ");
            task.snapshot.ref.getDownloadURL().then(url => saveFunc(url));
          }
        );*/
      }; 

      kaydet()
      {
        const formData = new FormData()

        this.state.files.forEach((file, i) => {
          formData.append(i, file)
        })
    
        fetch('images', {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())

            /*
        .then(images => {
            this.setState({ 
              uploading: false,
              images
            })
          })
        */
      }

      

    
    



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
