import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import  List  from './components/List';
import Header from './components/Header';
import Resumo from './components/Resumo';
import TotalMoney from './components/TotalMoney';
import ClearList from './components/ClearList';
import Iniciar from './components/Iniciar';


function App() {
  const [listTransitions, setListTransitions] = useState([])
  const [exitTransitions, setExitTransitions ] = useState([])
  const [inputTransitions, setInputTransitions ] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  function Login() { return setIsLoggedIn(true)  }

  function Logout(){ return setIsLoggedIn(false) }

  if(isLoggedIn === true){
  
    return (
      <div className="App">
        <header className="App-header">
          <div className='header'>
            <Header Logout={Logout}/>
          </div>
          <div className='body'>
          <div className='cont--transations'> 
            <Form  inputTransitions={inputTransitions} setInputTransitions={setInputTransitions} exitTransitions={exitTransitions} setExitTransitions={setExitTransitions} listTransitions={listTransitions} setListTransitions={setListTransitions}/>
            { listTransitions.length > 0 ? (
              <>
                <TotalMoney listTransitions={listTransitions}/>
              </>
            ) : (
              <>
              </>
            )}
          </div>
          <div className='cont--list'>
            
              <Resumo/>
           
            <ul className='list--transations' >
            { listTransitions.length > 0 ? (
              <>
                <List listTransitions={listTransitions} setListTransitions={setListTransitions}/>
              </>
            ) : (
              <>
                <ClearList/>
              </>
            )}
            </ul>
          </div>
          </div>
        </header>
      </div>
    );
  }else{
    return (
      <>
        <Iniciar Login={Login}/>
      </>
    )
  }
}

export default App;
