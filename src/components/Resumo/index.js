import './style.css'

function Resumo() {

  function filter(){
    
  }

  return(
    <>
      <div className="cont--resumo">
        <div className="cont--name">
          <p>Resumo financeiro</p>
        </div>
        <div>
          <ul className="list--filter">
            <li  onClick={filter} className="item--filter">Todos</li>
            <li   className="item--filter" >Entradas</li>
            <li   className="item--filter" >Saídas</li>
          </ul>
        </div>
      </div>
    </>
  )

}

export default Resumo