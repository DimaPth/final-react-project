import React from "react";
import { Header } from "../header/header";
import { useStyles } from "./defaultLayout.style";

const DefaultLayout = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.content}>{children}</div>
        </div>
    )
}

export {DefaultLayout};