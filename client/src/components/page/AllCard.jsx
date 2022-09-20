import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';




export default function AllCard({data}) {
  return (
    
        <Card sx={{ maxWidth: 345, width: "100%", height: "auto" }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
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
        <CardActions>
            <Button size="small" color="primary">
            <Fab  aria-label="like">
            <FavoriteIcon />
        </Fab>
            </Button>
        </CardActions>
        </Card>
    
  );
}