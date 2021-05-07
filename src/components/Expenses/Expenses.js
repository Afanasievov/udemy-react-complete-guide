import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const selectYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredItems = items.filter(
    ({ date }) => date.getFullYear() === +filteredYear,
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={selectYearHandler}
      />
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
