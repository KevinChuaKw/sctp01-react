import React from 'react';
import logo from './logo.svg';
import test_image from './test-image.jpeg'
// Being able to import 
import './style.css'

function App() {
   

  return (
    // Whatever JSX the component returns will be part of its view
    // There can only be 1 top level element 
    // Short cut for React.Fragment = <>
    <React.Fragment> 
      {/* The outer courly braces is a JavaScript expression, the inner courly braces is for the javascript object */}
      <h1 style ={{color:"red"}}>Hello World </h1>
      {/* To add a class to an element, we use the className attribute */}
      <p className="urgent" style={{fontFamily:"Ariel"}}>This is a paragraph</p>
      {/* require in a imaage from the directory relating to the image*/}
      <img style={{
        "width":"50%",
        "height":"300px"
      }} src = {require('./logo.svg').default}/>
      <img style={{
        "width":"50%",
        "height":"100px"
      }}src = {test_image}/>
    </React.Fragment>
    


    
  );
}

export default App;
