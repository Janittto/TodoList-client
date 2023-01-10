import React from "react"
import { useNavigate } from "react-router-dom";
import service from "../../api/apiHandler";
import "../../styles/Tasks/ListCard.css"

const ListCard = ({oneList, id}) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        service
          .deleteTasksList(id)
          .then(() => {
            navigate("/")
          })
          .catch((error) => {
            setError(error.response.data);
          });
      }
      
	return (
      <div className="card-detail">
        <h2>{oneList.title}</h2>
        <p>{oneList.description}</p>
        <p>
            Deadline : {new Intl.DateTimeFormat("en-GB").format(
            new Date(oneList.deadline)
            )}
        </p>
        <p>{oneList.urgent ? <span>Urgent</span> : ""}</p>
        <p>{oneList.done ? <span>Done</span> : ""}</p>
        <button onClick={handleDelete}>Delete the list</button>
      </div>
	);
};

export default ListCard;
