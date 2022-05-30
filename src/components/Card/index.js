import "./style.css"

function Card(props){
    
  function deleteTransation(event){
    
    props.setListTransitions( props.listTransitions.filter((e) => {
      console.log(e.id)
      console.log(parseInt(event.target.id))
     return (e.id !== parseInt(event.target.id))
    }))
    console.log(props.listTransitions)

  }

  return (
    <>
      <li  className="unity--transation">
        {props.transaction.type === 'entrada' ? ( 
          <div className="cor--transation" style={{background: 'green'}}></div>
        ):(
          <div className="cor--transation" style={{background: 'red'}}></div>
        )}
        <div className="cont--description">
          <p>{props.transaction.description}</p>
          <span>{props.transaction.type}</span>
        </div>
        <div className="cont--price">
          <p>R$ {props.transaction.value}</p>
          <button id={`${props.index}`} onClick={deleteTransation} className="btn--remove--transation"></button>
        </div>

      </li>
    </>
  )
}

export default Card