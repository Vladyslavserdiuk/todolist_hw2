import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoController from "./TodoController";
import axios from "axios";

function App() {

    const [list, setList] = useState(
        []
        //     [
        //     {id: 1, title: "First", done: false},
        //     {id: 2, title: "Second", done: false},
        //     {id: 3, title: "Third", done: false}
        // ]
    );

    const addNewTodo = async (newTitle) => {
        await axios.post('http://localhost:5000/todo', {name: newTitle})
            .then(result => {
            })
            .catch(function (error) {
                console.log(error);
            })
        await axios.get('http://localhost:5000/todo')
            .then(result => {
                const listFromServer = result.data
                console.log(listFromServer)
                setList(listFromServer)
            })
            .catch(function (error) {
                console.log(error);
            })
        // const newTodo = {id: Math.random(), title: newTitle, done: false}
        // const newList = [...list, newTodo]
        // setList(newList)
    }

    const deleteTodo = async (todoId) => {
        // const newList = [...list].filter(el => el._id !== id)
        // setList(newList)
        await axios.delete(`http://localhost:5000/todo/${todoId}`,)
            .then(result => {
            })
            .catch(function (error) {
                console.log(error);
            })
        await axios.get('http://localhost:5000/todo')
            .then(result => {
                const listFromServer = result.data
                console.log(listFromServer)
                setList(listFromServer)
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    const updateTodo = (newTitle, id) => {

        const newList = list.map((el) => {
            if (el._id === id) return {...el, title: newTitle}
            return el
        })
        setList(newList)
    }

    const markTodo = (id) => {
        const newList = list.map((el) => {
            if (el._id === id) return {...el, done: !el.done}
            return el
        })
        setList(newList)
    }

    const moveUp = (currentElement, previousElement) => {
        if (previousElement < 0 || previousElement >= list.length) return
        const newList = list.map((el, i) => {
            if (currentElement === i) return list [previousElement]
            if (previousElement === i) return list [currentElement]
            return el;
        })
        setList(newList)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/todo')
            .then(result => {
                const listFromServer = result.data
                console.log(listFromServer)
                setList(listFromServer)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


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
                list={list}
            />

        </div>
    );
}

export default App;
