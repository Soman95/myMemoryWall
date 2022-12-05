import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useContext } from 'react';
import { WallDataCtx } from '../../Context/WallDataContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  mt: 3,
};

const MemoryModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { wallDataCtx, setWallDataCtx } = useContext(WallDataCtx);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setWallDataCtx({
      ...wallDataCtx,
      memoryName: [...wallDataCtx['memoryName'], data.get('memoryName')],
      deceasedRelation: [
        ...wallDataCtx['deceasedRelation'],
        data.get('deceasedRelation'),
      ],
      deceasedMsg: [...wallDataCtx['deceasedMsg'], data.get('deceasedMsg')],
    });

    handleClose();
  };

  return (
    <div>
      <Button
        sx={{ background: '#169f95', width: '200px', color: 'white' }}
        onClick={handleOpen}
      >
        Add Memory
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        {/* FORM TO ADD MEMORY TO WALL - MAYBE MAKE MY FORM COMPONENT MORE VERSATILE SO I COULD USE THAT?? */}
        <Box sx={style} component='form' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='memoryName'
                required
                fullWidth
                id='memoryName'
                label='Your Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='deceasedRelation'
                label='Relation'
                name='deceasedRelation'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='deceasedMsg'
                label='Message'
                name='deceasedMsg'
                rows={5}
                multiline
                autoComplete='family-name'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, background: '#169f95' }}
          >
            Create Memory
          </Button>
        </Box>
      </Modal>
      {/* MEMORY BUBBLES */}
    </div>
  );
};

export default MemoryModal;
