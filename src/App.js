import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() =>{
          setAlert(null);
        },1500);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title ='text-Dark Mode';
      /*setInterval(() => {
        document.title ='Text is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title ='Intall Text Now';
      }, 1500);*/
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title ='text-Light Mode';
    }
    
  }
  return (
    <>
<Navbar title="text" aboutText = "About Text" mode ={mode} toggleMode ={toggleMode}/>
<Alert alert= {alert}/>
<div className="container my-3">

          <Textform showAlert={showAlert} heading ="Enter the text to analyze below" mode ={mode}/>
</div>
{/* </Router> */}
    </>
  );
}

export default App;
