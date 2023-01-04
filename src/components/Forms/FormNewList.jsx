import useForm from "../../hooks/useForm"
import { useState } from "react"
import service from "../../api/apiHandler"
import "../../styles/Forms/FormNewList.css"


const FormNewList = ({getListChange, setButton}) => {
    const [values, handleChange, reset] = useForm({ title: "", description: "", deadline: "", urgent: false})
    const [error, setError] = useState(null)

const handleSubmit = (e) => {
    e.preventDefault()
        service
        .newList(values)
        .then(async () => {
            setButton(false)
            await getListChange();
            reset()
        })
        .catch((error) => {
            setError(error.response.data)
        })
    }

	return (
        <div className="box">
            <div className="list-form box-container">
                <button onClick={()=> setButton(false)}>close</button>
                <div>
                    <h2>New Tasks'List</h2>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor="title">List Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Add a title to my list"
                            onChange={handleChange}
                            value={values.title}
                        />
                    <label htmlFor="description">List Description</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Add a description"
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
                        type="checkbox" 
                        id="urgent"
                        name="urgent"
                        onChange={handleChange}
                        value={values.urgent}
                        checked={values.urgent}
                        />
                    <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
	);
};

export default FormNewList;
