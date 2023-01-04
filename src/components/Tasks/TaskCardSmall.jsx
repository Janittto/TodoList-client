import React from "react"
import service from "../../api/apiHandler"


const TaskCardSmall = ({task, getListChange}) => {
    const handleDelete = () => {
        service
          .deleteSingleTask(task._id)
          .then(() => {
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
