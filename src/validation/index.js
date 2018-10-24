import * as Yup from 'yup'

export const loginValidationSchema = function () {
    return Yup.object().shape({
      username: Yup.string()
      .min(5, `Username has to be at least 5 characters`)
      .required('Username is required'),
      password: Yup.string()
      .min(6, `Password has to be at least ${6} characters!`)
      .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
      .required('Password is required')
    })
  }
  
export const validate = (getValidationSchema) => {
    return (values) => {
      const validationSchema = getValidationSchema(values)
      try {
        validationSchema.validateSync(values, { abortEarly: false })
        return {}
      } catch (error) {
        return getErrorsFromValidationError(error)
      }
    }
  }
  
export const validateForm = function(formName, errors) {
    findFirstError(formName, (fieldName) => {
      return Boolean(errors[fieldName])
    })
}

const getErrorsFromValidationError = (validationError) => {
    const FIRST_ERROR = 0
    return validationError.inner.reduce((errors, error) => {
      return {
        ...errors,
        [error.path]: error.errors[FIRST_ERROR],
      }
    }, {})
  }


const findFirstError = function (formName, hasError) {
    const form = document.forms[formName]
    for (let i = 0; i < form.length; i++) {
      if (hasError(form[i].name)) {
        form[i].focus()
        break
      }
    }
  }