import React/*, {useState}*/ from 'react';
import TodoListItem from "./TodoListItem";


function TodoList(props) {

    const {deleteTodo, updateTodo, todoList, markTodo, moveUp} = props

    return (
        <div>
            {todoList.map((el, index) =>
                <TodoListItem
                    key={el.id}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    el={el}
                    index={index}
                    markTodo={markTodo}
                    moveUp={moveUp}
                />
            )}


        </div>
    );
}

export default TodoList;
