import React from 'react'

   function GetTask(props){
      return(
         <div className="header">
           <h1>To Do List</h1>
              <input className="input-text"type="text" placeholder="Add an Item..." onChange={props.getItem} value={props.item}></input>
                  <button className="add-btn" onClick={props.addItem}>ADD TASK</button>
         </div>

      )

    }

     export default GetTask;

