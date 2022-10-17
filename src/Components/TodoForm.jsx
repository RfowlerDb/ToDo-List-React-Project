import React, { useState, useEffect, useRef }  from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)



    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // gives each todo item a unique id and reduces the chances of using the same ID
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return(
        <form className="todo_form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Add a todo item'
            value= {input}
            name ="text"
            className='todo_input'
            onChange={handleChange}
            />
            <button className='todo_button'>Add Todo</button>
        </form>
        
    )
}

export default TodoForm