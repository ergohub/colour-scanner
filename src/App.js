import React from 'react';
import Header from './components/Header/Header';
import Imagefield from './components/Imagefield/Imagefield';
import Imageholder from './components/Imageholder/Imageholder';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

const returnClarifaiRequestOptions = (imageUrl) => {
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'e560d7245bf846e18f84f3f90fb41615';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'dm3rg0';       
const APP_ID = 'colour-scan';
// Change these to whatever model and image URL you want to use
// const MODEL_ID = 'color-recognition';
// const MODEL_VERSION_ID = 'dd9458324b4b45c2be1a7ba84d27cd04';    
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

return requestOptions;

}

class App extends React.Component {

constructor() {
  super();
  this.state = {
    imageUrl : '',
    colours: []
  }
}

setColourSelection = (colours) => {
  this.setState({colours:colours})
  console.log(colours);
}

onButtonSubmit=()=> {
  console.log('Button Clicked');
  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id

  fetch("https://api.clarifai.com/v2/models/color-recognition/outputs", returnClarifaiRequestOptions(this.state.imageUrl))
  .then(response => response.json())
  .then(response => {
    const colours = response.outputs[0].data.colors

    const selection = [];

    colours.forEach((colour) => {
        const colourPick = colour.w3c.hex
        selection.push(colourPick)
      });
      this.setColourSelection(selection)
      // this.setState({colours:selection});
      // console.log(selection);
    })
    // .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

onInputChange = (event) => {
  this.setState({imageUrl:event.target.value})
}

  render() {
    return (
      <>
        <Header />
        <Imageholder 
          imageUrl={ this.state.imageUrl } 
          colours={ this.selection }
          />
        <Imagefield 
          onInputChange={ this.onInputChange } 
          onButtonSubmit={ this.onButtonSubmit }
        />
      </>
    );
  }
}

export default App;
