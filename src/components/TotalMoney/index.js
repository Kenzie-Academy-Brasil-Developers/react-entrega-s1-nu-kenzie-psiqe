import './style.css'

function TotalMoney(props){
  return (
    <>
      <div className="cont--totalMoney">
        <div className="cont--valorTotal">
          <p>Valor total:</p>
          <span>O valor se refere ao saldo</span>
        </div>
        <div className="cont--valor">
          <span>
            R$ {props.listTransitions.reduce( (acc,cur, index) => (
                props.listTransitions[index].type === 'entrada' ? (
                  parseInt(acc) + parseInt(cur.value)
                ):(
                  parseInt(acc) - parseInt(cur.value)
                )  
               ),0)}
          </span>
        </div>
      </div>
    </>
  )

}

export default TotalMoney