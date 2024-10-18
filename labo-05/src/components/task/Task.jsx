import React from 'react';
import { FaRegCircle } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import "./Task.css";


const Task = ({task, deleteTaskById, onCompletedTask}) => {
    return (
        <div className='task-card'>
            <button className='completed-button' 
            onClick={() => onCompletedTask(task.id)}
            >
                {task.isCompleted ? <FaCircle /> : <FaRegCircle size={20} /> }
            </button>
            <p className={task.isCompleted ? "textCompleted" : "text"}>
                
                {task.title}
            </p>
            <button className='delete-button'
            onClick={() =>deleteTaskById(task.id)}>
                <FaTrashAlt size={20} />
            </button>
        </div>
    );
};

export default Task;