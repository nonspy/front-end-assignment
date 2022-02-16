import React from "react"
import { Box, Modal, Typography } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check'

const modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface SuccessModalProps {
  open
  onClose
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modal}>
        <Typography variant="h6" component="h2">
          <CheckIcon color="success" sx={{ mr: 2, fontSize: "2em", verticalAlign: "sub" }} />
          Order successfully placed
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Thank you for your purchase. We have the feeling this is the beginning of a beautiful friendship!
        </Typography>
      </Box>
    </Modal>
  )
}

export default SuccessModal
