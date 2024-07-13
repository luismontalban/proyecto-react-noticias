import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

import { Grid, Link } from '@mui/material';


const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia
  return (

    
   <Grid item md={6} lg={4}>
    <Card>
        {urlToImage && (
        <CardMedia component="img" image={urlToImage} height={250} alt={`Imagen de la Noticia ${title}`} />
        

        )}

<CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {source.name}
        </Typography>
        <Typography variant="h5" color="text.secondary" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.primary" component="div">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        
        <Button component={Link} variant="outlined" href={url} target='_blank' width={'100%'} >Leer Mas</Button>
      </CardActions>
    </Card>


  
   </Grid>

   

   
  )
}

export default Noticia