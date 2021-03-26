import React from 'react'

function DisplayTask(props){

return(
     
       <li>{props.curelement}
       <button className="btn2" onClick={()=>{props.deleteTask(props.id)}}>Delete Task</button>
       </li>
     

       )
}

export default DisplayTask;

