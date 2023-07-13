import { Card, Modal } from '@mui/material'
import React from 'react'

const CustomModal = ({open,handleClose,children}) => {
    const primaryStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        maxHeight: "fit-content",
        boxShadow: 14,
        p: "10px 20px",
        overflowY: "visible",
        background: "white",
      };
  return (
<Modal open={open}
      onClose={handleClose}>
        <Card sx={primaryStyle}>{children}</Card>
      </Modal>
    )
}

export default CustomModal