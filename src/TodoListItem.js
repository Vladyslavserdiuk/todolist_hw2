import React, {useState} from 'react';


function TodoListItem(props) {

    const {el, updateTodo, markTodo, index, moveUp} = props;
    const [updatedTitle, setUpdatedTitle] = useState(el.title);
    const [editMode, setEditMode] = useState(false)
    const style = el.done === true ? {'textDecoration': 'line-through'} : null


    const editButtonHandler = () => {
        updateTodo(updatedTitle, el.id)
        setEditMode(false)
        setUpdatedTitle("")
    }
    const changeEditMode = () => {
        setEditMode(!editMode)
    }


    return (
        <div>
            <li style={style}>
                {editMode ? (
                    <>
                        <input
                            value={updatedTitle}
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                        />
                        <button onClick={editButtonHandler}>Save</button>
                    </>
                ) : (
                    <>
                        <input type="checkbox" checked={el.done} onClick={() => markTodo(el.id)}/>
                        {el.title}
                        <button onClick={() => props.deleteTodo(el.id)}>Delete</button>
                        <button disabled={!index} onClick={() => moveUp(index)}>↑</button>
                        <button>↓</button>
                    </>
                )}
                <button onClick={changeEditMode}>Edit</button>
            </li>

        </div>
    );
}

export default TodoListItem;
