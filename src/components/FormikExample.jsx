import React from 'react'
import {
	Formik,
	Field,
	Form,
	useField,
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
import * as yup from 'yup'
const FormikExample = () => {
	const MyRadio = ({ label, ...props }) => {
		const [field] = useField(props)
		return (
			<FormControlLabel {...field} control={<Radio />} label={label} />
		)

	}
	const MyTextField = ({ placeholder, ...props }) => {
		const [field, meta] = useField(props)
		const errorText = meta.error && meta.touched ? meta.error : ''
		return (
			<TextField {...field} placeholder={placeholder} helperText={errorText} error={!!errorText} />
		)

	}
	const validationSchema = yup.object({
		name: yup.string().required('Please Enter your name'),
		email: yup.string().required('Please Enter your email'),
		password: yup.string().required('Please Enter your password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		),

	});

	return (
		<Formik validateOnChange={true}
			validationSchema={validationSchema}
			initialValues={
				{ name: '', email: '', password: '', checkME: false, cookies: [], dahi: '', pets: [{ type: "", name: "", id: "" + Math.random() }] }
			}
			onSubmit={(data, { setSubmitting }) => {
				setSubmitting(true)
				console.log(data)
				setSubmitting(false)
			}}
		>

			{({ values, isSubmitting }) => (

				<Form>
					<MyTextField placeholder="first name" type="text" name="name" />
					<MyTextField placeholder="email" type="email" name="email" />
					<MyTextField placeholder="password" type="password" name="password" />
					<Field type="checkbox" name="checkme" as={Checkbox} />
					<div>cookies</div>
					<Field type="checkbox" name="cookies" value="mam" as={Checkbox} />
					<Field type="checkbox" name="cookies" value="sugar crust" as={Checkbox} />
					<Field type="checkbox" name="cookies" value="brownie" as={Checkbox} />
					<div>dahi</div>
					<MyRadio type="radio" name="dahi" value="berry" label="berry" />
					<MyRadio type="radio" name="dahi" value="khata" label="khata" />
					<MyRadio type="radio" name="dahi" value="simple" label="simple" />
					<FieldArray name="pets">{arrayhelpers => {
						return (
							<div>
								<Button onClick={() => (
									arrayhelpers.push({
										type: 'frog',
										name: '',
										id: "" + Math.random()
									})
								)}>Add pet</Button>
								{values.pets.map((pet, index) => {

									return (
										<div key={pet.id}>
											<MyTextField placeholder="pet name" name={`pets.${index}.name`} />
											<Field name={`pets.${index}.type`}
												type="select" as={Select}>
												<MenuItem value="cat">Cat</MenuItem>
												<MenuItem value="Dog">Dog</MenuItem>
												<MenuItem value="Frog">Frog</MenuItem>
											</Field>
										</div>
									)
								})}
							</div>

						)
					}}
					</FieldArray>
					<Button variant="contained" type="submit" disabled={isSubmitting}>submit</Button>
					<pre>{JSON.stringify(values, null, 10)}</pre>
				</Form>
			)
			}
		</Formik >
	)
}

export default FormikExample
