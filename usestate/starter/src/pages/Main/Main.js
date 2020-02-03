// import React from 'react'
import {MainStyles} from './MainStyles';

import React, { useState } from 'react'

const Main = () => {

    const [counter, setCounter] = useState(0);
    const [tasks, setTasks]     = useState([]);
    const [value, setValue]     = useState('');

    const add = () =>  setCounter(counter + 1)

    const rest = () => setCounter(counter - 1)

    const addTask = () =>{
        setTasks(prevTasks =>[
            ...prevTasks, value
        ])
        setValue('')

    }

    const removeTask = (index) =>{
        const newTasks = tasks.filter((task, i) => i!==index)
        setTasks(newTasks)
    }
        return (
            <MainStyles>
                <h1>Todo</h1>
                <p>{counter}</p>
                <button onClick={rest}>-</button>
                <button onClick={ add }>+</button>
                <ul>
                    {
                        tasks.map((task, index) => (
                            <li key={index} style={{display:'flex', justifyContent:'space-between'}}> 
                                <p>{task}</p>
                                <p onClick={()=> removeTask(index)}>X</p>
                            </li>
                        ))
                    }
                </ul>

                <input id="task" 
                    type="text" 
                    placeholder='add a new task' 
                    value={value} 
                    onChange={e => setValue(e.target.value)} 
                />
                <button onClick={addTask}>Add a new task</button>


            </MainStyles>
        )
}

export default Main;

// export default function Main() {

//     return (
//         <MainStyles>


//         </MainStyles>
//     )
// }














