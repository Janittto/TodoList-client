import { useState } from "react"

const useForm = (initialValues) => {
	const [values, setValues] = useState(initialValues)
	const handleChange = (e) => {
		setValues({
			...values,
			//[e.target.name]: e.target.value,
			[e.target.name]:
			e.target.type === "checkbox" ? (e.target.checked ? true : false) : e.target.value
		})
	}
	const reset = () => {
		setValues(initialValues)
	}
	return [values, handleChange, reset]
}

export default useForm
