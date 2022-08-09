import React,{ useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// let name = "Harry";
// we cannot bold using this let name = "<b>harry</b>";
// It will render as it is
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#05112dde';
      showAlert("Dark Mode has been Enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* props */}

      {/* <Router> */}
      <Navbar title="TextUtils" about=" About Us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      {/* <Navbar /> */}

      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert = {showAlert} heading="Enter the text to analyse below" mode={mode}/>
          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
        
    </>
  );
}

export default App;
