import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Navbarh from './components/Navbarh'
import Textform from './components/textform'
import About from './components/about'
import Alert from './components/alert'
import PropTypes from 'prop-types';

import './App.css'

let name=<b>jagriti</b>;
function App() {
  const[mode,setMode]=useState('light');
const toggleMode=()=>
{
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor="grey";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
  }

}
  return (
    <>
   <Navbarh title="pehchano" karname="konhume" mode={mode} togglemode={toggleMode}/>
<Alert  alert="jaldi niklo yha se"/>
<Navbar/>
<Textform mode={mode} />
<About/>
    </>
  )
}

export default App
