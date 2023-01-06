import React, { useState, useEffect } from "react"
import useForm from "../hooks/useForm"
import FormNewList from "../components/Forms/FormNewList"
import ListCardSmall from "../components/Tasks/ListCardSmall"
import service from "../api/apiHandler"
import "../styles/Todo.css"

const Todo = () => {
    const [list, setList] = useState([])
    const [values, handleChange, reset] = useForm({ title: "", description: "", deadline: "", urgent: false})
    const [button, setButton] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        getListChange()
    }, []);

    function getListChange() {
        service
        .getList()
        .then((response) => {
            setList(response)
          })
        .catch((error) => {
            setError(error.response.data)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        service
        .newList(values)
        .then(() => {
            setButton(false)
            getListChange()
            reset()
        })
        .catch((error) => {
            setError(error.response.data)
        })
    }

    //if (!list.length) return <p>Loading ...</p>
	return (
		<div className="list container">
            <div className="box">
                <div className="list-card box-container">
                    <h2>In progress</h2>
                    {!list.length ? <p>nope</p> : list.map((task) => {
                        return <ListCardSmall key={task._id} task={task} />;
                    })}
                </div>
            </div>
            <div className="add-box box">
                <button onClick={() => setButton(!button)}className="add-btn">{!button? "New List" : "Back"}</button>
                {!button? '' : <FormNewList setButton={setButton} handleSubmit={handleSubmit} values={values} handleChange={handleChange} error={error}/>}
            </div>
        </div>
	)
}

export default Todo
