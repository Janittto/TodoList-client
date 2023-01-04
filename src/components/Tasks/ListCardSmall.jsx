import React from "react"
import { Link } from "react-router-dom";
import "../../styles/Tasks/ListCardSmall.css"


const ListCardSmall = ({task}) => {
	return (
      <div className={task.urgent? "urgent" : ""}>
            <Link key={task._id} to={`/todo/${task._id}`}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <span>
                {new Intl.DateTimeFormat("en-GB").format(
                  new Date(task.deadline)
                )}
                </span>
            </Link> 
        </div>
	);
};

export default ListCardSmall;
