
import React,{useState} from 'react'
import GetTask from './components/GetTask'
import DisplayTask from './components/DisplayTask'
import './App.css'

     function App() {
          const[item,setItem]=useState("");
          const[list,setList]=useState([]);
    
        const getItem =(event)=>{
          setItem(event.target.value)
        }

        const addItem=()=>{
          setList((olditem)=>{
           return [...olditem,item]
          })
             setItem("");
         }

        const deleteTask=(id)=>{
          setList((olditem)=>{
            return olditem.filter((curele,index)=>{
                   return index!==id
                   })

            })

        }

      return (
  
        <div className="App">
            <GetTask item={item} getItem={getItem} addItem={addItem}></GetTask>
            <div className="list">
               <ul>
                   {list.map((curelement,index)=>{
                     return <DisplayTask id={index} curelement={curelement} index={index} deleteTask={deleteTask}></DisplayTask>
                      })}
               </ul>
              </div>

        </div>
              
      );
  
     }

       export default App;
