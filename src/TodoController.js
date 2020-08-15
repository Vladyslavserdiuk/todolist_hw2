import React, {useState} from 'react';


function TodoListItem(props) {

    const {addNewTodo} = props

    const [newTodo, setNewTodo] = useState("")

    const onCreate = () => {
        addNewTodo(newTodo)
        setNewTodo('')
    }



    return (
        <div>
            <input value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
            <button onClick={onCreate}>Create</button>

        </div>
    );
}

export default TodoListItem;
