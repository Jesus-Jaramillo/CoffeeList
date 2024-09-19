import React from 'react';
import Box from '@mui/material/Box';
import '../styles/card-Styles.css'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 5,
  p: 4,
};

function ModalOpen({ open, handleClose, selectedCoffee }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style} className='modal-open'>
          {selectedCoffee && (
            <>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <div className='modal-controller'>
                  <img className='img-modal' src={selectedCoffee.image} alt={selectedCoffee.name} />
                  <br />
                  <b>Name: </b> {selectedCoffee.name}
                  <br />
                  <b>Rating: </b> {selectedCoffee?.rating ? selectedCoffee.rating : 'No rating'}
                  <br />
                  <b>Price: </b> {selectedCoffee.price}
                </div>
              </Typography>
            </>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalOpen;
