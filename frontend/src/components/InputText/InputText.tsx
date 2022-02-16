import React from "react"
import { styled } from '@mui/material/styles';
import { Control, Controller } from "react-hook-form"
import { TextField } from "@mui/material"

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    boxShadow: "inset 0 -2px 0 0 rgba(0, 0, 0, 0.15)",
    '&:before, &:hover:before': {
      border: 'none',
    },
  },
  '& .MuiSelect-select:focus': {
    backgroundColor: theme.palette.background.default,
  },
  '& .MuiFormLabel-root': {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary,
  },
}))

interface InputTextProps {
  name: string
  label: string
  control: Control
  type?: "text" | "password" | "email" | "tel"
  controllerProps?
  placeholder?: string
  required?: boolean
  sx?: Record<string, string | number>
  inputProps?: any
  select?: boolean
}

const InputText: React.FC<InputTextProps> = ({
  name,
  label,
  control,
  type = "text",
  controllerProps,
  placeholder,
  required = false,
  sx,
  inputProps,
  select,
  children
}) => {
  return (
    <Controller
      name={name}
      control={control}
      {...controllerProps}
      render={({ field, fieldState }) => (
        <StyledTextField
          {...field}
          label={label}
          type={type}
          error={!!fieldState.error}
          helperText={fieldState?.error?.message ? fieldState.error.message.toString() : undefined }
          placeholder={placeholder}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          select={select}
          required={required}
          sx={sx}
          InputProps={inputProps}
        >
          {children}
        </StyledTextField>
      )}
    />
  )
}

export default InputText
