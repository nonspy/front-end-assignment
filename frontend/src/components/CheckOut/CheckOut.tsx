import React from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { styled } from "@mui/material/styles"
import { Box, Button } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import PaymentDetailsForm from "../../forms/PaymentDetailsForm"
import PersonalInfoForm from "../../forms/PersonalInfoForm"
import { PurchaseType } from "../../types/purchase"
import paymentDetailsSchema from "../../forms/PaymentDetailsForm/paymentDetailsSchema"
import personalInfoSchema from "../../forms/PersonalInfoForm/personalInfoSchema"
import { CountriesEnum } from "../../enums/common"

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
  const {
    handleSubmit,
    control,
  } = useForm<PurchaseType>({
    resolver: yupResolver(paymentDetailsSchema.concat(personalInfoSchema)),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: CountriesEnum.US,
      postalCode: "",
      phoneNumber: "",
      cardNumber: "",
      securityCode: "",
      expirationDate: ""
    },
  })

  const onSubmit = handleSubmit(() => false)

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
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
    </Box>
  )
}

export default CheckOut
