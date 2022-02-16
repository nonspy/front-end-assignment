import { CountriesEnum } from "../enums/common"

export type CheckoutType = {
  firstName: string,
  lastName: string,
  email: string,
  country: CountriesEnum,
  postalCode: string,
  phone?: string,
  creditCard: string,
  CVV: string,
  expDate: string
}
