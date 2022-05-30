import './App.css';
import { useState } from 'react';
import Transations from './components/Form';
import  List  from './components/List';
import Header from './components/Header';
import Resumo from './components/Resumo';
import TotalMoney from './components/TotalMoney';
import ClearList from './components/ClearList';
import Iniciar from './components/Iniciar';


function App() {
  const [listTransitions, setListTransitions] = useState([])

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  function Login(){
    return setIsLoggedIn(true)
  }

  function Logout(){
    return setIsLoggedIn(false)
  }

  if(isLoggedIn === true){
  
    return (
      <div className="App">
        <header className="App-header">
          <div className='header'>
            <Header Logout={Logout}/>
          </div>
          <div className='body'>
          <div className='cont--transations'> 
            <Transations listTransitions={listTransitions} setListTransitions={setListTransitions}/>
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
            <div>
              <Resumo/>
            </div>
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
