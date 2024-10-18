import React, { useState } from "react";
import { MdExposurePlus1 } from "react-icons/md";
import "./FormTask.css";
const FormTask = ({handleAddTask}) => {

    const [title, setTitle] = useState("")

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        handleAddTask(title)
        console.log(title)
        setTitle("")
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
        }



    return (
        <>
            <form onSubmit={handleSubmitEvent} className="newTask-Form">
                <input
                    required
                    placeholder="Add a new task"
                    type="text"
                onChange={onChangeTitle}
                value={title}
                />
                <button className="newTask-button">
                    Create <MdExposurePlus1 size={20} />
                </button>
            </form>
        </>
    );
};
export default FormTask;