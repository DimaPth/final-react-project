import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import React, { useContext } from "react";
import { MainContext } from "../contexts/mainContext";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { useStyles } from './movieTable.style'

const tableConfig = [
  { header: "Название", key: "Title", isLink: true },
  { header: "Год", key: "Year" },
  { header: "Тип", key: "Type" },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    background: "linear-gradient( rgba(39, 39, 39, 0.6), rgba(0, 0, 0, 0.7) )",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "darkgrey",
    },
  },
}))(TableRow);

const MovieTable = () => {
  const { totalResults, tableItems, page, setPage, setText, text } = useContext(
    MainContext
  );
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const classes = useStyles();
  const pageChange = (event, value) => {
    setPage(value);
  };
  const result = Math.ceil(totalResults / 10);
  console.log(result);
  return (
    <>
      <div className={classes.searchBar}>
        <Paper style={{ borderRadius: 20, backgroundColor: "darkgrey" }}>
          <InputBase
            className={classes.searchField}
            placeholder="Search"
            type="text"
            value={text}
            onChange={handleChange}
          />
        </Paper>
      </div>

      <TableContainer style={{ borderRadius: 20, marginBottom: 30 }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              {tableConfig.map((cell) => (
                <StyledTableCell>
                  <Typography variant="h6">{cell.header}</Typography>
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {tableItems.map((item) => {
              return (
                <StyledTableRow>
                  {tableConfig.map((cell) => {
                    return (
                      <TableCell style={{ fontSize: 18, color: "white" }}>
                        {cell.isLink ? (
                          <NavLink
                            className={classes.link}
                            to={`/card/${item.imdbID}`}
                          >
                            {item[cell.key]}
                          </NavLink>
                        ) : (
                          item[cell.key]
                        )}
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            {/* <TableRow style={{ display: "flex", justifyContent: "flex-end" }}>
              <p>page: {page}</p>
              <IconButton disabled={page === 1} onClick={prevPage}>
                prev
              </IconButton>
              <IconButton onClick={nextPage}>next</IconButton>
            </TableRow> */}
            <TableRow className={classes.root}>
              <Typography variant="h6">Page: {page}</Typography>
              <Pagination
                m={1}
                count={result}
                page={page}
                onChange={pageChange}
                size="large"
                showFirstButton
                showLastButton
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export { MovieTable };
