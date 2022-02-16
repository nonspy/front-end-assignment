import React, { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { styled } from "@mui/material/styles"
import { Box, Button } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios"

import PaymentDetailsForm from "../../forms/PaymentDetailsForm"
import PersonalInfoForm from "../../forms/PersonalInfoForm"
import { CheckoutType } from "../../types/checkout"
import paymentDetailsSchema from "../../forms/PaymentDetailsForm/paymentDetailsSchema"
import personalInfoSchema from "../../forms/PersonalInfoForm/personalInfoSchema"
import { CountriesEnum } from "../../enums/common"
import SuccessModal from "../SuccessModal"
import { ErrorType } from "../../types/common"
import ErrorAlert from "../ErrorAlert"

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6bd400",
  color: "#ffffff",
  padding: "1em",
  fontWeight: theme.typography.fontWeightBold,
  boxShadow: "inset 0 -2px 0 0 rgba(0, 0, 0, 0.15)",
}))

const StyledHeading = styled("h3")(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textTransform: "uppercase",
  fontSize: "0.8em",
  fontWeight: theme.typography.fontWeightBold,
  counterIncrement: "section",
  position: "relative",
  "&:before": {
    content: "counter(section)",
    position: "absolute",
    left: "-30px",
    backgroundColor: "#000000",
    fontSize: "1.2em",
    color: "#ffffff",
    lineHeight: "1.3em",
    top: "50%",
    transform: "translateY(-50%)",
    minWidth: "1.3em",
    textAlign: "center",
    borderRadius: "50%",
  }
}))

const CheckOut: React.FC = () => {
  const [errors, setErrors] = useState<ErrorType[]>([])
  const [success, setSuccess] = useState<boolean>(false)
  const {
    handleSubmit,
    control,
  } = useForm<CheckoutType>({
    resolver: yupResolver(paymentDetailsSchema.concat(personalInfoSchema)),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: CountriesEnum.US,
      postalCode: "",
      phone: "",
      creditCard: "",
      CVV: "",
      expDate: ""
    },
  })

  const onSubmit = handleSubmit(data => {
    axios.post("/order", data)
      .then(response => {
        if (response.status === 200)
        setSuccess(true)
      })
      .catch(error => {
        setErrors(error.response.data.errors)
      })
  })

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <ErrorAlert errors={errors} />
      <StyledHeading>Personal information</StyledHeading>
      <Box component="div" sx={{ mb: 3 }}>
        <PersonalInfoForm control={control} />
      </Box>
      <StyledHeading>
        Payment Details
        <LockIcon sx={{ ml: 1.5, fontSize: "14px", color: "#343434", verticalAlign: "text-top" }} />
      </StyledHeading>
      <Box component="div" sx={{ mb: 3 }}>
        <PaymentDetailsForm control={control} />
      </Box>
      <StyledButton onClick={onSubmit} variant="contained" fullWidth disableElevation>
        <ShoppingCartIcon sx={{ mr: 0.8, fontSize: "1.3em" }} />
        Complete purchase
      </StyledButton>
      <SuccessModal open={success} onClose={() => setSuccess(false)} />
    </Box>
  )
}

export default CheckOut
