import { CountriesEnum } from "../enums/common"

export type PurchaseType = {
  firstName: string,
  lastName: string,
  email: string,
  country: CountriesEnum,
  postalCode: string,
  phoneNumber?: string,
  cardNumber: string,
  securityCode: string,
  expirationDate: string
}
