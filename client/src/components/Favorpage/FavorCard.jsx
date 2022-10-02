import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

export default function FavorCard({ favors }) {
 
    // 토큰을 가져와서 headers에 넣기 

    const data = JSON.parse(localStorage.getItem("user"));
    const token = data.token;


   
    return (
        <Card sx={{ maxWidth: 300, width: "100%" }}>
            <CardMedia
                component="img"
                height="200"
                image={favors.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                    {favors.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {favors.price} 원
                </Typography>
            </CardContent>
            <CardActions sx={{ display:"flex", justifyContent: "center"}}>
                <Link to={`/${favors.url}`}><Button variant="contained" size="small">상세보기</Button></Link>
            </CardActions>
        </Card>
    );
}
