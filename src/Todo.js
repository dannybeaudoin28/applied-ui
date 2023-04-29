import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div className='container'>
                                <label>

            <div className='row'>
                <div className='col-sm'>
                    <p>{todo.id}</p>
                </div>
                <div className='col-sm'>
                    <p className="col-sm">{todo.name}</p>
                </div>
                <div className='col-sm'>
                        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} className='col-sm'></input>
                </div>
            </div>
            </label>

        </div>
    )
}
