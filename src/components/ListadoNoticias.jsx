import { Grid, Typography } from "@mui/material"
import useNoticias from "../Hooks/useNoticias"
import Noticia from "./Noticia"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {

    const {noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()


    const totalPaginas = Math.ceil(totalNoticias / 20)

    

  return (
    <>

    <Typography textAlign={'center'} marginY={5} variant="h3" component={'h2'}>Últimas Noticias</Typography>

    <Grid container spacing={2}>
        {noticias.map(noticia => (
            <Noticia key={noticia.url} noticia={noticia}/>
        ))}
    </Grid>

    <Stack sx={{
        marginY: 5
    }} spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
    <Pagination  count={totalPaginas} color="primary" onChange={handleChangePagina} page={pagina}/>
     
    </Stack>
    </>
  )
}

export default ListadoNoticias