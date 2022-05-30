import './style.css'

import  Card  from "../Card";

function List(props){
  
  

  return ( 
    <>
      
        {props.listTransitions.map((transaction,index) => (
          
          <Card transaction={transaction} key={index} listTransitions={props.listTransitions} setListTransitions={props.setListTransitions} index={index} />
        ))}
      
    </>
    )
}

export default List