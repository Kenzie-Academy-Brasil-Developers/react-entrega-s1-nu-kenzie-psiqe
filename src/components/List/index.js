import './style.css'

import  Card  from "../Card";

function List(props){
  const ul = document.querySelector('.list--filter')
  const list = [...ul.children]

console.log(list[0].classList.contains(true))
    
    /*function render(){}
    if(list[0].classList.contains(true)){
      console.log('todos')
    }else if(list[1].classList.contains(true)){
      console.log('Entradas')
    }else if(list[2].classList.contains(true)){
      console.log("Saídas")
    }*/
    
    
    return ( 
      <>
          {props.listTransitions.map((transaction,index) => (
            
            <Card transaction={transaction} key={index} listTransitions={props.listTransitions} setListTransitions={props.setListTransitions} index={index} />
          ))}
      </>
    )
   
}

export default List