import React/*, {useState}*/ from 'react';
import TodoListItem from "./TodoListItem";


function TodoList(props) {

    const {deleteTodo, updateTodo, todoList, markTodo, moveUp, list} = props

    return (
        <div>
            {todoList.map((el, index) => {
                const isElemLast = index === list.length - 1
                return <TodoListItem
                    key={el.id}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    el={el}
                    index={index}
                    markTodo={markTodo}
                    moveUp={moveUp}
                    isElemLast={isElemLast}
                /> }
            )}

        </div>
    );
}

export default TodoList;
