import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
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

const toastObject = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

export default function AddCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useSelector((state) => state.auth);

  const [AddData, setAddData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    image2: ""
  })

  const { title, price, description, image, image2, image3 } = AddData

  const onChange = (e) => {
    setAddData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // 토큰을 가져와서 headers에 넣기 
  const data = JSON.parse(localStorage.getItem("user"));
  const token = data.token;


  const handleAdd = async (e) => {
    e.preventDefault()
    if (!title || !price || !description) {
      toast('😒 빈칸을 채워주세요', toastObject);
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      await axios.post('http://localhost:5000/api/goods', {
        title,
        price,
        description,
        image,
        image2,
        image3,
        name: user.name
      }, config)
      toast('👌 상품이 추가되었습니다.', toastObject);
      setOpen(false)
    }

  }
  return (
    <div className='Modal'>
      <Button variant="contained" onClick={handleOpen}>상품 추가</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            상품 추가하기
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
                value={title}
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
                value={price}
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
                value={image}
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
                label="Image URL2"
                id="fullWidth"
                name='image2'
                value={image2}
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
                label="Image URL3"
                id="fullWidth"
                name='image3'
                value={image3}
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
                rows={3}
                name='description'
                value={description}
                onChange={onChange}
              />
            </Box>
            <Button sx={{
              width: 300,
              maxWidth: '100%',
              marginTop: 2
            }} variant="contained" type="submit">상품 추가
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}