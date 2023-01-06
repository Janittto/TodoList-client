import React from "react"
import { Link } from "react-router-dom"
import Puce from "../../todo-puce01.svg"
import Puce2 from "../../todo-puce02.svg"
import "../../styles/Tasks/ListCardSmall.css"


const ListCardSmall = ({task}) => {
	return (
       <div className={task.urgent? "urgent" : ""}>
          <div>{task.urgent? <img src={Puce2} alt="puce"/> : <img src={Puce} alt="puce"/>}</div>
            <div>
              <Link key={task._id} to={`/${task._id}`}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <span>
                  {new Intl.DateTimeFormat("en-GB").format(
                    new Date(task.deadline)
                  )}
                  </span>
              </Link> 
            </div>
        </div>
	);
};

export default ListCardSmall;
