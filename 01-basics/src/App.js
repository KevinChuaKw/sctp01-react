import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    // Whatever JSX the component returns will be part of its view
    // There can only be 1 top level element 
    // Short cut for React.Fragment = <>
    <React.Fragment> 
      <h1>
        Hello World
      </h1>
      <p>
        This is a paragraph
      </p>
    </React.Fragment>
    
  );
}

export default App;
