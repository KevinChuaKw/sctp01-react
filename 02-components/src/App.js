import ImageFrame from "./imageFrame";
import test from "./test.jpeg"; 

function sayGoodbye() {
  return "Bye Bye";
}

function displayHeader() {
  return <h1>About Me</h1>
}

// a component in React
// 1. is a function
// 2. first alphabet of the function name must be upper case
// 3. returns JSX
// 4. Because components are functions, they can receive parameters
//    You can add the parameter via the props
// 5. Props are key value pairs in the props object

function Alert(props) {
  return <div style={{
    backgroundColor: props.bgColor,
    padding: "10px",
    margin: "5px",
    borderRadius:"10px"
  }}>{props.msg}</div>
}

const Footer = () => <p>(C) 2023</p>

const f = <p>Foobar</p> 

function Shout(props){
  return <div>{props.msg.toUpperCase()}</div>
}



function App() {
  return (
      <>
      <ImageFrame img={(test)} alt="Nice House"/>

      <h1>{sayGoodbye()}</h1>

      {displayHeader()}
      <Alert msg="AWAS AWAS" bgColor="red"/>

      <Alert msg="Yay checking out" bgColor="green"/>
      <Footer/>
      {f}
      <Shout msg="I can do a component"/>
      </>
  );
}

export default App;
