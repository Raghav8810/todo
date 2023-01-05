import React, {useState } from 'react'
import './App.css';

function TodoList() {
    
     const[activity , setActivity] = useState("");
     const [list ,setList] = useState([]);  
     function addActivity(){
        //   console.log("hello");
        //  setList([...list , activity]);
        //  console.log(list);
       setList((list) =>{
        const dataList = [...list, activity]
        console.log(dataList);
        setActivity('');
        return dataList;
      
       })

     }

     //remove
     function removeItem(i){
           const updateList = list.filter((elem , id) =>{
            return i!= id;
           })
           setList(updateList)
     }

     
  return (
      <>
         <div className='container'>
             <div className='header'>TODO LIST</div>
             <div className='inputLine'>
                 <input type="text" className='inputField' placeholder='Enter your Task here..' value={activity} onChange={ (e) => setActivity(e.target.value)}/>
                 <button onClick={addActivity} className="btn">Add Item</button>
             </div>
             <h3>Tasks you have to do here: </h3>
             {list != [] && list.map((data, i)=>{
                return(
                    <>
                      <p key={i}> 
                      <div className='w'>
                            <div className='listItem'>{i + 1}.{data}</div>
                           <div className='btn_item'> <button  className="btn2" onClick={ () =>removeItem(i)}>Delete</button></div>
                      </div>
                          
                      
                      </p>
                    </>
                )
             })}
         </div>
         
      </>
  )
}

export default TodoList;
