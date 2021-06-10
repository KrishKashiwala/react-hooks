import React from 'react'
import {
	Formik,
	Field,
	Form,
	useField,
	FieldAttributes,
	FieldArray
} from "formik";
import {
	TextField,
	Button,
	Checkbox,
	Radio,
	FormControlLabel,
	Select,
	MenuItem
} from "@material-ui/core";
const FormikExample = () => {
	const MyRadio = ({ label, ...props }) => {
		const [field] = useField(props)
		return (
			<FormControlLabel {...field} control={<Radio />} label={label} />
		)

	}
	return (
		<Formik initialValues={
			{ name: '', email: '', password: '', checkME: false, cookies: [], dahi: '', pets: [{ type: "cat", name: "jarvis", id: "" + Math.random() }] }

		} onSubmit={(data, { setSubmitting }) => {
			setSubmitting(true)
			console.log(data)
			setSubmitting(false)
		}}>

			{({ values, isSubmitting }) => (

				<Form>
					<Field placeholder="first name" type="text" name="firstname" as={TextField} />
					<Field placeholder="email" type="email" name="email" as={TextField} />
					<Field placeholder="password" type="password" name="password" as={TextField} />
					<Field type="checkbox" name="checkme" as={Checkbox} />
					<div>cookies</div>
					<Field type="checkbox" name="cookies" value="mam" as={Checkbox} />
					<Field type="checkbox" name="cookies" value="sugar crust" as={Checkbox} />
					<Field type="checkbox" name="cookies" value="brownie" as={Checkbox} />
					<div>dahi</div>
					<MyRadio type="radio" name="dahi" value="berry" label="berry" />
					<MyRadio type="radio" name="dahi" value="khata" label="khata" />
					<MyRadio type="radio" name="dahi" value="simple" label="simple" />
					<Button variant="contained" type="submit" disabled={isSubmitting}>submit</Button>
					<pre>{JSON.stringify(values, null, 2)}</pre>
				</Form>
			)
			}
		</Formik >
	)
}

export default FormikExample
