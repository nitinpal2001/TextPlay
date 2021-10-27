import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { useState } from "react";
import Alert from "./Components/Alert";
import CustomMode from "./Components/CustomMode";

function App(props) {
  let customModeState=null;
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(31 31 31)";
      showAlert("Dark mode has been enabled", "success");
      
      // This is to change title frequently
      // setInterval(() => {
      //   document.title="TextUtils-download the APP";
      // }, 1000);
      // setInterval(() => {
      //   document.title="TextUtils-You have virus in your pc";
      // }, 1500);
      //   document.title="TextUtils-Home";
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has been enabled", "success");
    }
    
  };

  const toggleCustomMode = (cls) => {
    if (customModeState==cls) {
      bodyClassRemover();
      customModeState=null;
    }
    else{bodyClassRemover();    
    document.body.classList.add('bg-'+cls)
    document.getElementsByClassName("customMode")[0].style.border="2px solid white"
    document.getElementsByClassName("customMode")[1].style.border="2px solid white"
    document.getElementsByClassName("customMode")[2].style.border="2px solid white"
    document.getElementsByClassName("customMode")[3].style.border="2px solid white"
    document.getElementsByClassName("customMode")[4].style.border="2px solid white"
    customModeState=cls;
    }
  }
  const bodyClassRemover=(cls)=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }

  return (
    <>
      <Router>
      <Navbar
        title="TextPlay"
        aboutText="About me"
        mode={mode}
        toggleMode={toggleMode}
        
      />
      <Alert alert={alert}/>
      <CustomMode mode={mode} toggleCustomMode={toggleCustomMode}/>
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
      {/* "exact" is used to match the path exactly 
      ex-   users/   -component-1
      users/home   -component-2 
      If we dont use exact ,then it will render the same component-1*/}
          
          <Route exact path="/">     
          <Textform
          heading="Try TextPlay-Word Counter,Character Counter,Reading Time Calculator"
          mode={mode}
          showAlert={showAlert}
        />
          </Route>
      </Switch>
        
      </div>
      </Router>
    </>
  );
}

export default App;
