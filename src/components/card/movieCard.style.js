import { makeStyles } from "@material-ui/core";

export const useStyles1 = makeStyles((theme) => ({
    root: {
      maxWidth: 900,
      margin: "0 auto",
      display: "flex",
      background:
        "linear-gradient( rgb(140 138 138 / 60%), rgb(53 50 50 / 70%) )",
      color: theme.palette.common.white,
    },
    media: {
      height: 440,
      width: 300,
    },
    link: {
      textDecoration: "none",
      color: "black",
      margin: theme.spacing(2),
    },
    cardContent: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  }));