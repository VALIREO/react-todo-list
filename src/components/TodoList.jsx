import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

const TodoList = () => {
    return (
        <div className='card shadow-sm'>
            <div className='card-header'>
                <h2 className='h5 mb-0'>My tasks</h2>
            </div>
            <div className='card-body'>
                <div className='input-group mb-3'>
                    <input type="text"
                        className='form-control'
                        placeholder='Add new task'
                    />
                    <button className='btn btn-primary'>
                        Add
                    </button>
                </div>
                <ul className='list-group'>
                    <li className='list-group-item d-flex justify-content-between align-items-center task-item'>
                        Go gym
                        <RiDeleteBin6Line
                            className='delete-icon'
                            size={20}
                        />
                    </li>

                    <li className='list-group-item d-flex justify-content-between align-items-center task-item completed'>
                        Go gym
                        <RiDeleteBin6Line
                            className='delete-icon'
                            size={20}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TodoList
