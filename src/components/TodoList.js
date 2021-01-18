import React from 'react';
// importing components
import Todo from './Todo';

const TodoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
            </ul>
        </div>
    )
}

export default TodoList;