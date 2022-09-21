import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';

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
};

export default function MyGoodsEdit({data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [AddData, setAddData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
  })

  const { title, price, description, image } = AddData

  const onChange = (e) => {
    setAddData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // 토큰을 가져와서 headers에 넣기 
  const datas = JSON.parse(localStorage.getItem("user"));
  const token = datas.token;

  
  const handleAdd = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    await axios.post('http://localhost:5000/api/goods', {
      title,
      price,
      description,
      image
    },config)
    setOpen(false)
  } 
  return (
    <div className='Modal'>
      <Button variant="contained" size="small" onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            상품 수정
          </Typography>
          <form onSubmit={handleAdd}>
            <Box
              sx={{
                width: 300,
                maxWidth: '100%',
                marginTop: 2
              }}
            >
              <TextField 
                fullWidth 
                label="제목" 
                id="fullWidth"
                name='title'
                value={data.title}
                onChange={onChange} 
              />
            </Box>
            <Box
              sx={{
                width: 300,
                maxWidth: '100%',
                marginTop: 2
              }}
            >
              <TextField 
                type="number" 
                fullWidth label="가격" 
                id="fullWidth"
                name='price'
                value={data.price}
                onChange={onChange}  
              />
            </Box>
            <Box
              sx={{
                width: 300,
                maxWidth: '100%',
                marginTop: 2
              }}
            >
              <TextField 
                fullWidth 
                label="Image URL" 
                id="fullWidth"
                name='image'
                value={data.image}
                onChange={onChange}  
               />
            </Box>
            <Box
              sx={{
                width: 300,
                maxWidth: '100%',
                marginTop: 2
              }}
            >
              <TextField
                sx={{
                  width: 300,
                  maxWidth: '100%',
                }}
                id="outlined-multiline-static"
                label="설명"
                multiline
                rows={6}
                name='description'
                value={data.description}
                onChange={onChange}  
              />
            </Box>
            <Button sx={{
              width: 300,
              maxWidth: '100%',
              marginTop: 2
            }} variant="contained" type="submit">상품 수정
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}