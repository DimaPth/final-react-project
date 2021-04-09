import { makeStyles } from '@material-ui/core/styles'; 

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      margin: '0 auto',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      color: 'floralwhite',
    },
    appBar: {
      background: 'linear-gradient( rgb(0 0 0 / 80%), rgba(0, 0, 0, 0.7) )',
    }
}));