import React, {useState} from 'react';
import { FiEdit } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import './css/TodoTask.css';

function TodoTask(props) {
    const { task, removeTask, handleOnEdit, handelOnCompleted } = props;
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(task.task);

    const handleEditChange = () => {
        setEdit (prev => !prev);
    }

    const handleTextChange = ({target}) => {
        const { value } = target;
        setText (value);
    }

    const handleEditClose = () => {
        setEdit (false);
        handleOnEdit({...task, task: text});
    }

    const completeTask = () => {
        const result = {...task};
        console.log(task.completed);
        result.completed = !result.completed;
        handelOnCompleted(result);
    }

    return(
        <div className={task.completed ? 'todo-task_completed' : 'todo-task'}>
            {!edit ? <div className='todo-task__task' key={task.id} onClick={completeTask}>{task.task}</div> : <textarea className='todo-task__edit' name="text" placeholder='Rename a task' value={text} onChange={handleTextChange} onBlur={handleEditClose} />}

            <div className='todo-task__btn'>
                <FiEdit className='todo-task__btn-edit' onClick={handleEditChange}/>
                <TiDelete className='todo-task__btn-delete' onClick={() => removeTask(task.id)} />
            </div>
        </div>
    );

    // return props.tasks.map( (task, index) => (
    //     <div key={index}>
    //         {!edit ? <div key={task.id}>{task.task}</div> : <input type="text" value={text} onChange={handleTextChange} onBlur={handleEditClose} />}
    //         {/* <div key={task.id}>{task.task}</div> */}
    //         <div>
    //             <FiEdit onClick={handleEditChange}/>
    //             <TiDelete onClick={() => props.removeTask(task.id)} />
    //         </div>
    //     </div>
    // ));
}

export default TodoTask;
