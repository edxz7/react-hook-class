import React, {useState} from 'react'
import {MainStyles} from './MainStyles';

export default function Main() {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');
    const [tasks, setTasks] =useState([]);

    function addTask() {
        if(value){
            setCounter(counter+1);
            setTasks(prev=>[
                ...prev, value
            ])
            setValue('');
        }
    }

    function deleteTask(i) {
        setCounter(counter-1);
        const newTasks = tasks.filter((task, index) => index!== i);
        setTasks(newTasks);
    }



    return (
        <MainStyles>
            <h1>Todo App</h1>
            <div>
                <p>Tasks</p>
                <p>{counter}</p>
            </div>
            <ul >    
                {
                    tasks ? 
                    tasks.map((task,i) => (
                        <i  key={i} style={{display:'flex', justifyContent:'space-between'}}>
                            <p >{task}</p>
                            <p id="btn" onClick={() => deleteTask(i)}>X</p>
                        </i>
                    ))
                    :
                    <p>There aren't tasks in the todo list</p>
                }
            </ul>
            <form >
                <input type="text" placeholder="new task" value={value}
                onChange={(e) => setValue(e.target.value)} required/>
            </form>
            <button onClick={addTask}>Add task</button>
        </MainStyles>
    )
}
