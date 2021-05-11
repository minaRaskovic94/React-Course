import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expense.map((ei) => (
        <ExpenseItem title={ei.title} amount={ei.amount} date={ei.date} />
      ))}
    </Card>
  );
}

export default Expenses;
