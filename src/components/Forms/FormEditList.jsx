import useForm from "../../hooks/useForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import service from "../../api/apiHandler"


const FormEditList = ({oneList, id, getListChange, setButton}) => {
    const [values, handleChange] = useForm({title: oneList.title, description: oneList.description, deadline: oneList.deadline.split("T")[0], urgent: oneList.urgent, done: oneList.done,})
    const [error, setError] = useState(null)
	//const navigate = useNavigate()
    

const handleSubmit = (e) => {
    e.preventDefault()
        service
        .editList(id, values)
        .then(async () => {
            setButton(false)
            await getListChange()
        })
        .catch((error) => {
            setError(error.response.data)
        })
    }

	return (
		<div>
            <h1>Edit the list</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					onChange={handleChange}
					value={values.title}
				/>
            <label htmlFor="description">description</label>
				<textarea
					type="text"
					id="description"
					name="description"
					onChange={handleChange}
					value={values.description}
				/>
            <label htmlFor="date">Deadline: </label>
                <input
                type="date"
                id="date"
                name="deadline"
                onChange={handleChange}
                value={values.deadline}
                />
            <label htmlFor="urgent">Is Urgent: </label>
                <input  
                className={values.urgent ? "checked" : ''}
                type="checkbox" 
                id="urgent"
                name="urgent"
                onChange={handleChange}
                value={values.urgent}
                />
            <label htmlFor="done">Is Done: </label>
                <input 
                className={values.done ? "checked" : ''}
                type="checkbox" 
                id="done"
                name="done"
                onChange={handleChange}
                value={values.done}
                />
            <button>Submit</button>
            </form>
        </div>
	);
};

export default FormEditList;
