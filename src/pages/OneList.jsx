import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import service from "../api/apiHandler"
import FormEditList from "../components/Forms/FormEditList";
import FormSingleTask from "../components/Forms/FormSingleTask";
import TaskCardSmall from "../components/Tasks/TaskCardSmall";
import ListCard from "../components/Tasks/ListCard";
import Cross from "../todo-cross.svg"
import Edit from "../todo-edit.svg"
import "../styles/OneList.css"

const OneList = () => {
    const [oneList, setOneList] = useState(null)
    const [error, setError] = useState(null)
    const [button, setButton] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        getListChange()
    }, []);
    
    const getListChange = () => {
        service
        .getOneList(id)
        .then((response) => {
            setOneList(response)
        })
        .catch((error) => {
            setError(error.response.data)
        })
    }

    if (!oneList) return <p>Loading ...</p>
	return (
		<div className="one-list container">
            <div className="box">
                <div className="box-container">
                    <button onClick={() => setButton(!button)}className="edit-btn">{!button? <img src={Edit} alt="todo-edit"/> : <img src={Cross} alt="todo-cross"/>}</button>
                    {!button? <ListCard oneList={oneList} id={id}/> : <FormEditList oneList={oneList} id={id} getListChange={getListChange} setButton={setButton}/>}
                </div>
                <div className="box-container">
                    <h2>Tasks</h2>
                    <FormSingleTask id={id} getListChange={getListChange}/>
                    <h3>Your tasks</h3>
                    <div>{oneList.tasks.map((task) => {
                            return (
                            <TaskCardSmall key={task._id} id={id} task={task} getListChange={getListChange}/>
                            )
                    })}
                    </div>
                </div>
            </div>
        </div>
	)
}

export default OneList
