import { Box, Modal, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";

const ParentModal = ({ isOpen, handlerClose, children }) => {
    return (
        <Modal open={isOpen} onClose={handlerClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                {children}
            </Box>
        </Modal>
    );
};

export default ParentModal;
