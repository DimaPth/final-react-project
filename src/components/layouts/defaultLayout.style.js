import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  app: {
    display: "grid",
    gridTemplate: "auto 1fr / auto 1fr",
    height: "100vh",
    background: theme.palette.grey[100],
  },
  header: {
    gridColumn: "1/3",
    height: "64px",
  },
  content: {
    gridColumn: "2/3",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));