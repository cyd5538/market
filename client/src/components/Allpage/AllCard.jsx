import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material'
import { Link } from 'react-router-dom';

const Component = styled(Card)`

`

export default function AllCard({ data }) {
    return (

        <Component sx={{ maxWidth: 300, width: "100%", height: "auto" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={data.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        가격 : {data.price}원
                    </Typography>
                    <Typography variant="body5" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>

                <Link style={{textDecoration: "none"}} to={`/${data._id}`}>
                    <Button variant="contained">
                        상세보기
                    </Button>
                </Link>
            </CardActions>
        </Component>

    );
}