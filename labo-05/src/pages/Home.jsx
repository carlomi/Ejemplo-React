import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import ViewTasks from "../components/viewTasks/container/ViewTasks";
import "./Home.css"

//Archivo principal que muestra la pagina
const Home = () => {

    const [tasks, setTasks] = useState([]);
    const addTask = (taskTitle) => {
        setTasksAndSave([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false,
            },
        ]);
    };

    const toggleTaskCompletedById = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            }
            return task;
        });
        setTasksAndSave(newTasks);
    }

    const deleteTaskById = (taskId) => {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasksAndSave(newTasks);
    };

    const loadSavedTasks = () => {
        const saved = localStorage.getItem("tasks");
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    }
    const setTasksAndSave = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
    useEffect(() => {
        loadSavedTasks();
    }, [])


    return (
        <div className="home-container">
            {<Header handleAddTask={addTask} />}
            {<ViewTasks
                tasks={tasks}
                deleteTaskById={deleteTaskById}
                onCompletedTask={toggleTaskCompletedById}
            />}
        </div>
    );
};
export default Home;