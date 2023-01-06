import useForm from "../../hooks/useForm"
import { useState } from "react"
import service from "../../api/apiHandler"
import Cross from "../../todo-cross.svg"
import "../../styles/Forms/FormNewList.css"


const FormNewList = ({setButton, handleSubmit, values, handleChange, error}) => {
return (
        <div className="box">
            <div className="list-form box-container">
                <div onClick={()=> setButton(false)}><img src={Cross} alt="todo-cross"/></div>
                <div>
                    <h2>New Tasks'List</h2>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Add a title to my list"
                            onChange={handleChange}
                            value={values.title}
                        />
                    <label htmlFor="description">Description</label>
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
                    <div className="checkbox">
                        <label htmlFor="urgent">Is Urgent: </label>
                            <input 
                                type="checkbox" 
                                id="urgent"
                                name="urgent"
                                onChange={handleChange}
                                value={values.urgent}
                                checked={values.urgent}
                            />
                            <span className="checkmark"></span>
                    </div>
                    <button>Submit</button>
                    {error && error.message && (
                        <p
                            className="error"
                            style={{ color: "red", textAlign: "center", marginTop: "1rem" }}
                        >
                            {error.message}
                        </p>
                    )}
                    </form>
                </div>
            </div>
        </div>
	);
};

export default FormNewList;
