import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material'

const Component = styled(Card)`

`

export default function AllCard({data}) {
  return (
    
        <Component sx={{ maxWidth: 300, width: "100%", height: "auto" }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="220"
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
                <Typography variant="body5"  color="text.secondary">
                    {data.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center"}}>
                <Button size="small" color="primary">
                <Fab  aria-label="like">
                <FavoriteIcon />
            </Fab>
                </Button>
            </CardActions>
        </Component>
    
  );
}