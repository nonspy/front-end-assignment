import React from "react"
import { Alert, AlertTitle } from "@mui/material"
import { ErrorType } from "../../types/common"

interface ErrorAlertProps {
  errors: ErrorType[]
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ errors }) => {
  if (!errors.length) {
    return null
  }

  return (
    <Alert variant="filled" severity="error" sx={{ mb: 2 }}>
      <AlertTitle>Data sending failed</AlertTitle>
      <ul>
        {errors.map(({ field, message }) => (
          <li>
            <strong>{field}</strong>:
            {" "}
            {message}
          </li>
        ))}
      </ul>
    </Alert>
  )
}

export default ErrorAlert
