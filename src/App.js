import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 31.83,
    date: new Date(2019, 1, 21),
  },
  {
    id: 'e2',
    title: 'Computer',
    amount: 132.83,
    date: new Date(2020, 2, 22),
  },
  {
    id: 'e3',
    title: 'Chair',
    amount: 13.83,
    date: new Date(2020, 3, 23),
  },
  {
    id: 'e4',
    title: 'Tickets',
    amount: 4.83,
    date: new Date(2021, 4, 24),
  },
  {
    id: 'e5',
    title: 'Toys',
    amount: 125.09,
    date: new Date(2021, 5, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
