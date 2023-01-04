import useForm from "../../hooks/useForm"
import { useState } from "react"
import service from "../../api/apiHandler"


const FormSingleTask = ({id, getListChange}) => {
    const [values, handleChange, reset] = useForm({ title: "", content: ""})
    const [error, setError] = useState(null)    

const handleSubmit = (e) => {
    e.preventDefault()
        service
        .newSingleTask(id, values)
        .then(() => {
            getListChange()
            reset()
        })
        .catch((error) => {
            setError(error.response.data)
        })
    }

	return (
		<div>
            <h2>add a New task</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">title </label>
                <input 
                type="text" 
                id="title"
                name="title"
                onChange={handleChange}
                value={values.title}
                /> 
            <label htmlFor="content">Content </label>
                <input 
                type="text" 
                id="content"
                name="content"
                onChange={handleChange}
                value={values.content}
                /> 
                <button>Create task</button>
            </form>
        </div>
	);
};

export default FormSingleTask;
