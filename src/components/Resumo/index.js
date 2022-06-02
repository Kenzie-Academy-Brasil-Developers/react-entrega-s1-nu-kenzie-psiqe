import './style.css'

function Resumo() {

  function filter(e){
    const ul = document.querySelector('.list--filter')
    const list = [...ul.children]
    list.forEach(element => {
      element.classList.remove(true)
      if(element === e.target){
        e.target.classList.add(true)
      }
    });
  }

  return(
    <>
      <div className="cont--resumo">
        <div className="cont--name">
          <p>Resumo financeiro</p>
        </div>
        <div>
          <ul className="list--filter">
            <li  onClick={filter} className="item--filter true">Todos</li>
            <li  onClick={filter} className="item--filter " >Entradas</li>
            <li  onClick={filter} className="item--filter  " >Saídas</li>
          </ul>
        </div>
      </div>
    </>
  )

}

export default Resumo