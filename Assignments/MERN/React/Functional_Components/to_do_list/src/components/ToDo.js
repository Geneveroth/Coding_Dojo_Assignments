import React, {useState} from 'react';
import looks from  './ToDo.module.css';
import { findAllByAltText } from '@testing-library/react';

const Task = (props)=>{
    const [newTask, setNewTask] =useState('');
    const [list, setList] =useState([]);

    const clickHandler=(e)=>{
        e.preventDefault();
        const addedTask = {task: newTask, complete: false};
        setList([...list, addedTask]);
        setNewTask('');
    }
    const handleCheck=(idx)=>{
      console.log(list);
        list[idx].complete = !list[idx].complete
        setList ([...list]);
    }
      
    function deleteTask(idx) {
        console.log(idx);
        const incompleteTasks = list.filter((_, i) =>i !== idx)
        setList(incompleteTasks);
    }
    return (
        <>
        <form onSubmit = {clickHandler}>
            <input  onChange={(e) => setNewTask(e.target.value)} value={newTask} />
            <button type='submit'>Add</button>
        </form>
        <div>
            {list.map((taskItem, idx) => {
                return(
                    <div key={idx}>
                        {
                            <div >
                                <h4 style={{ textDecoration: taskItem.complete ? 'line-through':'none'}}>{taskItem.task}</h4>
                            </div>
                        }
                        <button onClick = {()=>deleteTask(idx)} >Delete</button>
                        <input type='checkbox' onClick = {(e) => handleCheck(idx)}/> 
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default Task
