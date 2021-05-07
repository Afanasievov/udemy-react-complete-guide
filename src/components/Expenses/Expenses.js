import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const selectYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredItems = items.filter(
    ({ date }) => date.getFullYear() === +filteredYear,
  );

  let expensesContent = <p>No Expenses found.</p>;
  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map(({ id, title, amount, date }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={selectYearHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
