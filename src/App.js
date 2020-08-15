import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoController from "./TodoController";

function App() {

    const [list, setList] = useState([
        {id: 1, title: "First", done: false},
        {id: 2, title: "Second", done: false},
        {id: 3, title: "Third", done: false}
    ])

    const addNewTodo = (newTitle) => {
        const newTodo = {id: Math.random(), title: newTitle, done: false}
        const newList = [...list, newTodo]
        setList(newList)
    }

    const deleteTodo = (id) => {
        const newList = [...list].filter(el => el.id !== id)
        setList(newList)
    }

    const updateTodo = (newTitle, id) => {

        const newList = list.map((el) => {
            if (el.id === id) return {...el, title: newTitle}
            return el
        })
        setList(newList)
    }

    const markTodo = (id) => {
        const newList = list.map((el) => {
            if (el.id === id) return {...el, done: !el.done}
            return el
        })
        setList(newList)
    }

    const moveUp = (index) => {
        if (index === 0) return
        const newList = list.map((el, i) => {
            if (index === i) return list [index - 1]
            if (index - 1 === i) return list [index]
            return el
        })
        setList(newList)
    }


    return (
        <div className="App">
            <TodoController
                addNewTodo={addNewTodo}
            />
            <TodoList
                todoList={list}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                markTodo={markTodo}
                moveUp={moveUp}
            />

        </div>
    );
}

export default App;
