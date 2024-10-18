import TodoLogo from "../../assets/icons/todoLogo.svg"
import React from 'react';
import "./Header.css"
import FormTask from "../form/FormTask";

const Header = ({handleAddTask}) => {
    return (
        <header className="header-container">
            <img src={TodoLogo}/>
            {<FormTask handleAddTask={handleAddTask} />}
        </header>
    );
};

export default Header;