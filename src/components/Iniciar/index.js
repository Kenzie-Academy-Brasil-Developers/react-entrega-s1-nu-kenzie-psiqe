import './style.css'

function Iniciar(props) {

  return(
    <div className="iniciar">
      <div className="cont--iniciar">
        <div className='first--cont'>
          <div>
            <div className='cont--logo'>
              <p className='logo--nu'>Nu</p>
              <span >Kenzie</span>
            </div>
          </div>
          <div>
            <p className='p--1'>Centralize o controle das suas finanças</p>
            <p className='p--2'>de forma rápida e segura</p>
          </div>
          <button className='btn--iniciar' onClick={props.Login}>Iniciar</button>
        </div>
        <div></div>
      </div>
    </div>
  )

}

export default Iniciar