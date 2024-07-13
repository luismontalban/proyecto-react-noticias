import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './Context/NoticiasProvider';
import ListadoNoticias from './components/ListadoNoticias';


function App() {
  

  return (

    <NoticiasProvider>
         <Container>
      <header>
          <Typography variant='h4' align='center' marginY={5} component='h1'>
            Buscador de Noticias
          </Typography>
      </header>


      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} lg={4}>
      <Formulario />

        </Grid>
      </Grid>
      <ListadoNoticias />
    </Container>
    </NoticiasProvider>
   
  )
}

export default App
