import React, { useState } from "react"
import service from "../../api/apiHandler"
import Cross from "../../todo-cross.svg"
import Done from "../../todo-done.svg"
import "../../styles/Tasks/TaskCardSmall.css"
import useForm from "../../hooks/useForm";


const TaskCardSmall = ({task, getListChange}) => {
    const [values, handleChange] = useForm({done: task.done})
    const [error, setError] = useState(null)

    const handleDelete = () => {
        service
          .deleteSingleTask(task._id)
          .then(() => {
            getListChange()
          })
          .catch((error) => {
            setError(error.response.data)
          })
      }

      const handleSubmit = (e) => {
        service
          .updateSingleTask(task._id, values)
          .then(() => {
            console.log('yo')
            getListChange()
          })
          .catch((error) => {
            setError(error.response.data)
          })
      }

	return (
       <div className={values.done ? "task-card done" : "task-card"}>
          <div>
            <p>{task.title}</p>
            <p>{task.content}</p>
          </div>
          <div>
            <form onChange={handleSubmit}>
            {/* <div className="checkbox"> */}
              {/* <label htmlFor="done">Is Done: </label> */}
                  <input
                  className={values.done ? "checked" : ''}
                  type="checkbox" 
                  id="done"
                  name="done"
                  onChange={handleChange}
                  value={values.done}    
                 />
              {/* <span className="checkmark"></span> */}
              {/* </div> */}
              {/* <button><img src={Done} alt="todo-done"/></button> */}
            </form>
            <button onClick={handleDelete}><img src={Cross} alt="todo-cross"/></button>
          </div>
        </div>
	);
};

export default TaskCardSmall;
