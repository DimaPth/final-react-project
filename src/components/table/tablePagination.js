import { useContext } from "react";
import { MainContext } from "../contexts/mainContext";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';



const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));


const TablePaginationActions = () => {
  const classes = useStyles1();
  const theme = useTheme();
  const {tableItems, page, setPage, rowsPerPage} = useContext(MainContext);

  const handleFirstPageButtonClick = (event) => {
    setPage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    setPage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    setPage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    setPage(event, Math.max(0, Math.ceil(tableItems.length / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(tableItems.length / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(tableItems.length / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}


export const CustomTablePagination = () => {
    const {tableItems, page, setPage, rowsPerPage, setRowsPerPage} = useContext(MainContext);
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableItems.length - page * rowsPerPage);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    return (
        <TableRow>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            colSpan={3}
            count={tableItems.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
            />
        </TableRow>
    );
}

