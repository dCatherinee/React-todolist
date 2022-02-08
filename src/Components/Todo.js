import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoTask from './TodoTask';

function Todo() {
    const [tasks, setTasks] = useState([]);

    const addTask = todo => {
        const newTasks = [todo, ...tasks];
        console.log(newTasks);

        setTasks(newTasks);
    }

    const removeTask = id => {
        let removeTask = [...tasks].filter(task => task.id !== id);

        setTasks(removeTask);
    }

    const handelOnCompleted = (task) => {
        const result = tasks.map(tsk => tsk.id === task.id ? task : tsk);
        setTasks(result);
    }

    const handleOnEdit = (task) => {
        const result = tasks.map(tsk => tsk.id === task.id ? task : tsk);
        setTasks(result);
    }

    const renderTasks = (task) => {
        return(
            <TodoTask 
                key={task.id} 
                task={task}
                removeTask={removeTask}
                handleOnEdit={handleOnEdit}
                handelOnCompleted={handelOnCompleted}
            />
        )
    }

    return (
        <div>
            <TodoForm onSubmit={addTask}/>
            {tasks.map(renderTasks)}
            {/* <TodoTask tasks={tasks} removeTask={removeTask} /> */}
        </div>
    );
}

export default Todo;
