import fetch from "cross-fetch";




export const PostWithUrlBody = async (url, bodyIn) => {
    var request =await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(bodyIn) // body data type must match "Content-Type" header
    });
    return request;
  };




  
  var bearer ="Bearer "+localStorage.getItem("token");
    
  


 
  export const GetWithUrl = async url => {
    var request =await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
    
      headers:{
        'Authorization':bearer,
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer" // no-referrer, *client
      //body: JSON.stringify(bodyIn), // body data type must match "Content-Type" header
    });
    return request;
  };


  export const PostWithUrlBodyImage = (url, bodyIn) => {
    var request = fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.  
      body: bodyIn // body data type must match "Content-Type" header
    });
    return request; 
  };