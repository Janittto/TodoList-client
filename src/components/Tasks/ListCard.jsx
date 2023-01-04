import React from "react"
import { useNavigate } from "react-router-dom";
import service from "../../api/apiHandler";

const ListCard = ({oneList, id}) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        service
          .deleteTasksList(id)
          .then(() => {
            navigate("/todo")
          })
          .catch((error) => {
            setError(error.response.data);
          });
      };

	return (
      <div>
        <h2>{oneList.title}</h2>
        <button onClick={handleDelete}>Delete the list</button>
        <p>{oneList.description}</p>
        <span>
            {new Intl.DateTimeFormat("en-GB").format(
            new Date(oneList.deadline)
            )}
        </span>
        <p>{oneList.urgent ? "urgent" : "not urgent"}</p>
        <p>{oneList.done ? "done" : ""}</p>
      </div>
	);
};

export default ListCard;
