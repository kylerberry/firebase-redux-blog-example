import React from 'react'
import { TextField, Checkbox } from 'material-ui'

// returns a material UI <TextField> for the redux-form <Field> component prop
export const renderTextField = ({ meta: { touched, error }, input, ...rest }) => {
	return (
		<TextField hintText={rest.label}
		    floatingLabelText={rest.label}
		    floatingLabelShrinkStyle={{ opacity: 1 }}
		    floatingLabelStyle={{ opacity: 0, bottom: '10px' }}
		  	errorText={touched && error}
		    underlineShow={true}
		    { ...rest }
		    { ...input }
		/>
)}

export const renderCheckbox = ({ meta: { error }, input, ...rest }) => {
	const inputClone = Object.assign({}, input)
	delete inputClone.checked
	return (
		<Checkbox defaultChecked={input.checked} 
			{ ...rest }
			{ ...inputClone }
		/>
	)
}

/**
* required field validation
*
* @param {String} value
* @return {void|String}
*/
export const required = value => value ? undefined : 'Required'

/**
* email validation
*
* @param {String} value
* @return {void|String}
*/
export const email = value => {
	if (
    	value &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
	) {
		return 'Invalid email address'
	} else {
		return undefined
	}
}

/**
* match field validation generator
* takes a field name and compares it's value to another field of the same name + _verify
*
* @param {String} field
* @return {Function}
*/
export const matchField = field => (value, values) => {
	if (values[field] && values[field] !== values[`${field}_verify`]) {
		return field.charAt(0).toUpperCase() + field.slice(1) + ' must match'
	}

	return undefined
}