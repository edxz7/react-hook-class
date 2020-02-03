import React, { Component } from 'react';
import {MainStyles} from './MainStyles';
///use effect is equivalent to 
/// three react life cycle methods:
/// componentDidMount     Immediatly after the first rendering
/// componentDidUpdate    After component's updates are reflected in the DOM 
/// componentWillUnmount  Immediatly before removing component from the DOM (ex. Routing)
export default class Main extends Component {
    state = {
        counter:0,
        tasks:[],
        task:''
    }

    setValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }
    addTask = () => {
        if(this.state.task){
            this.setState(prevState => ({
                ...prevState,
                counter:this.state.counter+1,
                tasks:[...prevState.tasks, this.state.task],
                task:''
            }))
        }
    }

    deleteTask = (index) => {
        const newTasks = this.state.tasks.filter((_,i) => i !== index)
        this.setState({
            counter:this.state.counter -1,
            tasks:newTasks,
        })
    }

    componentDidMount(){
        document.title = `You added ${this.state.counter} tasks`;
    }

    componentDidUpdate(){
        document.title = `You added ${this.state.counter} tasks`;
    }
    render() {
        return (
            <MainStyles>

            <h1>Todo App</h1>
            <div>
                <p>Tasks</p>
                <p>{this.state.counter}</p>
            </div>
            <ul >    
                {
                    this.state.tasks.map((task,i) => (
                        <i  key={i} style={{display:'flex', justifyContent:'space-between'}}>
                            <p >{task}</p>
                            <p id="btn" onClick={() => this.deleteTask(i)}>X</p>
                        </i>
                    ))
                }
            </ul>
            <form >
                <input id="task" type="text" placeholder="new task" value={this.state.task}
                onChange={(e) => this.setValue(e)} required/>
            </form>
            <button onClick={this.addTask}>Add task</button>
            </MainStyles>
        )
    }
}
 