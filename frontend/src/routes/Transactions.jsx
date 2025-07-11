import React from "react";
import TransactionsList from "../components/TransactionsList";
import TransactionForm from "../components/TransactionForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

function Transactions({
  transactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
}) {
  const balance = transactions.reduce((acc, item) => {
    return item.type === "expense"
    ? acc - Number(item.amount)
    : acc + Number(item.amount);
  }, 0);

  return (
    <div>
      <Card>
        <CardHeader>Current Balance:</CardHeader>
        <CardContent>{balance}</CardContent>
      </Card>
  <TransactionForm addTransaction={addTransaction} />
  <TransactionsList 
  transactions={transactions}
  editTransaction={editTransaction}
  deleteTransaction={deleteTransaction} />
  </div>
  ); 
}
export default Transactions;