import './style.css';


function Transations(props){
  
  const onSubmit = (e) => {
    e.preventDefault();
    const data = { 
      id: props.listTransitions.length ,
      description: e.target.elements.description.value,
      type: e.target.elements.type.value,
      value: e.target.elements.value.value
    }
    props.setListTransitions([...props.listTransitions, data])
    
  }

  return (
    <>
      <form onSubmit={onSubmit} >
        <div className="form--transations">
          <div className='cont--grid--1'>
            <p>Descrição</p>
            <input type="text" name="description" placeholder='Digite aqui sua descrição' required></input>
            <span>Ex: Compra de roupas</span>
          </div>
          
          <div className='cont--grid--2'>
            <div>
              <p>Valor</p>
              <div className='cont--valor'>
                <input type="number" name="value" required></input>
                <div className='coin'></div>
              </div>
            </div>
            <div>
              <p>Tipo de valor</p>
              <select name='type' >             
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
            </div>
          </div>
          <div><button className='btn--transation' type="submit">Swap</button></div>
        </div>
      </form>
    </>
  )
}

export default Transations