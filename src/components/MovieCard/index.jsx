import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {POSTER} from '../../api/const'
import Grid from "@mui/material/Grid";


const MovieCard = (props) => {  
        return (
          <Grid container spacing={1} columns={{ xs: 3, sm: 6, md: 12 }} >
           {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
               <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 600 }}
              image={`${POSTER}${props.poster_path}`}
              title="Movies" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.overview}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
             </Grid>))}
          </Grid>








          /* <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 600 }}
              image={`${POSTER}${props.poster_path}`}
              title="Movies" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.overview}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
           */
         
          
          
          
        );
}
export default MovieCard;