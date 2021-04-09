import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      "& > *": {
        marginTop: theme.spacing(2),
      },
      marginBottom: theme.spacing(3),
      paddingTop: theme.spacing(1),
    },
    searchBar: {
      "& > *": {
        margin: theme.spacing(3),
        width: "25ch",
      },
    },
    searchField: {
      padding: 10,
    },
    link: {
      textDecoration: "none",
      color: "black",
      margin: theme.spacing(2),
      fontSize: 20,
      color: theme.palette.common.black,
    },
    table: {
      minWidth: 650,
      background: "#8c8c8c",
    },
}));