import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14,
        
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Checking", "$159"),
    createData("Checking-two", "$237"),
    createData("Savings", "$262"),
    createData("Joint-Check", "$305"),
    createData("Joint-Savings", "$356")
];

const useStyles = makeStyles({
    table: {
        minWidth: 250,
    }
});

export default function AccountView(props) {
    
    let accounts = [props.customerInfo.response2.checkingAccounts[0], props.customerInfo.response2.savingsAccounts[0]]
    console.log('after', accounts)
    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{width: '600px', whiteSpace: 'nowrap'}}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Account</StyledTableCell>
                        <StyledTableCell align="right">Balance</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts.map((account) => (
                        <StyledTableRow key={account.accountType}>
                            <StyledTableCell component="th" scope="row">
                                {account.accountType}
                            </StyledTableCell>
                            <StyledTableCell align="right">${account.balance}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
