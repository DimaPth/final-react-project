import React from "react";
import { MainContextProvider } from "../../components/contexts/mainContext";
import { PageLayout } from "../../components/layouts/pageLayout";
import { MovieTable } from "../../components/table/movieTable";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  main: {
    background: 'linear-gradient( rgba(39, 39, 39, 0.6), rgba(0, 0, 0, 0.7) ), url(https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_S)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#f5f5f5',
  },
  wrap: {
    margin: theme.spacing(4)
  },
  table: {
    background: '#5a5a5a',
  }
}))

const TablePage = () => {
  const classes = useStyles();

    return (
        // <PageLayout title='Movies'>
        <>
        <div className={classes.main}>
          <div className={classes.wrap}>
          <Typography variant="h3" component="h2" gutterBottom>
            Добро пожаловать
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Миллионы фильмов и сериалов
          </Typography>
          </div>
        </div>
        {/* <Box m={5} mt={5} p={4} component={Paper} elevation={0} className={classes.table}> */}
          <MainContextProvider>
            <MovieTable />
          </MainContextProvider>
        {/* </Box> */}
        </>
        // </PageLayout>
    )
}

export {TablePage};