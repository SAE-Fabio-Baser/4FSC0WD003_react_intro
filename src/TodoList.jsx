import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

function TodoListItem(props) {
    return (
        <div className="flex">
            <h2 className="grow">{props.text}</h2>
            <button
                name={props.text}
                className="bg-red-200 hover:bg-red-400 p-2 rounded-full text-red-400 hover:text-red-600"
                onClick={props.handleRemove}
            >
                <TrashIcon className="h-3 w-3 " />
            </button>
        </div>
    );
}

function TodoList() {
    const [newTodo, setNewTodo] = useState("wurst");
    const [todos, setTodos] = useState([
        "First todo",
        "Second todo",
        "Third todo",
    ]);

    const todoListItems = todos.map((todo, index) => (
        <TodoListItem key={index + todo} text={todo} handleRemove={handleRemove} />
    ));

    function handleChange(event) {
        const value = event.target.value;
        setNewTodo(value);
    }

    function handleRemove(event) {
        const name = event.target.name;
        const newTodos = [...todos];
        const index = newTodos.indexOf(name);
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    function addTodo() {
        if (newTodo.length === 0) return;
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setNewTodo("");
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    }

    return (
        <div className="flex flex-col w-80 m-6 p-4 border border-gray-300 rounded-lg shadow-lg">
            <h1 className="mb-4 font-semibold">Your Todos</h1>
            <div className="flex">
                <input
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={newTodo}
                    id="todo-input"
                    placeholder="What needs to be done?"
                    className="bg-gray-100 flex-grow border border-gray-200 p-2 rounded-l-md"
                />
                <button
                    onClick={addTodo}
                    className="py-2 px-4 bg-green-400 hover:bg-green-500 rounded-r-lg text-white"
                >
                    + Add
                </button>
            </div>
            <div className="flex flex-col gap-2 mt-4">{todoListItems}</div>
        </div>
    );
}

export default TodoList;
