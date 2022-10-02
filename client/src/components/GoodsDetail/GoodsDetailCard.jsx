import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

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

export default function GoodsDetailCard({ idData, url }) {

  const [favor, setFavor] = useState([]);
  const [getfavor, setGetFavor] = useState([]);
  const [IsFavor, setIsFavor] = useState(true);
  const { user } = useSelector((state) => state.auth);

  // 토큰을 가져와서 headers에 넣기 

  const data = JSON.parse(localStorage.getItem("user"));
  const token = data.token;



  // 찜하기버튼 구현하려는 get
  const getAllFavor = async () => {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await axios.get(`http://localhost:5000/api/favor/`, config)
    const data = response.data

    setFavor(data)
    await truefalse()
  }
  
  // 내가찜한목록에 있는지 없는지 알려는 함수
  const truefalse = async () => {
    let data = favor.map((d) => d.url)
    let dataresult = data.find((f) => f === idData._id)
    
    if (dataresult !== undefined) {
      setIsFavor(false)
    } else {
      setIsFavor(true);
    }
  }


  
  // 즐겨찾기 on
  const favorClick = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const title = idData.title
    const image = idData.image
    const price = idData.price
    const id = user._id
    const url = idData._id
    axios.post(`http://localhost:5000/api/favor/`, {
      title,
      image,
      price,
      id,
      url
    }, config)
 
    toast('즐겨찾기에서 추가되었습니다', toastObject)
  }


  // 찜목록에서 useparam으로 페이지 url 가져온 배열만 추출해서 삭제api에다가 넣어줌.
  function delIdGet(a) {
    if(a.url === url) {
      return true
    }
  }
  let ab = favor.find((delIdGet))

  // 즐겨찾기 off
  const favorNotClick = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    await axios.delete(`http://localhost:5000/api/favor/${ab._id}`, config)
 
    toast('즐겨찾기에서 제거되었습니다', toastObject);
  }

  useEffect(() => {
    getAllFavor()
  }, [favor, IsFavor])

  return (
    <Card sx={{ maxWidth: 700, margin: "50px auto" }}>
      <CardMedia
        component="img"
        height="400"
        image={idData.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {idData?.title}
        </Typography>
        <Typography variant="h6">
          가격 : {idData?.price}원
        </Typography>
        <Typography variant="h7" color="text.secondary" sx={{ marginTop: '40px' }}>
          {idData?.description}
        </Typography>
      </CardContent>
      {/* 내가 올린 상품은 찜하기 찜취소하기가 안보여야됨 */}
      {user._id === idData.user 
      ? <></> 
      :
      <CardActions>
        {IsFavor ? 
        <Button size="small" sx={{ color: "red" }}>
          <div onClick={() => favorClick()}>❤ 찜하기</div>
        </Button>  :         
        <Button size="small" sx={{ color: "red" }}>
          <div onClick={() => favorNotClick()}>❌ 찜 취소하기</div>
        </Button>}
      </CardActions>
      }
    </Card>
  );
}
