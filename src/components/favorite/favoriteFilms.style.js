import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 20,
      marginRight: 15,
      maxWidth: 150,
      backgroundColor: '#292828',
      position: 'relative',
    },
    deleteAll: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 2,
      color: 'firebrick',
    },
    deleteIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: 2,
      color: 'firebrick',
    },
    media: {
      height: 225,
      width: 150,
    },
    container: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
    },
    content: {
      backgroundColor: '#292828',
      color: theme.palette.common.white,
    },
    text: {
      margin: '20px auto 0',
      color: theme.palette.common.white,
      textAlign: 'center',
    },
}));
  