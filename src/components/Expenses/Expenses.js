import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((ei) => (
        <ExpenseItem title={ei.title} amount={ei.amount} date={ei.date} />
      ))}
    </Card>
  );
};

export default Expenses;
