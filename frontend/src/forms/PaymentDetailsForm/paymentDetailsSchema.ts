import { string, object } from "yup"

const paymentDetailsSchema = object().shape({
  cardNumber: string().required(),
  securityCode: string().required(),
  expirationDate: string().required()
})

export default paymentDetailsSchema
