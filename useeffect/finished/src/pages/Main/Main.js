import React, { useState, useEffect } from 'react';
import {MainStyles} from './MainStyles';
///use effect is equivalent to 
/// three react life cycle methods:
/// componentDidMount     Immediatly after the first rendering
/// componentDidUpdate    After component's updates are reflected in the DOM 
/// componentWillUnmount  Immediatly before removing component from the DOM (ex. Routing)
const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');
    const [counter, setCounter] =useState(0);
    
    const addTask = () => {
        if(value){
            setTasks(prevTasks => [
                ...prevTasks, value
            ])
        setCounter(counter+1);
        setValue('');
        }
    }
    const deleteTask = (index) => {
        const newTasks = tasks.filter((_,i) => i !== index)
        setCounter(counter-1);
        setTasks(newTasks);
    }

    // componentDidMount() {
    //     document.title = `You added ${counter} tasks`;
    // }

    // componentDidUpdate(){
    //     document.title = `You added ${counter} tasks`;
    // }
    useEffect(()=>{
        document.title = `You added ${counter} tasks`;
        console.log('update document title')
    },[counter])

        return (
            <MainStyles>

            <h1>Todo App</h1>
            <div>
                <p>Tasks</p>
                <p>{counter}</p>
            </div>
            <ul >    
                {
                    tasks.map((task,i) => (
                        <i  key={i} style={{display:'flex', justifyContent:'space-between'}}>
                            <p >{task}</p>
                            <p id="btn" onClick={() => deleteTask(i)}>X</p>
                        </i>
                    ))
                }
            </ul>
            <form >
                <input id="task" type="text" placeholder="new task" value={value}
                onChange={(e) => setValue(e.target.value)} required/>
            </form>
            <button onClick={addTask}>Add task</button>
            </MainStyles>
        )
    
}

export default Main;
 