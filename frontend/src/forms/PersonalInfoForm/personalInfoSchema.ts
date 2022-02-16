import { string, object } from "yup"
import "yup-phone"

const personalInfoSchema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  country: string().required(),
  postalCode: string().matches(new RegExp('^[0-9]{5}$')).required(),
  phone: string().phone().required(),
})

export default personalInfoSchema
