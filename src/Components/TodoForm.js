import React, {useState} from 'react';
import './css/TodoForm.css';

function TodoForm(props) {
    const [input, setInput] = useState ('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Date.now(),
            completed: false,
            task: input
        });

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
          <input className='todo-form__input' type='text' placeholder='enter task' value={input} onChange={handleChange} />
          <button className='todo-form__btn'>Add</button>
        </form>
    );
}

export default TodoForm;
