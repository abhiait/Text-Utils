import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';

import {
  // BrowserRouter as Router,
  Switch,
  Route,
  
 } from "react-router-dom";
import About from './ComponentsOfReactApp/About';
import Alert from './ComponentsOfReactApp/Alert';
import Maincontainer from './ComponentsOfReactApp/Maincontainer';
import NavBar from './ComponentsOfReactApp/NavBar';

function App() {

  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2500);

  }
  

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = "black"
      showAlert("Dark Mode Enabled", "success")
      document.title= 'TextUtils- DarkMode'
    }else{
      setMode ('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enabled", "success")
      document.title= 'TextUtils'
    }

  }

  return (
    // <Router>
    <HashRouter>
          <>
          
          <NavBar titleText='TextUtils' mode={mode} toggleMode={toggleMode} aboutText='About'/>
         
          <Alert alert={alert}/>
          
          <div className="container my-5">
              <Switch>
                  <Route exact path="/about">
                    <About mode={mode}/>
                    
                  </Route>          
                  <Route exact path="/"> 
                  <Maincontainer heading='Enter your Text below to Analyse' showAlert={showAlert} mode={mode}/> 
                            
                  </Route>
              </Switch>
            
              {/* <About/> */}
          </div>
          </>
          </HashRouter>
  /*  </Router> */
   
  );
}

export default App;
