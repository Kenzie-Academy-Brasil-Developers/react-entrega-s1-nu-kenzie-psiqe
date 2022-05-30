import './style.css';

function Header(props){
  return(
    <>
    <header className="cont--header">
      <div className='cont--logo'>
        <p className='logo--nu'>Nu</p>
        <p className='logo--kenzie'>Kenzie</p>
      </div>
      <button  onClick={props.Logout} className='btn--inicio'>
        Início
      </button>
    </header>
    </>
  )
}

export default Header