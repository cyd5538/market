import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { toast } from 'react-toastify';

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
}

export default function MyGoodsEdit({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [AddData, setAddData] = useState({
    title: data.title,
    price: data.price,
    description: data.description,
    image: data.image,
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


  const handleAdd = async (id) => {

    if (!title || !price || !description) {
      toast('😒 빈칸을 채워주세요', toastObject);
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      try {
        await axios.patch(`http://localhost:5000/api/goods/${id}`, {
          title,
          price,
          description,
          image,

        }, config)
        setOpen(false)
        toast('👏 상품이 업데이트되었습니다.', toastObject);
      } catch (error) {
        console.log(error)
      }
    }




  }
  return (
    <div className='Modal'>
      <Button variant="contained" onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            상품수정하기
          </Typography>
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
              sx={{
                width: 300,
                maxWidth: '100%',
              }}
              id="outlined-multiline-static"
              label="설명"
              multiline
              rows={6}
              name='description'
              value={description}
              onChange={onChange}
            />
          </Box>
          <Button sx={{
            width: 300,
            maxWidth: '100%',
            marginTop: 2
          }} variant="contained" onClick={() => handleAdd(data._id)}>상품 업데이트
          </Button>

        </Box>
      </Modal>
    </div>
  );
}