import React from "react"
import { Control } from "react-hook-form"
import InputText from "../../components/InputText"
import { styled } from "@mui/system"
import { InputAdornment, IconButton } from "@mui/material"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Group = styled("div")(() => ({
  display: "flex",
}))

const VisaLogo = styled("img")(() => ({
  border: "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "3px",
  width: "40px",
  padding: "5px 3px"
}))

type FormProps = {
  control: Control<any>
}

const PaymentDetailsForm: React.FunctionComponent<FormProps> = ({ control }) => (
  <>
    <InputText
      name="creditCard"
      label="Credit Card Number"
      placeholder="0000 – 0000 – 0000 – 0000"
      control={control}
      sx={{ mb: 2 }}
      inputProps={{ endAdornment: (
          <InputAdornment position="end">
            <VisaLogo src="/images/visa.svg" alt="Visa" />
          </InputAdornment>
        )}}
      required
    />
    <Group>
      <InputText
        name="CVV"
        label="Security Code"
        placeholder="***"
        control={control}
        sx={{ mb: 2, mr: 1 }}
        type="password"
        inputProps={{ endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" size="small">
              <HelpOutlineIcon sx={{ opacity: 0.4 }}/>
              </IconButton>
          </InputAdornment>
        )}}
        required
      />
      <InputText
        name="expDate"
        label="Expiration date"
        placeholder="MM / YY"
        control={control}
        sx={{ mb: 2, ml: 1 }}
        required
        />
    </Group>
  </>
)

export default PaymentDetailsForm
