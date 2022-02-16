import { string, object } from "yup"

const paymentDetailsSchema = object().shape({
  creditCard: string().matches(new RegExp('^[0-9]{16}$')).required(),
  CVV: string().matches(new RegExp('^[0-9]{3}$')).required(),
  expDate: string().matches(new RegExp('^[0-9]{2}\/[0-9]{2}$')).required()
})

export default paymentDetailsSchema
