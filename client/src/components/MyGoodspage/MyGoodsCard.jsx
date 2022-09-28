import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MyGoodsEdit from './MyGoodsEdit'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';


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

export default function MyGoodsCard({data}) {

    // 토큰을 가져와서 headers에 넣기 
    const datas = JSON.parse(localStorage.getItem("user"));
    const token = datas.token;
    

    const handleDelete = async (id) => {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
        await axios.delete(`http://localhost:5000/api/goods/${id}`,config)
        toast('❌ 삭제되었습니다.', toastObject);
    } 

  return (
    <Card sx={{ maxWidth: 300, width: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleDelete(data._id)} startIcon={<DeleteIcon />} size="small" sx={{marginRight: 2}}>삭제</Button>
        <MyGoodsEdit data={data}/>
      </CardActions>
    </Card>
  );
}
