import React from 'react'
import { Formik, useField, Form } from 'formik'
import { TextField, Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import * as yup from 'yup'
const OwnForm = () => {
	const MyTextField = ({ placeholder, label, variant, ...props }) => {
		const [field, meta] = useField(props);
		const errorText = meta.error && meta.touched ? meta.error : ''
		return (
			<TextField {...field} size={props.size} variant={variant} label={label} placeholder={placeholder} helperText={errorText} error={!!errorText} />
		)
	}
	const MyPassword = ({ placeholder, label, ...props }) => {
		const [field, meta] = useField(props)
		const errorText = meta.error && meta.touched ? meta.error : ''
		return (
			<TextField {...field} size={props.size} variant={props.variant} placeholder={placeholder} label={label} helperText={errorText} error={!!errorText} />
		)
	}
	const ValidationSchema = yup.object({
		name: yup.string().required('Please enter your name'),
		password: yup.string().required('Please enter password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		),
	})
	return (
		<Formik initialValues={{ name: '', password: '' }} validationSchema={ValidationSchema} onSubmit={(data, { setSubmitting }) => {
			setSubmitting(true)
			console.log(data)
			setSubmitting(false)
		}}>
			{({ values, isSubmitting }) => (
				<Form>
					<MyTextField type="text" size="small" placeholder="enter name" label="Name" variant="filled" name="name" />
					<MyPassword type="password" size="small" placeholder="enter Password" label="Password" variant="filled" name="password" />
					<Button variant="contained" disabled={isSubmitting} startIcon={<SaveIcon />} type="submit">Submit</Button>

				</Form>
			)}
		</Formik>
	)
}

export default OwnForm
