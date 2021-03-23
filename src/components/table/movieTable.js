import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useContext, useRef } from "react";
import { MainContext } from "../contexts/mainContext";
import { NavLink } from "react-router-dom";

const TableConfig = [
  { header: "Название", key: "Title" },
  { header: "Год", key: "Year" },
  { header: "Тип", key: "Type" },
];

const MovieTable = () => {
  const { tableItems, page, setText, nextPage, prevPage, text } = useContext(
    MainContext
  );
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };
  return (
    <>
      <TextField
        style={{ marginRight: 10 }}
        type="text"
        value={text}
        placeholder="Search"
        onChange={handleChange}
      />
      <Table>
        <TableHead>
          <TableRow>
            {TableConfig.map((cell) => (
              <TableCell>{cell.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItems.map((item) => {
            return (
              <TableRow>
                {TableConfig.map((cell) => {
                  return (
                    <TableCell>
                      <NavLink to={`/card/${item.imdbID}`}>
                        {item[cell.key]}
                      </NavLink>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow style={{ display: "flex", justifyContent: "flex-end" }}>
            <p>page: {page}</p>
            <IconButton disabled={page === 1} onClick={prevPage}>
              prev
            </IconButton>
            <IconButton onClick={nextPage}>next</IconButton>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export { MovieTable };
