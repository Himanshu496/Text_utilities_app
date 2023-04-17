import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return ( 
    <>
      <Navbar title = "Text Utilities" aboutText="About Text" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}></Alert>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
      </div>
    </>
  )
}

export default App;
