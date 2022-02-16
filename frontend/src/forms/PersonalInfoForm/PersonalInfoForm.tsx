import React from "react"
import { Control } from "react-hook-form"
import InputText from "../../components/InputText"
import { styled } from "@mui/system"
import { CountriesEnum } from "../../enums/common"
import { MenuItem } from "@mui/material"

const Group = styled("div")(() => ({
  display: "flex",
}))

type FormProps = {
  control: Control<any>
}

const PersonalInfoForm: React.FunctionComponent<FormProps> = ({ control }) => (
  <>
    <Group>
      <InputText
        name="firstName"
        label="First name"
        placeholder="Elon"
        control={control}
        sx={{ mb: 2, mr: 1 }}
        required
      />
      <InputText
        name="lastName"
        label="Last name"
        placeholder="Musk"
        control={control}
        sx={{ mb: 2, ml: 1 }}
        required
      />
    </Group>
    <InputText
      name="email"
      label="E-mail"
      placeholder="elon@spacex.com"
      control={control}
      sx={{ mb: 2 }}
      required
    />
    <Group>
      <InputText
        name="country"
        label="Country"
        control={control}
        sx={{ mb: 2, mr: 1 }}
        required
        select
      >
        {Object.values(CountriesEnum).map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </InputText>
      <InputText
        name="postalCode"
        label="Postal Code"
        placeholder="10001"
        control={control}
        sx={{ mb: 2, ml: 1 }}
        required
      />
    </Group>
    <InputText
      name="phone"
      label="Phone Number"
      placeholder="(212) 692-93-92"
      control={control}
      sx={{ mb: 2 }}
      required
    />
  </>
)

export default PersonalInfoForm
