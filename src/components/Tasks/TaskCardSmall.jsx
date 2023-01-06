import React, { useState } from "react"
import service from "../../api/apiHandler"
import { useNavigate } from "react-router-dom"


const TaskCardSmall = ({task, getListChange}) => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleDelete = () => {
        service
          .deleteSingleTask(task._id)
          .then(() => {
            //navigate("/")
            getListChange()
          })
          .catch((error) => {
            setError(error.response.data);
          });
      };

	return (
       <div>
            <p>{task.title}</p>
            <p>{task.content}</p>
            <button onClick={handleDelete}>Remove</button>
        </div>
	);
};

export default TaskCardSmall;
