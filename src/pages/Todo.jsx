import React, { useState, useEffect } from "react"
import FormNewList from "../components/Forms/FormNewList"
import ListCardSmall from "../components/Tasks/ListCardSmall"
import service from "../api/apiHandler"

const Todo = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        getListChange()
    }, []);

    function getListChange() {
        service
        .getList()
        .then((response) => {
            setList(response);
          })
        .catch((error) => {
            setError(error.response.data)
        })
    }

    //if (!list.length) return <p>Loading ...</p>
	return (
		<div className="list container">
            <FormNewList getListChange={getListChange}/>
            <div className="box">
                <div className="list-card box-container">
                    <h2>In progress</h2>
                    {list.map((task) => {
                        return <ListCardSmall key={task._id} task={task} />;
                    })}
                </div>
            </div>
		</div>
	)
}

export default Todo