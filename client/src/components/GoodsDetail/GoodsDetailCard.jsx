import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';


export default function GoodsDetailCard({idData}) {

  return (
    <Card sx={{ maxWidth: 700, margin : "50px auto" }}>
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
        <Typography variant="h7" color="text.secondary" sx={{marginTop: '40px'}}>
        {idData?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><FavoriteIcon /> 찜하기</Button>
      </CardActions>
    </Card>
  );
}
