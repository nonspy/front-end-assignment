import { string, object } from "yup"

const personalInfoSchema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  email: string().required(),
  country: string().required(),
  postalCode: string().required(),
  phoneNumber: string(),
})

export default personalInfoSchema
